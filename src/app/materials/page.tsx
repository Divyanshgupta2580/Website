import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Truck, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MaterialCategoryCard from "@/components/cards/MaterialCategoryCard";
import Button from "@/components/ui/Button";
import { overviewMaterials } from "@/data/materials";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Building Materials Supply | GG Construction Co.",
  description:
    "Primary supplier of construction materials: cement, red clay bricks, AAC blocks, sand, aggregates, shuttering plywood, hardware, and site essentials with dependable jobsite delivery.",
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
              Primary Business // Building Materials Supply
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Quality Construction Materials Supply
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Our primary business deals in the sale and supply of essential building materials: cement, red clay bricks, AAC blocks, sand, stone aggregates, shuttering plywood, hardware, and site essentials with dependable plot delivery for residential and commercial construction projects.
          </p>
        </div>
      </section>

      {/* 4 Pillars of Material Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Truck className="w-6 h-6 text-[#B89A63] mb-3" />
            <h3 className="text-sm font-medium text-[#F3F1EC] mb-1">Direct Site Delivery</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Coordinated local truck, tipper, and trolley deliveries directly to your construction plot or warehouse.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <ShieldCheck className="w-6 h-6 text-[#B89A63] mb-3" />
            <h3 className="text-sm font-medium text-[#F3F1EC] mb-1">Standard Quality Products</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Supplied fresh from reputable manufacturers conforming to Bureau of Indian Standards (IS codes).
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Scale className="w-6 h-6 text-[#B89A63] mb-3" />
            <h3 className="text-sm font-medium text-[#F3F1EC] mb-1">Honest Measurement</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Transparent weighbridge slips and accurate bag and piece counts with zero volumetric discrepancies.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <CheckCircle2 className="w-6 h-6 text-[#B89A63] mb-3" />
            <h3 className="text-sm font-medium text-[#F3F1EC] mb-1">Competitive Rates</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Transparent daily pricing and wholesale discounts for contractors and complete house project orders.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories Grid (7 Core Categories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Product Catalog"
          title="Explore Our Core Material Categories"
          description="Browse our primary building materials: cement, bricks & blocks, sand, aggregates, shuttering plywood, hardware, and site essentials. Contact us for today's pricing and plot delivery options."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {overviewMaterials.map((category) => (
            <MaterialCategoryCard key={category.slug} category={category} />
          ))}
        </div>

        {/* Contractor Desk Assistance for Specialized Materials */}
        <div className="mt-12 p-6 bg-[#15191D] border border-[#2A3035] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-medium text-[#F3F1EC] block">
              Contractor Supply for Additional Project Materials
            </span>
            <p className="text-xs text-[#A7ADB3] mt-1 leading-relaxed">
              Need reinforcement steel, plumbing pipes, or electrical conduits? We also coordinate bulk wholesale dispatches for active construction sites.
            </p>
          </div>
          <Button
            href="/contact?division=materials"
            variant="outline"
            size="sm"
            className="flex-shrink-0"
          >
            <span>Inquire with Desk</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>
      </section>

      {/* Bulk Contractor Supply Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 bg-[#15191D] border border-[#2A3035]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block mb-2">
                Contractor &amp; Bulk Orders
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-3">
                Bulk Supply for Active Building Sites
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                Constructing a residential building, apartment floors, or commercial shops? GG Construction Co. coordinates regular truckload dispatches of cement, sand, bricks, and shuttering materials so your project never halts for lack of materials.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Button
                href="/contact"
                variant="primary"
                size="md"
              >
                Inquire on Bulk Supply
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Materials FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Material FAQs"
          title="Common Material Sourcing Questions"
          description="Clear answers regarding order quantities, site deliveries, and material specifications."
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
              Need help estimating material quantities for your plot?
            </span>
            <Link
              href="/contact"
              className="text-xs uppercase tracking-wider font-mono text-[#B89A63] hover:text-[#D0B47A] inline-flex items-center gap-1"
            >
              <span>Contact Our Materials Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#2A3035] bg-[#15191D]/50">
          <h2 className="text-2xl font-light text-[#F3F1EC] mb-3">
            Request an Immediate Material Price Quote
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            Share your delivery address and required material quantities for prompt pricing and delivery options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Enquire Now
            </Button>
            <Button href="tel:+919811034825" variant="outline" size="md">
              Call +91 98110 34825
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
