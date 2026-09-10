"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Filter, Building2, ShieldCheck, ArrowUpRight, CheckCircle2, Home, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import PropertyCard from "@/components/cards/PropertyCard";
import Button from "@/components/ui/Button";
import CTA from "@/components/ui/CTA";
import { propertiesData, PropertyStatus } from "@/data/properties";

const statusFilters: { id: string; label: string; status?: PropertyStatus }[] = [
  { id: "all", label: "All Developments" },
  { id: "Ready to Move", label: "Completed Developments", status: "Ready to Move" },
  { id: "Under Construction", label: "Under Construction", status: "Under Construction" },
  { id: "Upcoming Launch", label: "Upcoming Launches", status: "Upcoming Launch" },
];

export default function RealEstatePage() {
  const [activeStatus, setActiveStatus] = useState("all");

  const completedDevelopments = propertiesData.filter(
    (p) => p.status === "Ready to Move"
  );
  const upcomingDevelopments = propertiesData.filter(
    (p) => p.status === "Under Construction" || p.status === "Upcoming Launch"
  );

  const filteredProperties =
    activeStatus === "all"
      ? propertiesData
      : propertiesData.filter((p) => p.status === activeStatus);

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* 1. Hero & Division Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Division 02 // Real Estate & Property Development
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Sustainable Residential & Commercial Developments
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Unlike speculative developers who outsource construction to third-party general contractors, GG Construction Co. designs, engineers, and builds its own developments directly. The result: true structural permanence, low-density layouts, RERA escrow transparency, and certified acoustics.
          </p>
        </div>
      </section>

      {/* 2. RERA Transparency & Escrow Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 bg-[#15191D] border border-[#2A3035] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#B89A63] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#F3F1EC] font-semibold text-sm block">
                100% RERA Registered & Escrow Ring-Fenced
              </span>
              <span className="text-[#A7ADB3] block mt-0.5">
                All collections held in statutory bank escrow accounts with transparent quarterly progress audits and zero diversion of development capital.
              </span>
            </div>
          </div>
          <Button
            href="/contact?division=real-estate&subject=RERA%20Compliance%20Information"
            variant="outline"
            size="sm"
            className="flex-shrink-0"
          >
            Compliance Cell
          </Button>
        </div>
      </section>

      {/* 3. Integrated Construction Advantage Feature */}
      <section className="py-20 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="The Engineering Difference"
            title="The Integrated Construction Advantage"
            description="Why owning an asset built by its developer with in-house materials yields lifelong structural superiority."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#15191D] border border-[#2A3035]">
              <div className="text-lg font-mono text-[#B89A63] mb-2">01</div>
              <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                Zero Subcontractor Cutting
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Third-party contractors often pinch margins on concrete cover and rebar spacing. We build to institutional IS codes without compromise.
              </p>
            </div>

            <div className="p-6 bg-[#15191D] border border-[#2A3035]">
              <div className="text-lg font-mono text-[#B89A63] mb-2">02</div>
              <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                Direct Primary Materials
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Every beam and footing uses certified Fe 500D primary steel and OPC 53 cement sourced directly from integrated mills.
              </p>
            </div>

            <div className="p-6 bg-[#15191D] border border-[#2A3035]">
              <div className="text-lg font-mono text-[#B89A63] mb-2">03</div>
              <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                Acoustic & Thermal Comfort
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Precision autoclaved aerated concrete (AAC) wall blocks with double-glazed low-E facades provide exceptional sound isolation and energy efficiency.
              </p>
            </div>

            <div className="p-6 bg-[#15191D] border border-[#2A3035]">
              <div className="text-lg font-mono text-[#B89A63] mb-2">04</div>
              <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                Lifetime Structural Warranty
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Because our civil engineers supervised every pour, we provide extended structural guarantees and comprehensive as-built records.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Filter Tabs & Complete Developments Portfolio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A3035]">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <Filter className="w-4 h-4 text-[#B89A63] flex-shrink-0 mr-2" />
            {statusFilters.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveStatus(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all border ${
                  activeStatus === tab.id
                    ? "bg-[#B89A63] text-[#0B0D0F] border-[#B89A63] font-semibold"
                    : "bg-[#15191D] text-[#A7ADB3] border-[#2A3035] hover:text-[#F3F1EC] hover:border-[#667582]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-[#667582]">
            SHOWING {filteredProperties.length} OF {propertiesData.length} DEVELOPMENTS
          </span>
        </div>
      </section>

      {/* 5. Property Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredProperties.length === 0 ? (
          <div className="p-12 text-center bg-[#15191D] border border-[#2A3035]">
            <p className="text-sm text-[#A7ADB3]">No developments match the selected criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        )}
      </section>

      {/* 6. Property Opportunities: Landowner Joint Venture / JDA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 bg-[#15191D] border border-[#2A3035]">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block mb-2">
              Partnership & Property Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-4">
              Joint Venture & Joint Development Opportunities for Landowners
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
              Are you a landowner with a clear-title land parcel of 1 acre to 50 acres? Partner with GG Construction Co. under transparent Joint Development Agreements (JDA). We bring direct capital, turnkey civil engineering, statutory sanction capability, and building materials to maximize development yield without speculative risk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="/contact?division=real-estate&subject=Land%20Joint%20Development%20Proposal"
                variant="primary"
                size="md"
              >
                Submit Land Parcel Proposal
              </Button>
              <Button
                href="/get-a-quote?division=real-estate"
                variant="outline"
                size="md"
              >
                Inquire on Property Purchase
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Enquiry CTA */}
      <CTA
        eyebrow="Private Viewings & Advisory"
        title="Schedule a Private Site Tour or Request Master Plans"
        description="Our property advisory and customer relations team is available for personalized site walkthroughs, structural briefing sessions, and RERA documentation inspection."
        primaryCtaText="Contact Property Advisory"
        primaryCtaHref="/contact?division=real-estate"
        secondaryCtaText="Request Project Brochures"
        secondaryCtaHref="/get-a-quote?division=real-estate"
        showContacts={true}
      />
    </div>
  );
}
