"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Filter, Building2, ShieldCheck, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/cards/PropertyCard";
import Button from "@/components/ui/Button";
import { propertiesData, PropertyStatus } from "@/data/properties";

const statusFilters: { id: string; label: string; status?: PropertyStatus }[] = [
  { id: "all", label: "All Developments" },
  { id: "Under Construction", label: "Under Construction", status: "Under Construction" },
  { id: "Ready to Move", label: "Ready to Move / OC Received", status: "Ready to Move" },
  { id: "Upcoming Launch", label: "Upcoming Launches", status: "Upcoming Launch" },
];

export default function RealEstatePage() {
  const [activeStatus, setActiveStatus] = useState("all");

  const filteredProperties = activeStatus === "all"
    ? propertiesData
    : propertiesData.filter((p) => p.status === activeStatus);

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
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
            Unlike speculative developers who outsource construction, GG Construction Co. designs, engineers, and builds its own developments directly. The result: true structural permanence, low-density layouts, RERA escrow transparency, and certified acoustics.
          </p>
        </div>
      </section>

      {/* RERA Transparency Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-4 sm:p-6 bg-[#15191D] border border-[#2A3035] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#B89A63] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#F3F1EC] font-medium block">
                100% RERA Registered & Escrow Ring-Fenced
              </span>
              <span className="text-[#A7ADB3] block mt-0.5">
                All collections held in statutory bank escrow accounts with transparent quarterly progress auditing.
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

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#2A3035] scrollbar-none">
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
      </section>

      {/* Property Cards Grid */}
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

      {/* Landowner / Joint Venture Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 bg-[#15191D] border border-[#2A3035]">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block mb-2">
              Partnership Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-4">
              Joint Venture & Joint Development Opportunities for Landowners
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
              Are you a landowner with a clear-title land parcel of 1 acre to 50 acres? Partner with GG Construction Co. under transparent Joint Development Agreements (JDA). We bring direct capital, turnkey civil engineering, statutory sanction capability, and building materials to maximize development yield.
            </p>
            <Button
              href="/contact?division=real-estate&subject=Land%20Joint%20Development%20Proposal"
              variant="primary"
              size="md"
            >
              Submit Land Parcel Proposal
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#2A3035] bg-[#15191D]/50">
          <h2 className="text-2xl font-light text-[#F3F1EC] mb-3">
            Schedule a Private Site Tour or Request Floor Plans
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            Our property advisory team is available for personalized site walkthroughs and structural briefing sessions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact?division=real-estate" variant="primary" size="md">
              Schedule Site Walkthrough
            </Button>
            <Button href="/get-a-quote?division=real-estate" variant="outline" size="md">
              Inquire Availability & Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
