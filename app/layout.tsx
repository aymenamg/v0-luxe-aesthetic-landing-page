import type { Metadata } from 'next'
import { Playfair_Display, Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'sonner'
import { StickyMobileCTA } from '@/components/sticky-mobile-cta'
import { ScrollProgress } from '@/components/scroll-progress'
import { LiveBookingToast } from '@/components/live-booking-toast'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});
const inter = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LuxeAesthetic Med Spa | Premium Aesthetic Treatments',
  description: 'Experience luxury aesthetic treatments with Elena. Expert injectables, laser therapy, and personalized skincare in a serene environment.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "LuxeAesthetic Med Spa",
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1500&auto=format&fit=crop",
    "@id": "https://luxeaesthetic.example.com",
    "url": "https://luxeaesthetic.example.com",
    "telephone": "+15550001234",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Luxury Boulevard, Suite 500",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94104",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.789128,
      "longitude": -122.401490
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "205"
    }
  };

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ScrollProgress />
        {children}
        <StickyMobileCTA />
        <LiveBookingToast />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
