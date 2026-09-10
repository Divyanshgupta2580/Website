import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Award, Users, HardHat, Compass, ArrowUpRight, AlertCircle, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Engineering Heritage & Leadership",
  description:
    "Learn about GG Construction Co., our vertical integration across construction, property development, and building materials supply.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
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
            GG Construction Co. was conceived to resolve the fundamental flaw in Indian construction: fragmented accountability. By connecting raw materials supply, civil design-build contracting, and real estate development under one institutional brand, we deliver certainty in a market prone to compromise.
          </p>
        </div>
      </section>

      {/* Hero Image / Architectural Collage */}
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

      {/* The 3-Division Synergy Story */}
      <section className="py-16 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architectural Philosophy"
            title="The Three Pillars of Vertical Synergy"
            description="Why our business divisions are structurally intertwined to benefit our clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#15191D] border border-[#2A3035]">
              <div className="text-2xl font-light text-[#B89A63] font-mono mb-4">01. Sourcing</div>
              <h3 className="text-lg font-medium text-[#F3F1EC] mb-3">Building Materials Division</h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Direct primary mill allocations for Fe 500D TMT steel, OPC/PPC cements, and hydro-washed VSI sand. We test every batch in certified laboratories before dispatching to jobsites.
              </p>
            </div>

            <div className="p-8 bg-[#15191D] border border-[#2A3035]">
              <div className="text-2xl font-light text-[#B89A63] font-mono mb-4">02. Execution</div>
              <h3 className="text-lg font-medium text-[#F3F1EC] mb-3">Construction & Engineering</h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Turnkey civil engineering deploying laser screeds, aluminum system formwork, and BIM clash detection. We manage deep subterranean basements and large-span PEBs with zero subcontracting hand-offs.
              </p>
            </div>

            <div className="p-8 bg-[#15191D] border border-[#2A3035]">
              <div className="text-2xl font-light text-[#B89A63] font-mono mb-4">03. Development</div>
              <h3 className="text-lg font-medium text-[#F3F1EC] mb-3">Real Estate & Property</h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                RERA-compliant residential enclaves and commercial spaces built on land with clean title due-diligence. Our buyers inherit true structural durability backed by in-house engineering warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section with Replaceable Placeholders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Executive Governance"
          title="Technical Leadership"
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

      {/* Quality, Safety & Regulatory Affiliations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#15191D] border border-[#2A3035] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block mb-2">
                Quality & Safety Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-4">
                Institutional Certifications & Safety Mandates
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
                {companyData.qualityPolicy}
              </p>
              <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] inline-flex items-center gap-2.5 text-xs text-[#B89A63] font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>SAFETY LOG: {companyData.safetyRecordPlaceholder}</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2.5">
              <span className="text-xs uppercase tracking-wider text-[#667582] block mb-2">
                Accreditation Register
              </span>
              {companyData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#0B0D0F] border border-[#2A3035] flex items-center justify-between text-xs"
                >
                  <span className="text-[#F3F1EC] font-mono">{cert}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#B89A63] flex-shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#2A3035] bg-[#15191D]/50">
          <h2 className="text-2xl font-light text-[#F3F1EC] mb-3">
            Engage Directly With Our Engineering Directorate
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            Review blueprints, schedule a structural audit, or discuss material supply agreements for your active sites.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Contact Directorate
            </Button>
            <Button href="/get-a-quote" variant="outline" size="md">
              Request Project Estimate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
