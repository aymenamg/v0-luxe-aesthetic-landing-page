import { NextRequest, NextResponse } from 'next/server';

// This endpoint is ready for integration with:
// - Supabase (database storage)
// - Resend (email notifications)
// - Webhook to external CRM/booking system

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate incoming data
    const { name, email, phone, service, goal, skinType } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('[v0] Lead received:', { name, email, phone, service, goal, skinType });

    // TODO: Implement storage logic
    // Example with Supabase:
    // const { data, error } = await supabase
    //   .from('leads')
    //   .insert([{ name, email, phone, service, goal, skin_type: skinType }]);

    // TODO: Send email notification with Resend
    // Example:
    // const response = await resend.emails.send({
    //   from: 'leads@luxeaesthetic.com',
    //   to: email,
    //   subject: 'Your Personalized Treatment Plan',
    //   html: `Thank you for your interest! Here's your customized recommendation...`
    // });

    // TODO: Send webhook to booking system (JaneApp, Mindbody, etc.)
    // Example:
    // await fetch('https://your-booking-system.com/webhook', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, phone, preferredService: service })
    // });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        leadId: `lead_${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
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
