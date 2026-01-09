import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO, COMPANY } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.defaultDescription,
  keywords: [...SEO.keywords],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO.siteUrl,
    siteName: COMPANY.name,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Add Google verification code
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: COMPANY.name,
              description: COMPANY.description,
              url: SEO.siteUrl,
              telephone: COMPANY.phone.main,
              address: {
                "@type": "PostalAddress",
                streetAddress: COMPANY.address.street,
                addressLocality: COMPANY.address.city,
                addressRegion: COMPANY.address.state,
                postalCode: COMPANY.address.zip,
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                // TODO: Add exact coordinates
                latitude: 34.7746,
                longitude: -96.6783,
              },
              areaServed: {
                "@type": "State",
                name: "Oklahoma",
              },
              priceRange: "$$",
              paymentAccepted: "Cash, Credit Card, Debit Card, Check",
              openingHours: "Mo-Fr 07:00-18:00",
              sameAs: [
                // TODO: Add social media URLs
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
