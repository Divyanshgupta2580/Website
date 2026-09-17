import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";
import FloatingContactBar from "@/components/layout/FloatingContactBar";
import { companyData } from "@/data/company";
import { getBaseUrl } from "@/lib/env";

export const viewport: Viewport = {
  themeColor: "#18324A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GG Construction Co. | Building Construction",
    template: "%s | GG Construction Co.",
  },
  description:
    "GG Construction Co. specializes in low-rise building construction for residential homes, builder floors, shops, and small offices across Rohini, Pitampura, and nearby areas of Delhi.",
  keywords: [
    "GG Construction Co.",
    "construction company",
    "building construction",
    "residential construction",
    "commercial construction",
    "low rise construction",
    "construction contractor",
    "building contractor",
    "construction services",
    "Rohini construction",
    "Pitampura construction",
    "Delhi construction",
  ],
  authors: [{ name: "GG Construction Co." }],
  creator: "GG Construction Co.",
  publisher: "GG Construction Co.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "GG Construction Co.",
    title: "GG Construction Co. | Building Construction",
    description:
      "Reliable low-rise building construction for homes and commercial premises across Rohini, Pitampura, and nearby areas of Delhi.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "GG Construction Co. Building Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GG Construction Co. | Building Construction",
    description:
      "Low-rise residential and commercial building construction in Rohini, Pitampura, and Delhi.",
    images: ["https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Organization Schema JSON-LD (GeneralContractor)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: companyData.name,
    legalName: companyData.legalName,
    description: companyData.positioning,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    telephone: companyData.contact.phoneFormatted,
    email: companyData.contact.email,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Rohini, Delhi",
      },
      {
        "@type": "AdministrativeArea",
        name: "Pitampura, Delhi",
      },
      {
        "@type": "AdministrativeArea",
        name: "Delhi NCR",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\\\u003c"),
          }}
        />
      </head>
      <body className="bg-[#F4F2EE] text-[#20272D] font-sans antialiased flex flex-col min-h-screen">
        <SkipToContent />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <FloatingContactBar />
      </body>
    </html>
  );
}
