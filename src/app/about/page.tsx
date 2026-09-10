import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Users,
  HardHat,
  Compass,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Clock,
  Target,
  Eye,
  Building2,
  Boxes,
  Layers,
  Scale,
  Truck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import TestimonialCard from "@/components/cards/TestimonialCard";
import CTA from "@/components/ui/CTA";
import { companyData } from "@/data/company";
import { testimonialsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Us | GG Construction Co. — Building Materials, Construction & Real Estate",
  description:
    "Learn about GG Construction Co., our primary focus on building materials supply, practical small-to-medium construction up to 4–5 floors, and property sales assistance.",
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
            Practical Experience. Dependable Materials. Honest Service.
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            GG Construction Co. is a customer-focused business combining reliable building materials supply as our primary vertical, practical building construction for homes and commercial premises up to 4–5 floors, and transparent property sales assistance.
          </p>
        </div>
      </section>

      {/* 2. Hero Image Banner with Operational Mandate */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#15191D] border border-[#2A3035]">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1800&q=80"
            alt="GG Construction Co. building construction and materials operations"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="bg-[#0B0D0F]/90 backdrop-blur-md border border-[#2A3035] p-4 max-w-md">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89A63] block">
                BUSINESS FOCUS
              </span>
              <p className="text-xs text-[#F3F1EC] mt-1">
                Dependable material supply, quality low-rise construction, and transparent customer service.
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
              Company Overview
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#F3F1EC] leading-tight">
              A Practical Business Built on Construction Experience & Material Knowledge
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed">
              GG Construction Co. operates with a straightforward, customer-first approach. Our primary business is the supply of essential building materials—cement, TMT steel, red clay bricks, AAC blocks, sand, and aggregates—delivered directly to job sites across the region.
            </p>
            <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed">
              Alongside materials supply, we undertake small to medium-sized building construction work (typically residential homes, 3–4 floor apartments, shops, and small offices up to 4–5 floors maximum), as well as real-estate sales assistance and property marketing for owners and buyers.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#15191D] border border-[#2A3035] p-8 sm:p-10 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] pb-3 border-b border-[#2A3035]">
              Business Profile & Coverage
            </h3>
            <div className="grid grid-cols-2 gap-6 text-xs font-mono">
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Primary Business
                </span>
                <span className="text-[#B89A63] text-sm font-semibold">
                  Materials Supply
                </span>
              </div>
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Construction Scale
                </span>
                <span className="text-[#F3F1EC] text-sm font-semibold">
                  Up to 4–5 Floors
                </span>
              </div>
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Operating Region
                </span>
                <span className="text-[#F3F1EC] text-sm font-semibold">
                  {companyData.metrics.regionalFocus}
                </span>
              </div>
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Real Estate Desk
                </span>
                <span className="text-[#B89A63] text-sm font-semibold">
                  Sales Assistance
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#2A3035]/60 flex items-center gap-2 text-xs text-[#667582]">
              <AlertCircle className="w-4 h-4 text-[#B89A63] flex-shrink-0" />
              <span>Direct customer support via phone (+91 98110 34825) and email.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission, Vision & Core Values */}
      <section className="py-20 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Purpose & Principles"
            title="Mission, Vision & Core Values"
            description="The values guiding our everyday business conduct, customer relationships, and jobsite practices."
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
                Reliable Quality & Honest Building Practices
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
                A Respected Regional Partner in Materials & Construction
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                {companyData.vision}
              </p>
            </div>
          </div>

          {/* 5 Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* 5. Three Business Divisions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Business Areas"
          title="Three Connected Services"
          description="A balanced business model covering materials supply, small-to-mid construction, and property sales coordination."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyData.divisions.map((div, idx) => (
            <div
              key={div.id}
              className="p-8 bg-[#15191D] border border-[#2A3035] flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-mono text-[#B89A63]">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#667582]">
                    {div.statsPlaceholder}
                  </span>
                </div>

                <h3 className="text-xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                  {div.name}
                </h3>

                <p className="text-xs font-mono uppercase tracking-wider text-[#B89A63] mb-4">
                  {div.tagline}
                </p>

                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-6">
                  {div.description}
                </p>

                <ul className="space-y-2 text-xs text-[#F3F1EC] mb-6 pt-4 border-t border-[#2A3035]/60">
                  {div.capabilities.slice(0, 3).map((cap, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#B89A63]" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button href={div.href} variant="outline" size="sm" className="w-full">
                <span>Explore {div.shortName}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Practical Construction Philosophy */}
      <section className="py-20 bg-[#15191D]/30 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Quality Standards"
            title="Our Construction & Supply Principles"
            description="Every building project and material consignment is handled with care, honest measurement, and structural discipline."
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

      {/* 7. Leadership / Founder Section with Replaceable Placeholders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Leadership & Direction"
          title="Management & Founder Desk"
          description="Experienced leadership guiding building materials supply, on-site construction supervision, and customer relationships."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.leadership.map((leader, idx) => (
            <div
              key={idx}
              className="bg-[#15191D] border border-[#2A3035] overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] w-full bg-[#1D2227]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <span className="text-[10px] font-mono text-[#B89A63] block mb-1">
                  {leader.credentialsPlaceholder}
                </span>
                <h3 className="text-base font-medium text-[#F3F1EC] mb-1">
                  {leader.name}
                </h3>
                <div className="text-xs text-[#A7ADB3] font-medium mb-3">
                  {leader.role}
                </div>
                <p className="text-xs text-[#667582] leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Company Journey Milestones */}
      <section className="py-20 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Journey & Growth"
            title="Practical Milestones"
            description="A steady journey built step-by-step through materials supply, low-rise construction, and customer trust."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {companyData.milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#0B0D0F] border border-[#2A3035] p-6 flex flex-col justify-between relative"
              >
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-[#B89A63]" />
                <div>
                  <span className="text-xs font-mono text-[#B89A63] block mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-sm font-medium text-[#F3F1EC] mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Client Benefits Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Customer Benefits"
          title="Why Customers Depend on GG Construction Co."
          description="Practical, day-to-day advantages when purchasing materials or constructing with us."
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

      {/* 10. Customer Feedback Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Customer Perspective"
        />

        <div className="max-w-3xl mx-auto">
          <TestimonialCard testimonial={featuredTestimonial} />
        </div>
      </section>

      {/* 11. Final Conversion CTA */}
      <CTA
        eyebrow="Contact GG Construction Co."
        title="Speak With Our Team Today"
        description="Whether you need building materials delivered to your site, construction advice for a 3–4 floor building, or property sales assistance, we are here to help."
        primaryCtaText="Enquire Now"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Materials"
        secondaryCtaHref="/materials"
        showContacts={true}
      />
    </div>
  );
}
