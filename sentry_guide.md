# Sentry Setup Guide

This guide outlines the steps to integrate Sentry into the LuxeAesthetic Next.js project for error reporting and user feedback.

## 1. Create a Sentry Account
1. Go to [sentry.io](https://sentry.io/) and sign up or log in.
2. Create a new organization (if you don't have one) and create a **new project**.
3. Select **Next.js** as your platform.

## 2. Automated Setup (Recommended)
Run the Sentry wizard in the root of your project:
```bash
npx @sentry/wizard@latest -i nextjs
```
The wizard will automatically:
- Install the `@sentry/nextjs` SDK in your `package.json`.
- Create the necessary configuration files (`sentry.client.config.ts`, `sentry.server.config.ts`, `sentry.edge.config.ts`).
- Update your `next.config.mjs` with the Sentry Webpack plugin.
- Prompt you to log in to connect the project and fetch your auth tokens.

## 3. Environment Variables
Make sure to add the generated Auth Token to your environment (`.env.local` and your deployment platform like Vercel):
```env
SENTRY_AUTH_TOKEN=your_generated_sentry_auth_token
```

## 4. Setting Up User Feedback Loop
To allow users to easily report issues or submit feedback directly from the website:

In your `sentry.client.config.ts`, make sure the `feedbackIntegration` is enabled in your `integrations` array:

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_DSN_HERE", // The wizard configures this automatically
  
  integrations: [
    Sentry.feedbackIntegration({
      // You can customize the widget appearance here
      colorScheme: "dark", 
      themeLight: {
        submitBackground: "#000000",
        submitForeground: "#ffffff",
      },
      isNameRequired: false,
      isEmailRequired: true,
    }),
  ],
});
```
This automatically displays a floating "Report a Bug" or "Feedback" button on your frontend.

## 5. Testing the Setup
1. **Error Tracking:** Throw a deliberate error in a component (e.g., `throw new Error("Sentry Test Error");`) and verify it appears in your Sentry dashboard.
2. **User Feedback:** Use the floating feedback widget on the frontend to submit a test report, then check if it successfully logged to your Sentry issues stream.
