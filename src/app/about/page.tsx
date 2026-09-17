import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  HardHat,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Target,
  Eye,
  Building2,
  MapPin,
  Hammer,
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
    "Learn about GG Construction Co., a trusted building contractor specializing in low-rise residential and commercial construction up to 4–5 floors across Rohini, Pitampura, and Delhi.",
};

export default function AboutPage() {
  const featuredTestimonial = testimonialsData[0];

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              About GG Construction Co.
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Reliable Low-Rise Building Construction.
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            GG Construction Co. is a practical building construction contractor focused on low-rise residential homes, builder floors, shops, and commercial spaces up to 4–5 floors, with extensive project experience in Rohini, Pitampura, and surrounding Delhi localities.
          </p>
        </div>
      </section>

      {/* 2. Hero Image Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#15191D] border border-[#2A3035]">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1800&q=80"
            alt="GG Construction Co. building construction operations and site execution"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="bg-[#0B0D0F]/90 backdrop-blur-md border border-[#2A3035] p-4 max-w-md">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89A63] block">
                CORE FOCUS
              </span>
              <p className="text-xs text-[#F3F1EC] mt-1">
                Rigorous structural execution, transparent milestones, and attentive site supervision for low-rise structures.
              </p>
            </div>
            <div className="text-right font-mono text-xs text-[#A7ADB3] bg-[#0B0D0F]/80 p-2 border border-[#2A3035]">
              {companyData.establishedPlaceholder}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block">
              Company Background
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#F3F1EC] leading-tight">
              A Practical Building Contractor with Genuine Local Experience
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed">
              GG Construction Co. has carried out construction work across Rohini, Pitampura, and nearby areas of Delhi. We operate with a straightforward, transparent approach centered on dependable craftsmanship and close jobsite oversight.
            </p>
            <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed">
              We specialize in practical building construction projects—typically residential independent homes, builder floors, shopfronts, and small commercial office buildings up to approximately 4–5 floors. We avoid overextended promises and focus strictly on delivering durable, structurally sound buildings on agreed timelines.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#15191D] border border-[#2A3035] p-8 sm:p-10 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] pb-3 border-b border-[#2A3035]">
              Operational Profile & Scope
            </h3>
            <div className="grid grid-cols-2 gap-6 text-xs font-mono">
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Primary Business
                </span>
                <span className="text-[#B89A63] text-sm font-semibold">
                  Building Construction
                </span>
              </div>
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Maximum Scale
                </span>
                <span className="text-[#F3F1EC] text-sm font-semibold">
                  Up to 4–5 Floors
                </span>
              </div>
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Key Operating Areas
                </span>
                <span className="text-[#F3F1EC] text-sm font-semibold">
                  Rohini & Pitampura
                </span>
              </div>
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Region
                </span>
                <span className="text-[#B89A63] text-sm font-semibold">
                  Delhi NCR
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#2A3035]/60 flex items-center gap-2 text-xs text-[#667582]">
              <MapPin className="w-4 h-4 text-[#B89A63] flex-shrink-0" />
              <span>Direct communication with project supervisors (+91 98110 34825).</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission, Vision & Core Values */}
      <section className="py-20 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Purpose & Principles"
            title="Mission, Vision & Principles"
            description="The values guiding our day-to-day jobsite management, structural standards, and client relationships."
          />

          {/* Mission & Vision Twin Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-[#15191D] border border-[#2A3035]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0B0D0F] border border-[#2A3035] flex items-center justify-center text-[#B89A63]">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#B89A63]">
                  OUR MISSION
                </span>
              </div>
              <h3 className="text-xl font-light text-[#F3F1EC] mb-3">
                Reliable Construction & Honest Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                {companyData.mission}
              </p>
            </div>

            <div className="p-8 bg-[#15191D] border border-[#2A3035]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0B0D0F] border border-[#2A3035] flex items-center justify-center text-[#B89A63]">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#B89A63]">
                  OUR VISION
                </span>
              </div>
              <h3 className="text-xl font-light text-[#F3F1EC] mb-3">
                A Respected Local Building Contractor
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                {companyData.vision}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0B0D0F] border border-[#2A3035] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#B89A63] block mb-2">
                    {`0${idx + 1} // VALUE`}
                  </span>
                  <h4 className="text-sm font-medium text-[#F3F1EC] mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Construction Principles */}
      <section className="py-20 bg-[#15191D]/30 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Quality Standards"
            title="Our Practical Construction Principles"
            description="Every building project is handled with direct supervision, honest measurement, and structural discipline."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.practicalPrinciples.map((phil, idx) => (
              <div
                key={idx}
                className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl font-light font-mono text-[#B89A63] block mb-3">
                    {`// 0${idx + 1}`}
                  </span>
                  <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                    {phil.title}
                  </h3>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">
                    {phil.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Client Benefits Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Client Advantages"
          title="Why Clients Choose GG Construction Co."
          description="Clear advantages of working directly with a dedicated low-rise building contractor."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.benefits.map((b, idx) => (
            <div key={idx} className="p-6 bg-[#15191D] border border-[#2A3035]">
              <CheckCircle2 className="w-5 h-5 text-[#B89A63] mb-3" />
              <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
                {b.title}
              </h4>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Customer Feedback */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Client Perspective"
          title="What Our Clients Say"
        />

        <div className="max-w-3xl mx-auto">
          <TestimonialCard testimonial={featuredTestimonial} />
        </div>
      </section>

      {/* 8. Final Conversion CTA */}
      <CTA
        eyebrow="Plan Your Construction"
        title="Ready to Discuss Your Project?"
        description="Speak with our construction team regarding your residential or commercial building project in Rohini, Pitampura, or nearby Delhi areas."
        primaryCtaText="Get a Construction Quote"
        primaryCtaHref="/get-a-quote"
        secondaryCtaText="View Construction Projects"
        secondaryCtaHref="/projects"
        showContacts={true}
      />
    </div>
  );
}
