import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Truck, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MaterialCategoryCard from "@/components/cards/MaterialCategoryCard";
import Button from "@/components/ui/Button";
import { materialsData } from "@/data/materials";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Building Materials Supply | Direct Bulk Supply",
  description:
    "Direct manufacturer supply of primary TMT steel, certified OPC/PPC cement, manufactured sand, coarse aggregates, and construction chemicals.",
};

export default function MaterialsPage() {
  const materialsFaqs = faqsData.filter((f) => f.category === "Materials");

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Division 03 // Bulk Building Materials Supply
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Direct-From-Mill Supply. Guaranteed Provenance.
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Supplying contractors, commercial builders, and infrastructure developers with primary TMT steel, certified cements, hydro-washed M-Sand, and structural chemicals. Delivered with original manufacturer batch test certificates and digital weighbridge verification.
          </p>
        </div>
      </section>

      {/* 4 Pillars of Material Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Truck className="w-6 h-6 text-[#B89A63] mb-3" />
            <h3 className="text-sm font-medium text-[#F3F1EC] mb-1">Dedicated FTL Fleet</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Pneumatic cement bulkers, 12-wheeler tippers, and articulated flatbeds guaranteeing 24-48 hour jobsite mobilization.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <ShieldCheck className="w-6 h-6 text-[#B89A63] mb-3" />
            <h3 className="text-sm font-medium text-[#F3F1EC] mb-1">Batch Test Certificates</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Every shipment includes original factory Mill Test Certificates (MTC) detailing yield, elongation, and setting times.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Scale className="w-6 h-6 text-[#B89A63] mb-3" />
            <h3 className="text-sm font-medium text-[#F3F1EC] mb-1">Weighbridge Integrity</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Automated tare and gross weight slips issued directly from government-calibrated weighbridges eliminating volume disputes.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <CheckCircle2 className="w-6 h-6 text-[#B89A63] mb-3" />
            <h3 className="text-sm font-medium text-[#F3F1EC] mb-1">Primary Plant Sourcing</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Direct tie-ups with primary integrated steel plants and tier-one cement producers. Zero secondary scrap re-rolling.
            </p>
          </div>
        </div>
      </section>

      {/* All 9 Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Category Directory"
          title="Explore Our 9 Core Material Categories"
          description="Click any category to review technical specifications, available sizes, packaging, and request direct wholesale pricing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {materialsData.map((category) => (
            <MaterialCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* Bulk Contractor Agreement Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 bg-[#15191D] border border-[#2A3035]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block mb-2">
                Contractor Enterprise Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-3">
                Annual Rate Contracts (ARC) & Buffered Jobsite Warehousing
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                Running multiple simultaneous commercial sites? Establish an Annual Rate Contract with GG Construction Co. to lock in monthly tonnage allotments, price-hedged TMT rates, and dedicated buffer inventory stored in our regional yards.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Button
                href="/contact?division=materials&subject=Annual%20Rate%20Contract%20Inquiry"
                variant="primary"
                size="md"
              >
                Inquire on Bulk ARC
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Materials FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Procurement FAQs"
          title="Common Bulk Material Sourcing Questions"
          description="Direct answers on minimum order tonnages, Mill Test Certificates, weighbridge verification, and logistics handling."
        />

        <div className="max-w-4xl mx-auto bg-[#15191D] border border-[#2A3035] p-6 sm:p-10">
          <div className="divide-y divide-[#2A3035]">
            {materialsFaqs.map((faq) => (
              <div key={faq.id} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#A7ADB3] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#2A3035] flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-[#A7ADB3]">
              Need technical advice on structural grade compatibility?
            </span>
            <Link
              href="/faqs"
              className="text-xs uppercase tracking-wider font-mono text-[#B89A63] hover:text-[#D0B47A] inline-flex items-center gap-1"
            >
              <span>View All 16 Corporate FAQs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#2A3035] bg-[#15191D]/50">
          <h2 className="text-2xl font-light text-[#F3F1EC] mb-3">
            Request an Immediate Spot Quotation
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            Share your delivery destination, required tonnage, and required grades for instant freight-inclusive quotes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/get-a-quote?division=materials" variant="primary" size="md">
              Request Materials Quote
            </Button>
            <Button href="/contact?division=materials" variant="outline" size="md">
              Speak to Materials Dispatch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
