import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/cards/TestimonialCard";
import CTA from "@/components/ui/CTA";
import { companyData } from "@/data/company";
import { testimonialsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Us | GG Construction Co. — Building Construction",
  description:
    "GG Construction Co. focuses on practical building construction for residential and low-rise commercial projects across Rohini, Pitampura and nearby areas of Delhi.",
};

export default function AboutPage() {
  const featuredTestimonial = testimonialsData[0];

  return (
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-extrabold uppercase tracking-[0.2em] text-[#D96B27]">
              01 //
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18324A]">
              ABOUT GG CONSTRUCTION CO.
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-4">
            Practical Building Construction in North-West Delhi.
          </h1>
          <p className="text-base sm:text-lg text-[#66717A] leading-relaxed">
            GG Construction Co. focuses on practical building construction for residential and low-rise commercial projects. The company has construction experience across Rohini, Pitampura and nearby areas of Delhi.
          </p>
        </div>
      </section>

      {/* 2. Hero Image Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#E8E6E1] border border-[#D5D4D0] rounded-xl shadow-xs">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1800&q=80"
            alt="GG Construction Co. on-site building execution in Delhi NCR [Representative Example]"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="bg-white/95 backdrop-blur-xs border border-[#D5D4D0] p-3 max-w-md rounded-lg shadow-xs">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#D96B27] block">
                PRACTICAL SCOPE
              </span>
              <p className="text-xs text-[#18324A] font-bold mt-0.5">
                Low-rise residential and commercial structures with attentive on-site supervision.
              </p>
            </div>
            <div className="text-right text-xs font-bold text-[#18324A] bg-white/95 p-2 px-3 border border-[#D5D4D0] rounded-lg shadow-xs">
              Rohini &bull; Pitampura &bull; Delhi NCR
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#D96B27] block">
              LOCAL CONSTRUCTION PRESENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18324A] leading-tight">
              A Direct, Practical Approach to Building
            </h2>
            <p className="text-sm text-[#66717A] leading-relaxed">
              GG Construction Co. focuses on practical building construction for residential and low-rise commercial projects. The company has construction experience across Rohini, Pitampura and nearby areas of Delhi.
            </p>
            <p className="text-sm text-[#66717A] leading-relaxed">
              We concentrate on independent houses, builder floors, retail shops, and small commercial buildings up to 4–5 floors maximum. We manage structural framing, masonry, and finishing directly on site with dedicated daily supervision and transparent milestone accounting.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#D5D4D0] p-6 sm:p-8 rounded-xl shadow-xs space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] font-extrabold text-[#18324A] pb-3 border-b border-[#D5D4D0]">
              CONFIRMED COMPANY SCOPE
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#66717A] block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Primary Focus
                </span>
                <span className="text-[#18324A] text-sm font-extrabold">
                  Building Construction
                </span>
              </div>
              <div>
                <span className="text-[#66717A] block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Structure Scale
                </span>
                <span className="text-[#18324A] text-sm font-extrabold">
                  Up to 4–5 Floors
                </span>
              </div>
              <div>
                <span className="text-[#66717A] block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Key Localities
                </span>
                <span className="text-[#18324A] text-sm font-extrabold">
                  Rohini &amp; Pitampura
                </span>
              </div>
              <div>
                <span className="text-[#66717A] block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Region
                </span>
                <span className="text-[#D96B27] text-sm font-extrabold">
                  Delhi NCR
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#D5D4D0] flex items-center gap-2 text-xs text-[#20272D] font-medium">
              <MapPin className="w-4 h-4 text-[#D96B27] flex-shrink-0" />
              <span>Direct communication with project supervisors (+91 98110 34825).</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Practical Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeading
          sectionNumber="02"
          eyebrow="PRINCIPLES"
          title="Practical Construction Principles"
          description="Every building project is handled with direct supervision, honest measurement, and structural discipline."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.practicalPrinciples.map((phil, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#D5D4D0] p-6 rounded-xl shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-mono font-extrabold text-[#D96B27] block mb-2">
                  {`0${idx + 1}`}
                </span>
                <h3 className="text-sm font-bold text-[#18324A] mb-2">
                  {phil.title}
                </h3>
                <p className="text-xs text-[#66717A] leading-relaxed">
                  {phil.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Client Testimonial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeading
          sectionNumber="03"
          eyebrow="FEEDBACK"
          title="Client Feedback"
        />

        <div className="max-w-3xl mx-auto">
          <TestimonialCard testimonial={featuredTestimonial} />
        </div>
      </section>

      {/* 4. Final Conversion CTA */}
      <CTA
        eyebrow="04 // CONTACT"
        title="PLANNING A CONSTRUCTION PROJECT?"
        description="Tell us about your building requirement and we'll get in touch."
        primaryCtaText="GET A QUOTE"
        primaryCtaHref="/get-a-quote"
        secondaryCtaText="VIEW PROJECTS"
        secondaryCtaHref="/projects"
        showContacts={true}
      />
    </div>
  );
}
