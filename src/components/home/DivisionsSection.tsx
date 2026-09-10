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
      phaseRole: "Primary Business",
      tagline: "Trade Supply & Direct Site Delivery",
      description: "Our primary business focuses on supplying quality construction materials: cement, TMT steel, red bricks, AAC blocks, sand, aggregates, plumbing, and electrical supplies directly to your project site.",
      href: "/materials",
      icon: Boxes,
      accentColor: "#B89A63",
      connectedTo: "Supplies essential construction inputs directly to building plots",
      capabilities: [
        "Cement (OPC 43/53 & PPC 50 kg bags)",
        "TMT Reinforcement Steel (Fe 500 / Fe 500D)",
        "Kiln-Fired Red Bricks & Lightweight AAC Blocks",
        "Screened Concrete Sand, Aggregates & Plumbing",
      ],
    },
    {
      id: "construction",
      divisionNumber: "02",
      name: "Building Construction",
      shortTitle: "Building Work",
      phaseRole: "Secondary Business",
      tagline: "Low-Rise Residential & Commercial Construction",
      description: "Undertaking building construction for residential homes, independent floors, shops, small offices, and mixed-use structures up to approximately 4–5 floors maximum, along with renovations.",
      href: "/services",
      icon: HardHat,
      accentColor: "#B89A63",
      connectedTo: "Constructs small-to-medium residential & commercial buildings",
      capabilities: [
        "Residential Buildings & Family Homes (Up to 4–5 Floors)",
        "Commercial Buildings, Shops & Small Offices",
        "Structural RCC Frame & Brick Masonry Work",
        "Upper Floor Additions & Renovation Remodeling",
      ],
    },
    {
      id: "real-estate",
      divisionNumber: "03",
      name: "Real Estate Sales & Assistance",
      shortTitle: "Property Sales",
      phaseRole: "Secondary Business",
      tagline: "Property Sales, Marketing & Buyer Coordination",
      description: "Assisting customers with property enquiries, marketing opportunities on behalf of owners/developers, arranging site visits, and facilitating transparent buyer-seller coordination.",
      href: "/real-estate",
      icon: Building2,
      accentColor: "#667582",
      connectedTo: "Connects buyers and sellers with verified property opportunities",
      capabilities: [
        "Independent Residential Floors & Apartments",
        "Commercial Retail Shops & Office Units",
        "Clear-Title Freehold Residential Plots",
        "Buyer-Seller Coordination & Enquiry Assistance",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035] relative">
      <Container size="default">
        <SectionHeading
          eyebrow="Core Business Areas"
          title="Three Business Areas. One Trusted Name."
          description="GG Construction Co. provides dependable building materials supply as our primary commercial vertical, alongside practical building construction up to 4–5 floors and property sales assistance."
        />

        {/* Integration Continuum Visual Banner */}
        <div className="mb-10 p-4 bg-[#15191D] border border-[#2A3035] hidden md:flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-[#B89A63]">
            <span className="w-2 h-2 bg-[#B89A63]" />
            <span className="font-semibold uppercase tracking-wider">01. Building Materials (Primary)</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#667582]" />
          <div className="flex items-center gap-2 text-[#F3F1EC]">
            <span className="w-2 h-2 bg-[#B89A63]" />
            <span className="font-semibold uppercase tracking-wider">02. Building Construction (4–5 Floors)</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#667582]" />
          <div className="flex items-center gap-2 text-[#667582]">
            <span className="w-2 h-2 bg-[#667582]" />
            <span className="font-semibold uppercase tracking-wider">03. Real Estate Sales Assistance</span>
          </div>
          <span className="px-2 py-0.5 text-[10px] bg-[#0B0D0F] text-[#B89A63] border border-[#2A3035]">
            DIRECT & TRANSPARENT
          </span>
        </div>

        {/* Asymmetric Integrated Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {divisions.map((div) => {
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
                        AREA // {div.divisionNumber}
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
                      Business Role:
                    </span>
                    {div.connectedTo}
                  </div>

                  {/* Capabilities List */}
                  <div className="pt-4 border-t border-[#2A3035]/60 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
                      Core Scope
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
                    <span>Learn More</span>
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
