import React from "react";
import Link from "next/link";
import { HardHat, Building2, Boxes, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function DivisionsSection() {
  const divisions = [
    {
      id: "materials",
      divisionNumber: "01",
      name: "Building Materials Supply",
      shortTitle: "Materials Supply",
      phaseRole: "The Foundation & Feedstock",
      tagline: "Direct-From-Mill Procurement & Quality Certification",
      description: "Direct primary mill allocations for Fe 500D TMT steel, certified OPC/PPC cements, VSI sand, and structural chemicals, eliminating middleman markups and supply bottlenecks.",
      href: "/materials",
      icon: Boxes,
      accentColor: "#B89A63",
      connectedTo: "Supplies raw inputs directly to civil jobsites",
      capabilities: [
        "Primary TMT Steel Rebars (Fe 500D / 550D)",
        "Certified Grade 53 OPC & PPC Cements",
        "Manufactured VSI Sand & Blue Metal Aggregates",
        "NABL Laboratory Batch Test Certificates (MTC)",
      ],
    },
    {
      id: "construction",
      divisionNumber: "02",
      name: "Construction & Engineering",
      shortTitle: "Civil Contracting",
      phaseRole: "The Structural Transformation",
      tagline: "Turnkey Civil, Commercial & Industrial Engineering",
      description: "Deploying laser screeds, system aluminum formwork, post-tensioned slabs, and BIM clash detection. We execute high-rises and mega logistics parks with zero subcontractor disputes.",
      href: "/services",
      icon: HardHat,
      accentColor: "#B89A63",
      connectedTo: "Engineers and builds civil structures & real estate assets",
      capabilities: [
        "Turnkey Single-Point Design-Build EPC",
        "Commercial Office Complexes & Tech Parks",
        "FM-2 Superflat Industrial Warehouses & PEB",
        "Deep Diaphragm Wall & Multi-Level Basements",
      ],
    },
    {
      id: "real-estate",
      divisionNumber: "03",
      name: "Real Estate & Property Development",
      shortTitle: "Property Development",
      phaseRole: "The Living Realization",
      tagline: "Sustainable Residential & Commercial Developments",
      description: "RERA-compliant residential gated enclaves and bespoke commercial suites built on clean-title land. Backed by direct engineering warranties for structural permanence.",
      href: "/real-estate",
      icon: Building2,
      accentColor: "#667582",
      connectedTo: "Delivers enduring assets directly to occupants & investors",
      capabilities: [
        "Low-Density Luxury Gated Communities",
        "100% RERA Registered with Escrow Ring-Fencing",
        "Bespoke Commercial & High-Street Retail Suites",
        "Joint Development Agreements (JDA) for Landowners",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035] relative">
      <Container size="default">
        <SectionHeading
          eyebrow="Vertical Integration"
          title="Three Connected Divisions. One Integrated Standard."
          description="GG Construction Co. operates not as three separate companies, but as a unified value chain. Material supply feeds structural engineering, which in turn delivers durable real estate assets under single-point corporate accountability."
        />

        {/* Integration Continuum Visual Banner */}
        <div className="mb-10 p-4 bg-[#15191D] border border-[#2A3035] hidden md:flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-[#B89A63]">
            <span className="w-2 h-2 bg-[#B89A63]" />
            <span className="font-semibold uppercase tracking-wider">01. Materials Supply</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#667582]" />
          <div className="flex items-center gap-2 text-[#F3F1EC]">
            <span className="w-2 h-2 bg-[#B89A63]" />
            <span className="font-semibold uppercase tracking-wider">02. Civil Engineering</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#667582]" />
          <div className="flex items-center gap-2 text-[#667582]">
            <span className="w-2 h-2 bg-[#667582]" />
            <span className="font-semibold uppercase tracking-wider">03. Property Development</span>
          </div>
          <span className="px-2 py-0.5 text-[10px] bg-[#0B0D0F] text-[#B89A63] border border-[#2A3035]">
            ZERO SUB-CONTRACT MARKUPS
          </span>
        </div>

        {/* Asymmetric Integrated Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {divisions.map((div, idx) => {
            const Icon = div.icon;
            return (
              <div
                key={div.id}
                className="group relative bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/70 transition-all duration-300 flex flex-col justify-between p-8 sm:p-10"
              >
                {/* Top Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] transition-all group-hover:h-[3px]"
                  style={{ backgroundColor: div.accentColor }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63] group-hover:border-[#B89A63] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono text-[#667582] block">
                        DIVISION // {div.divisionNumber}
                      </span>
                      <span className="text-[10px] text-[#B89A63] font-mono block">
                        {div.phaseRole}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                    {div.name}
                  </h3>

                  <p className="text-xs font-mono uppercase tracking-wider text-[#A7ADB3] mb-4">
                    {div.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
                    {div.description}
                  </p>

                  {/* Connected Value Link */}
                  <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] mb-6 text-[11px] text-[#A7ADB3]">
                    <span className="text-[#B89A63] font-semibold block uppercase tracking-wider text-[10px] mb-0.5">
                      Synergy Mechanism:
                    </span>
                    {div.connectedTo}
                  </div>

                  {/* Capabilities List */}
                  <div className="pt-4 border-t border-[#2A3035]/60 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
                      Core Operations
                    </span>
                    <ul className="space-y-2 text-xs text-[#A7ADB3]">
                      {div.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A63] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A3035] flex items-center justify-between">
                  <Link
                    href={div.href}
                    className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-2 transition-colors focus-visible:ring-1 focus-visible:ring-[#B89A63]"
                  >
                    <span>Explore Division</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B89A63] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-[#667582]">
                    GG CON CO.
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
