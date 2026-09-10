"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Filter, Building2, ShieldCheck, ArrowUpRight, CheckCircle2, Home, Sparkles, MapPin, PhoneCall } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import PropertyCard from "@/components/cards/PropertyCard";
import Button from "@/components/ui/Button";
import CTA from "@/components/ui/CTA";
import { propertiesData, PropertyStatus } from "@/data/properties";

const statusFilters: { id: string; label: string; status?: PropertyStatus }[] = [
  { id: "all", label: "All Properties" },
  { id: "Ready to Move", label: "Ready to Move", status: "Ready to Move" },
  { id: "Under Construction", label: "Under Construction", status: "Under Construction" },
  { id: "Available", label: "Available Plots / Units", status: "Available" },
];

export default function RealEstatePage() {
  const [activeStatus, setActiveStatus] = useState("all");

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
              Real Estate Sales & Property Assistance
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Real Estate Sales & Property Assistance
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            GG Construction Co. assists customers with finding properties, property enquiries, property marketing, and buyer-seller coordination. We connect buyers with verified property owners and developers while maintaining complete transparency about property origins.
          </p>
        </div>
      </section>

      {/* 2. Transparency & Advisory Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 bg-[#15191D] border border-[#2A3035] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#B89A63] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#F3F1EC] font-semibold text-sm block">
                Clear Distinction & Honest Property Marketing
              </span>
              <span className="text-[#A7ADB3] block mt-0.5">
                Every property listed clearly specifies whether it is marketed on behalf of an owner/developer, an external opportunity, or constructed by GG Construction Co.
              </span>
            </div>
          </div>
          <Button
            href="/contact?division=real-estate"
            variant="outline"
            size="sm"
            className="flex-shrink-0"
          >
            Property Enquiry Desk
          </Button>
        </div>
      </section>

      {/* 3. How We Assist Property Buyers & Sellers */}
      <section className="py-20 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Our Services"
            title="How We Assist Buyers & Property Owners"
            description="Practical support throughout property search, site visits, and transactions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#15191D] border border-[#2A3035]">
              <div className="text-lg font-mono text-[#B89A63] mb-2">01</div>
              <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                Finding Properties
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Helping you find independent floors, apartments, commercial shops, and residential plots matching your budget and preferred location.
              </p>
            </div>

            <div className="p-6 bg-[#15191D] border border-[#2A3035]">
              <div className="text-lg font-mono text-[#B89A63] mb-2">02</div>
              <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                Site Walkthroughs
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Coordinating on-site property walkthroughs so you can inspect physical condition, neighborhood road width, and construction quality firsthand.
              </p>
            </div>

            <div className="p-6 bg-[#15191D] border border-[#2A3035]">
              <div className="text-lg font-mono text-[#B89A63] mb-2">03</div>
              <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                Buyer-Seller Coordination
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Transparent coordination between buyers and property owners or developers, ensuring honest communication with zero hidden markups.
              </p>
            </div>

            <div className="p-6 bg-[#15191D] border border-[#2A3035]">
              <div className="text-lg font-mono text-[#B89A63] mb-2">04</div>
              <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                Documentation Guidance
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Assisting with basic document checks (sale deed, registry chain, and municipal sanctions) for a safe and smooth transaction.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Filter Tabs & Complete Opportunities Portfolio */}
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
            SHOWING {filteredProperties.length} OF {propertiesData.length} PROPERTY OPPORTUNITIES
          </span>
        </div>
      </section>

      {/* 5. Property Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredProperties.length === 0 ? (
          <div className="p-12 text-center bg-[#15191D] border border-[#2A3035]">
            <p className="text-sm text-[#A7ADB3]">No properties match the selected criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        )}
      </section>

      {/* 6. Assistance for Property Owners & Developers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 bg-[#15191D] border border-[#2A3035]">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block mb-2">
              For Property Owners & Developers
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-4">
              Looking to Market or Sell Your Property?
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
              If you own residential floors, commercial shops, or plot layouts, GG Construction Co. can help you reach active property seekers through localized marketing, organized site walkthroughs, and buyer-seller coordination.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="/contact?division=real-estate&subject=Property%20Listing%20Enquiry"
                variant="primary"
                size="md"
              >
                List Your Property With Us
              </Button>
              <Button
                href="/contact?division=real-estate"
                variant="outline"
                size="md"
              >
                Contact Property Desk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Enquiry CTA */}
      <CTA
        eyebrow="Property Enquiries"
        title="Looking for a Property or Have an Enquiry?"
        description="Speak with our property coordination desk for current opportunities, site visits, and honest property advice."
        primaryCtaText="Enquire Now"
        primaryCtaHref="/contact?division=real-estate"
        secondaryCtaText="Call +91 98110 34825"
        secondaryCtaHref="tel:+919811034825"
        showContacts={true}
      />
    </div>
  );
}
