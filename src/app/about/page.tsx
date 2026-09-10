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
  title: "About Us | Engineering Heritage & Leadership",
  description:
    "Learn about GG Construction Co., our vertical integration across construction, property development, and building materials supply.",
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
              Corporate Profile & Engineering Heritage
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Engineering Precision. Material Provenance. Total Accountability.
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            GG Construction Co. brings together construction expertise, real-estate engineering, and dependable building-material supply under one trusted name. We resolve the systemic fragmentation of Indian construction through vertically integrated corporate accountability.
          </p>
        </div>
      </section>

      {/* 2. Hero Image Banner with Operational Mandate */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#15191D] border border-[#2A3035]">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1800&q=80"
            alt="GG Construction Co. civil engineering site operations"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="bg-[#0B0D0F]/90 backdrop-blur-md border border-[#2A3035] p-4 max-w-md">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89A63] block">
                OPERATIONAL MANDATE
              </span>
              <p className="text-xs text-[#F3F1EC] mt-1">
                Zero substitution of uncertified materials. Zero subcontracting of critical structural engineering.
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
              One Unified Standard Across the Complete Construction Value Chain
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed">
              In conventional construction, the supply chain is fractured: material distributors disclaim responsibility for structural delays, general contractors blame subcontractor workmanship, and developers pass maintenance defects to end buyers.
            </p>
            <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed">
              GG Construction Co. operates differently. We own the direct relationships with primary steel mills and cement manufacturers, deploy our own structural engineering workforce, and supervise our developments with in-house testing laboratories.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#15191D] border border-[#2A3035] p-8 sm:p-10 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] pb-3 border-b border-[#2A3035]">
              Institutional Telemetry & Governance
            </h3>
            <div className="grid grid-cols-2 gap-6 text-xs font-mono">
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Years in Operation
                </span>
                <span className="text-[#B89A63] text-sm font-semibold">
                  {companyData.metrics.yearsInIndustry}
                </span>
              </div>
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Delivered Scale
                </span>
                <span className="text-[#F3F1EC] text-sm font-semibold">
                  {companyData.metrics.completedProjects}
                </span>
              </div>
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Regional Presence
                </span>
                <span className="text-[#F3F1EC] text-sm font-semibold">
                  {companyData.metrics.citiesPresence}
                </span>
              </div>
              <div>
                <span className="text-[#667582] block text-[10px] uppercase tracking-wider mb-1">
                  Annual Material Volume
                </span>
                <span className="text-[#B89A63] text-sm font-semibold">
                  {companyData.metrics.materialTonnageAnnually}
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#2A3035]/60 flex items-center gap-2 text-xs text-[#667582]">
              <AlertCircle className="w-4 h-4 text-[#B89A63] flex-shrink-0" />
              <span>All statistics are centrally validated against operational audit records.</span>
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
            description="The governing philosophy guiding our structural engineering decisions, material procurement, and stakeholder relationships."
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
                Uncompromising Structural Permanence
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
                The Institutional Benchmark in Indian Engineering
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
          eyebrow="Vertical Integration"
          title="Three Integrated Business Divisions"
          description="How raw material supply feeds structural civil engineering, which in turn delivers enduring real estate assets."
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

      {/* 6. Engineering Philosophy */}
      <section className="py-20 bg-[#15191D]/30 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Rigor Over Shortcuts"
            title="Our Engineering Philosophy"
            description="Concrete and steel do not forgive compromises. We structure every project around four scientific mandates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.engineeringPhilosophy.map((phil, idx) => (
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
          eyebrow="Executive Governance"
          title="Technical Leadership Directorate"
          description="Led by veteran structural engineers, procurement strategists, and statutory compliance specialists."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  sizes="(max-width: 768px) 100vw, 25vw"
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

      {/* 8. Company Milestones Timeline */}
      <section className="py-20 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Chronicle of Growth"
            title="Institutional Milestones"
            description="A track record of disciplined expansion from civil foundation contracting into a multi-vertical infrastructure leader."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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
          eyebrow="The Client Advantage"
          title="Strategic Benefits of Choosing GG Construction Co."
          description="Measurable operational advantages delivered by our single-partner model."
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

      {/* 10. Featured Testimonial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Stakeholder Endorsement"
          title="Enterprise Partner Perspective"
        />

        <div className="max-w-3xl mx-auto">
          <TestimonialCard testimonial={featuredTestimonial} />
        </div>
      </section>

      {/* 11. Final Conversion CTA */}
      <CTA
        eyebrow="Initiate Corporate Engagement"
        title="Engage Directly With Our Engineering Directorate"
        description="Review blueprints, schedule an on-site geotechnical review, or establish long-term bulk material agreements for your active sites."
        primaryCtaText="Contact Directorate"
        primaryCtaHref="/contact"
        secondaryCtaText="Request Project Estimate"
        secondaryCtaHref="/get-a-quote"
        showContacts={true}
      />
    </div>
  );
}
