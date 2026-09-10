"use client";

import React, { useState } from "react";
import { Filter, HelpCircle, ArrowUpRight, Building2, HardHat, Home, Package, FileSpreadsheet } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { faqsData, FAQItem } from "@/data/faqs";

const categories = [
  "All Categories",
  "General",
  "Construction",
  "Real Estate",
  "Materials",
  "Quotes and Process",
] as const;

type CategoryType = typeof categories[number];

const categoryMeta: Record<
  Exclude<CategoryType, "All Categories">,
  { title: string; subtitle: string; icon: React.ComponentType<{ className?: string }> }
> = {
  General: {
    title: "General & Business Overview",
    subtitle: "How our building materials, construction, and property assistance operations work together.",
    icon: Building2,
  },
  Construction: {
    title: "Building Construction",
    subtitle: "Residential and commercial building work (up to 4–5 floors), renovations, and site supervision.",
    icon: HardHat,
  },
  "Real Estate": {
    title: "Real Estate Sales & Assistance",
    subtitle: "Property sales assistance, marketing opportunities, and buyer-seller coordination.",
    icon: Home,
  },
  Materials: {
    title: "Building Materials Supply",
    subtitle: "Cement, TMT steel, bricks, blocks, sand, aggregates, and local jobsite delivery.",
    icon: Package,
  },
  "Quotes and Process": {
    title: "Quotes & Enquiries",
    subtitle: "How to request material quotations, construction estimates, and project consultations.",
    icon: FileSpreadsheet,
  },
};

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All Categories");

  const distinctCategories: Exclude<CategoryType, "All Categories">[] = [
    "General",
    "Materials",
    "Construction",
    "Real Estate",
    "Quotes and Process",
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#B89A63]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
            Customer Knowledge &amp; Guidance
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
          Clear, practical answers regarding building materials supply, low-rise building construction (up to 4–5 floors), and property sales assistance.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#2A3035] scrollbar-none">
          <Filter className="w-4 h-4 text-[#B89A63] flex-shrink-0 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? "bg-[#B89A63] text-[#0B0D0F] border-[#B89A63] font-semibold"
                  : "bg-[#15191D] text-[#A7ADB3] border-[#2A3035] hover:text-[#F3F1EC] hover:border-[#667582]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grouped FAQ Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 space-y-12">
        {distinctCategories
          .filter((cat) => activeCategory === "All Categories" || activeCategory === cat)
          .map((catKey) => {
            const meta = categoryMeta[catKey];
            const Icon = meta.icon;
            const faqsInCat = faqsData.filter((f) => f.category === catKey);

            if (faqsInCat.length === 0) return null;

            return (
              <div
                key={catKey}
                id={catKey.toLowerCase().replace(/\s+/g, "-")}
                className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-10"
              >
                {/* Section Group Header */}
                <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[#2A3035]">
                  <div className="w-9 h-9 bg-[#0B0D0F] border border-[#2A3035] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#B89A63]" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-medium text-[#F3F1EC]">
                      {meta.title}
                    </h2>
                    <p className="text-xs text-[#A7ADB3]">
                      {meta.subtitle}
                    </p>
                  </div>
                </div>

                {/* Section Accordion */}
                <Accordion>
                  {faqsInCat.map((faq, idx) => (
                    <AccordionItem
                      key={faq.id}
                      id={faq.id}
                      title={faq.question}
                      defaultOpen={activeCategory !== "All Categories" && idx === 0}
                    >
                      <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
      </section>

      {/* Direct Escalation Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-10 border border-[#2A3035] bg-[#15191D]/50">
          <HelpCircle className="w-8 h-8 text-[#B89A63] mx-auto mb-3" />
          <h2 className="text-xl font-light text-[#F3F1EC] mb-2">
            Have a Specific Project Question Not Listed Here?
          </h2>
          <p className="text-xs text-[#A7ADB3] max-w-md mx-auto mb-6">
            Our engineering desk can provide statutory code references, material test certificates, or detailed commercial contract templates.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary" size="sm">
              Contact Engineering Desk
            </Button>
            <Button href="/get-a-quote" variant="outline" size="sm">
              Request Project Estimate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
