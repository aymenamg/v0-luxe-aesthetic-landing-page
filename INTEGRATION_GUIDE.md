# Backend Integration Guide

This guide explains how to connect the landing page to your backend services.

## Quick Links
- [Supabase](#supabase-lead-storage)
- [Resend](#resend-email-notifications)
- [Booking Systems](#booking-system-integration)
- [Analytics](#analytics-tracking)

---

## Supabase (Lead Storage)

### 1. Create Database Table

```sql
-- Create leads table in Supabase
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  service VARCHAR(255),
  goal VARCHAR(255),
  skin_type VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create index for email lookup
CREATE INDEX idx_leads_email ON leads(email);
```

### 2. Add Supabase Package

```bash
pnpm add @supabase/supabase-js
```

### 3. Setup Environment Variables

In your `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Create Supabase Client

File: `lib/supabase.ts`
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### 5. Update API Route

File: `app/api/leads/route.ts` - Replace the TODO section:

```typescript
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, goal, skinType } = body;

    // Insert into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          service,
          goal,
          skin_type: skinType,
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}
```

---

## Resend (Email Notifications)

### 1. Get API Key

1. Go to [resend.com](https://resend.com)
2. Create account and get API key
3. Add to environment variables

### 2. Install Package

```bash
pnpm add resend
```

### 3. Setup Environment Variables

```
RESEND_API_KEY=your-resend-api-key
```

### 4. Create Email Template

File: `lib/email-templates.ts`
```typescript
export const leadConfirmationEmail = (name: string, recommendation: string) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #2D2D2D; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #C5A059; color: white; padding: 20px; }
        .content { background-color: #F9F7F2; padding: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to LuxeAesthetic, ${name}!</h1>
        </div>
        <div class="content">
          <p>Thank you for taking our skin quiz. Based on your responses, here's your personalized recommendation:</p>
          <p><strong>${recommendation}</strong></p>
          <p>Schedule your consultation to get started on your beauty journey.</p>
        </div>
      </div>
    </body>
  </html>
`;
```

### 5. Update API Route

File: `app/api/leads/route.ts` - Add after Supabase insert:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// After successful Supabase insert:
await resend.emails.send({
  from: 'LuxeAesthetic <hello@luxeaesthetic.com>',
  to: email,
  subject: 'Your Personalized Treatment Plan - LuxeAesthetic',
  html: leadConfirmationEmail(name, `Check out our ${service || goal} treatments!`),
});
```

---

## Booking System Integration

### JaneApp Integration

```typescript
// In page.tsx or components/mobile-nav.tsx
const BOOKING_URL = 'https://your-clinic.janeapp.com';

<Button 
  onClick={() => window.location.href = BOOKING_URL}
>
  Book on JaneApp
</Button>
```

### Mindbody Integration

```typescript
const BOOKING_URL = 'https://clients.mindbody.io/login?studioid=YOUR_STUDIO_ID';

// Or use their widget:
// 1. Add script to layout.tsx
// 2. Initialize with your location ID
```

### Boulevard Integration

```typescript
// Boulevard uses embedded booking
import { EmbeddedScheduling } from '@boulevard/embedded-scheduling';

export default function BookingEmbed() {
  return (
    <EmbeddedScheduling
      businessId="your-business-id"
      location="your-location"
    />
  );
}
```

### Webhook to Booking System

File: `app/api/leads/route.ts`

```typescript
// After successful lead capture, trigger booking system
if (service) {
  await fetch(process.env.BOOKING_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      phone,
      preferredService: service,
      timestamp: new Date(),
    }),
  });
}
```

Add to `.env.local`:
```
BOOKING_WEBHOOK_URL=https://your-booking-system.com/api/leads
```

---

## Analytics Tracking

### Google Analytics

#### 1. Install Package
```bash
pnpm add @react-google-analytics/core
```

#### 2. Add to layout.tsx
```typescript
import { GoogleAnalytics } from '@react-google-analytics/core';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics trackingId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
```

#### 3. Track Events
```typescript
// In quick-book-form.tsx
const onSubmit = async (data) => {
  gtag.event('form_submission', {
    event_category: 'engagement',
    event_label: 'quick_book',
    service: data.service,
  });
  // ... rest of submission
};
```

### Vercel Analytics

Already integrated! Just monitor in Vercel dashboard.

---

## Environment Variables Checklist

Add these to your `.env.local` for development and to Vercel dashboard for production:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Email
RESEND_API_KEY=

# Booking System
BOOKING_WEBHOOK_URL=
NEXT_PUBLIC_BOOKING_URL=

# Analytics
NEXT_PUBLIC_GA_ID=

# Sentry (Optional - Error tracking)
NEXT_PUBLIC_SENTRY_DSN=
```

---

## Testing Integration

### 1. Local Testing

```bash
# Add test values to .env.local
NEXT_PUBLIC_SUPABASE_URL=https://test.supabase.co
RESEND_API_KEY=test_key_123

# Run dev server
pnpm dev

# Test forms at http://localhost:3000
```

### 2. Check API Logs

```bash
# In Supabase dashboard:
# 1. Go to SQL Editor
# 2. SELECT * FROM leads;
# 3. Verify new records appear

# In Resend dashboard:
# 1. Check "Emails" section
# 2. Verify emails are sent
```

### 3. Test Complete Flow

1. Fill out Quick Book form
2. Check Supabase for new lead
3. Check Resend email logs
4. Test quiz and personalized email

---

## Error Handling

All endpoints include error handling. Add logging service:

### Sentry Integration

```bash
pnpm add @sentry/nextjs
```

In `app/api/leads/route.ts`:
```typescript
import * as Sentry from '@sentry/nextjs';

try {
  // ... code
} catch (error) {
  Sentry.captureException(error);
  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  );
}
```

---

## Deployment Steps

### 1. Prepare Environment Variables
- [ ] Get Supabase credentials
- [ ] Get Resend API key
- [ ] Get booking system webhook URL
- [ ] Get Google Analytics ID

### 2. Add to Vercel Dashboard
```
Project Settings → Environment Variables
Add all .env variables
```

### 3. Deploy
```bash
git push origin main
# Vercel automatically deploys
```

### 4. Verify Production
- [ ] Test forms work
- [ ] Emails are sent
- [ ] Leads appear in Supabase
- [ ] Analytics track correctly
- [ ] Booking redirects work

---

## Troubleshooting

### Form submissions fail
- Check API console for errors
- Verify environment variables are set
- Check CORS settings if using external APIs

### Emails not sending
- Verify Resend API key is correct
- Check email address is valid
- Look in Resend spam folder

### Leads not saving to Supabase
- Verify table exists with correct schema
- Check Supabase API keys
- Verify RLS policies allow inserts

### Booking redirects broken
- Verify booking URL is correct
- Test URL in browser directly
- Check if external site blocks embeds

---

## Support

Need help? Check:
1. Component prop types in respective files
2. API endpoint validation in `/api/leads/route.ts`
3. Data structure in `lib/data.ts`
4. Schemas in `lib/schemas.ts`

For service-specific help:
- Supabase: docs.supabase.com
- Resend: resend.com/docs
- Vercel: vercel.com/docs
