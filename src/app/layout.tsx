import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";
import FloatingContactBar from "@/components/layout/FloatingContactBar";
import { companyData } from "@/data/company";

export const viewport: Viewport = {
  themeColor: "#0B0D0F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://ggconstruction.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GG Construction Co. | Construction, Real Estate & Materials Engineering",
    template: "%s | GG Construction Co.",
  },
  description:
    "GG Construction Co. is an Indian integrated construction and real-estate engineering firm with three connected divisions: Construction & Engineering, Real Estate & Property Development, and Building Materials Supply.",
  keywords: [
    "GG Construction Co.",
    "construction company India",
    "turnkey civil contracting",
    "commercial construction",
    "industrial PEB warehouse",
    "real estate developer",
    "TMT steel supplier",
    "bulk cement supply",
    "M-Sand aggregates",
    "RERA compliant real estate",
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
    title: "GG Construction Co. | Engineering, Development & Materials",
    description:
      "One trusted partner from materials and engineering through construction and development.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "GG Construction Co. Architectural Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GG Construction Co. | Construction, Real Estate & Materials",
    description:
      "Integrated engineering, property development, and building material supply in India.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"],
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
  // Structured Organization Schema JSON-LD
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
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [
      "https://www.linkedin.com/company/gg-construction",
      "https://twitter.com/ggconstruction",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\\\u003c"),
          }}
        />
      </head>
      <body className="bg-[#0B0D0F] text-[#F3F1EC] font-sans antialiased flex flex-col min-h-screen">
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
