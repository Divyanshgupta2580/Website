import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  HardHat,
  CheckCircle2,
  Target,
  Eye,
  Building2,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import TestimonialCard from "@/components/cards/TestimonialCard";
import CTA from "@/components/ui/CTA";
import { companyData } from "@/data/company";
import { testimonialsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Us | GG Construction Co. — Building Construction",
  description:
    "Learn about GG Construction Co., a trusted local building contractor specializing in low-rise residential and commercial construction up to 4–5 floors across Rohini, Pitampura, and Delhi.",
};

export default function AboutPage() {
  const featuredTestimonial = testimonialsData[0];

  return (
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#D96B27]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96B27]">
              ABOUT GG CONSTRUCTION CO.
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-5">
            Reliable Low-Rise Building Construction.
          </h1>
          <p className="text-base sm:text-lg text-[#66717A] leading-relaxed">
            GG Construction Co. is a practical building construction contractor focused on low-rise residential homes, builder floors, shops, and commercial spaces up to 4–5 floors, with extensive project experience in Rohini, Pitampura, and surrounding Delhi localities.
          </p>
        </div>
      </section>

      {/* 2. Hero Image Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-white border border-[#D5D4D0] rounded-sm shadow-xs">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1800&q=80"
            alt="GG Construction Co. building construction operations and site execution"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="bg-white/95 backdrop-blur-sm border border-[#D5D4D0] p-3.5 max-w-md rounded-sm shadow-xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#D96B27] block">
                CORE FOCUS
              </span>
              <p className="text-xs text-[#18324A] font-bold mt-0.5">
                Rigorous structural execution, transparent milestones, and attentive site supervision for low-rise structures.
              </p>
            </div>
            <div className="text-right text-xs font-bold text-[#18324A] bg-white/95 p-2 px-3 border border-[#D5D4D0] rounded-sm shadow-xs">
              Rohini &bull; Pitampura &bull; Delhi NCR
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#D96B27] block">
              Company Background
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18324A] leading-tight">
              A Practical Building Contractor with Genuine Local Experience
            </h2>
            <p className="text-sm sm:text-base text-[#66717A] leading-relaxed">
              GG Construction Co. has carried out construction work across Rohini, Pitampura, and nearby areas of Delhi. We operate with a straightforward, transparent approach centered on dependable craftsmanship and close jobsite oversight.
            </p>
            <p className="text-sm sm:text-base text-[#66717A] leading-relaxed">
              We specialize in practical building construction projects—typically residential independent homes, builder floors, shopfronts, and small commercial office buildings up to approximately 4–5 floors. We avoid overextended promises and focus strictly on delivering durable, structurally sound buildings on agreed timelines.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#D5D4D0] p-7 sm:p-9 rounded-sm shadow-xs space-y-6">
            <h3 className="text-xs uppercase tracking-[0.18em] font-extrabold text-[#18324A] pb-3 border-b border-[#D5D4D0]">
              Operational Profile &amp; Scope
            </h3>
            <div className="grid grid-cols-2 gap-5 text-xs">
              <div>
                <span className="text-[#66717A] block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Primary Business
                </span>
                <span className="text-[#18324A] text-sm font-extrabold">
                  Building Construction
                </span>
              </div>
              <div>
                <span className="text-[#66717A] block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Maximum Scale
                </span>
                <span className="text-[#18324A] text-sm font-extrabold">
                  Up to 4–5 Floors
                </span>
              </div>
              <div>
                <span className="text-[#66717A] block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Key Operating Areas
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

      {/* 4. Mission & Vision */}
      <section className="py-16 bg-white border-y border-[#D5D4D0] mb-20">
        <Container size="default">
          <SectionHeading
            eyebrow="Purpose & Principles"
            title="Mission, Vision & Principles"
            description="The values guiding our day-to-day jobsite management, structural standards, and client relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-7 bg-[#F4F2EE] border border-[#D5D4D0] rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white border border-[#D5D4D0] rounded-sm flex items-center justify-center text-[#18324A]">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#D96B27]">
                  OUR MISSION
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#18324A] mb-2">
                Reliable Construction &amp; Honest Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#66717A] leading-relaxed">
                {companyData.mission}
              </p>
            </div>

            <div className="p-7 bg-[#F4F2EE] border border-[#D5D4D0] rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white border border-[#D5D4D0] rounded-sm flex items-center justify-center text-[#18324A]">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#D96B27]">
                  OUR VISION
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#18324A] mb-2">
                A Respected Local Building Contractor
              </h3>
              <p className="text-xs sm:text-sm text-[#66717A] leading-relaxed">
                {companyData.vision}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#D5D4D0] rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#D96B27] block mb-2">
                    {`0${idx + 1} // VALUE`}
                  </span>
                  <h4 className="text-sm font-bold text-[#18324A] mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#66717A] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Construction Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeading
          eyebrow="Quality Standards"
          title="Our Practical Construction Principles"
          description="Every building project is handled with direct supervision, honest measurement, and structural discipline."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.practicalPrinciples.map((phil, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#D5D4D0] p-6 sm:p-7 rounded-sm shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-extrabold text-[#18324A] block mb-2">
                  {`0${idx + 1}`}
                </span>
                <h3 className="text-base font-bold text-[#18324A] mb-2">
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

      {/* 6. Client Testimonial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeading
          eyebrow="Client Perspective"
          title="What Our Clients Say"
        />

        <div className="max-w-3xl mx-auto">
          <TestimonialCard testimonial={featuredTestimonial} />
        </div>
      </section>

      {/* 7. Final Conversion CTA */}
      <CTA
        eyebrow="GET IN TOUCH"
        title="Planning a Construction Project?"
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
