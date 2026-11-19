import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { practice, services } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: false,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: "SmileQuest Dental — Comprehensive Dentistry in Devils Lake, ND",
    template: "%s",
  },
  description: practice.description,
  applicationName: practice.name,
  authors: [{ name: practice.name }],
  creator: practice.name,
  publisher: practice.name,
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: practice.name,
    title: "SmileQuest Dental — Comprehensive Dentistry in Devils Lake, ND",
    description: practice.description,
    images: [{ url: "/assets/images/main-hero.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileQuest Dental — Devils Lake, ND",
    description: practice.description,
    images: ["/assets/images/main-hero.webp"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ea",
  colorScheme: "light",
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: practice.name,
  description: practice.description,
  telephone: practice.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: practice.addressAlt,
    addressLocality: practice.city,
    addressRegion: practice.state,
    postalCode: practice.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  },
  sameAs: [practice.facebookUrl],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.name },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="flex min-h-dvh flex-col bg-cream text-ink">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
      </body>
    </html>
  );
}
