import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { QUIZ_RECOMMENDATIONS } from '@/lib/data';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

// Initialize a Supabase client specifically for the backend using the Service Role Key
// This allows us to bypass Row Level Security (RLS) safely on the server side.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// This endpoint is ready for integration with:
// - Supabase (database storage)
// - Resend (email notifications)
// - Webhook to external CRM/booking system

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate incoming data
    const { name, email, phone, service, goal, skinType, source } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('[v0] Lead received:', { name, email, phone, service, goal, skinType, source });

    const notes = `Goal: ${goal} | Skin Type: ${skinType}`;

    // Insert lead into Supabase. Removed .select() so it doesn't trigger a SELECT RLS violation for anonymous users.
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          service,
          source,
          notes,
        },
      ]);

    if (error) {
      console.error('[v0] Supabase insert error:', error);
      throw error;
    }

    // Send email notification with Resend
    if (process.env.RESEND_API_KEY) {
      // 1. Send Auto-Responder to the Lead
      if (source === 'skin-quiz') {
        const recommendation = QUIZ_RECOMMENDATIONS[goal as keyof typeof QUIZ_RECOMMENDATIONS];
        const treatmentsHTML = recommendation?.treatments.map(t => `<li>${t}</li>`).join('') || '';

        await resend.emails.send({
          from: 'LuxeAesthetic Med Spa <onboarding@resend.dev>', // Using Resend testing domain
          to: email,
          subject: 'Your Personalized Med Spa Treatment Plan! ✨',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2>Hello ${name},</h2>
              <p>Thank you for taking our Skin & Goals Quiz! Based on your answers, Elena has prepared a customized path for you.</p>
              
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>${recommendation?.title || 'Your Custom Plan'}</h3>
                <p>${recommendation?.description || 'We will discuss a custom plan tailored exactly to your needs during your consultation.'}</p>
                ${treatmentsHTML ? `<h4>Recommended Focus Areas:</h4><ul>${treatmentsHTML}</ul>` : ''}
              </div>
              
              <p>We'd love to see you in the clinic to start your journey.</p>
            </div>
          `
        });
      } else {
        await resend.emails.send({
          from: 'LuxeAesthetic Med Spa <onboarding@resend.dev>', 
          to: email,
          subject: 'We received your Booking Request! ✨',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2>Hello ${name},</h2>
              <p>Thank you for requesting an appointment for ${service}!</p>
              <p>Our team will reach out to you at ${phone} within the next 24 hours to confirm your consultation time.</p>
              <p>We look forward to welcoming you to LuxeAesthetic Med Spa.</p>
            </div>
          `
        });
      }

      // 2. Send Notification to the Clinic Owner
      await resend.emails.send({
        from: 'Luxe System <onboarding@resend.dev>',
        to: 'aymenameghchouche123@gmail.com', // Assuming this is the clinic's email based on your tests
        subject: `New Lead Captured: ${name} (${source})`,
        html: `
          <h3>New Lead Alert!</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Interest/Service:</strong> ${service}</li>
            <li><strong>Source:</strong> ${source}</li>
            <li><strong>Notes:</strong> ${notes}</li>
          </ul>
        `
      });
    } else {
      console.warn('[v0] RESEND_API_KEY is missing. Emails were not sent.');
    }

    // TODO: Send webhook to booking system (JaneApp, Mindbody, etc.)
    // Example:
    // await fetch('https://your-booking-system.com/webhook', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, phone, preferredService: service })
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[v0] API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message || error.toString(), fullError: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Lead capture endpoint is active' },
    { status: 200 }
  );
}
