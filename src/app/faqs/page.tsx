"use client";

import React, { useState } from "react";
import { Filter, HelpCircle, ArrowUpRight, Building2, HardHat, FileSpreadsheet } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { faqsData, FAQItem } from "@/data/faqs";

const categories = [
  "All Categories",
  "General",
  "Construction",
  "Quotes and Process",
] as const;

type CategoryType = typeof categories[number];

const categoryMeta: Record<
  Exclude<CategoryType, "All Categories">,
  { title: string; subtitle: string; icon: React.ComponentType<{ className?: string }> }
> = {
  General: {
    title: "General & Company Overview",
    subtitle: "GG Construction Co. scope, low-rise capabilities, and regional experience across Delhi.",
    icon: Building2,
  },
  Construction: {
    title: "Building Construction",
    subtitle: "Residential homes, builder floors, shops, offices up to 4–5 floors, structural framing, and on-site supervision.",
    icon: HardHat,
  },
  "Quotes and Process": {
    title: "Quotes & Construction Process",
    subtitle: "How to request construction quotations, milestone payment schedules, and site consultations.",
    icon: FileSpreadsheet,
  },
};

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All Categories");

  const distinctCategories: Exclude<CategoryType, "All Categories">[] = [
    "General",
    "Construction",
    "Quotes and Process",
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-extrabold uppercase tracking-[0.2em] text-[#D96B27]">
            01 //
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18324A]">
            FAQS
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-[#66717A] leading-relaxed">
          Clear, practical answers regarding our building construction services for residential and commercial low-rise structures up to 4–5 floors across Rohini, Pitampura, and Delhi.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#D5D4D0] scrollbar-none">
          <Filter className="w-4 h-4 text-[#D96B27] flex-shrink-0 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? "bg-[#D96B27] text-white border-[#D96B27]"
                  : "bg-white text-[#66717A] border-[#D5D4D0] hover:text-[#18324A] hover:border-[#66717A]"
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
                className="bg-white border border-[#D5D4D0] p-6 sm:p-10 rounded-xl shadow-xs"
              >
                {/* Section Group Header */}
                <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[#D5D4D0]">
                  <div className="w-9 h-9 bg-[#F3D8C7]/50 border border-[#D96B27]/30 flex items-center justify-center flex-shrink-0 rounded-lg">
                    <Icon className="w-4 h-4 text-[#D96B27]" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#18324A]">
                      {meta.title}
                    </h2>
                    <p className="text-xs text-[#66717A]">
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
                      <p className="text-sm text-[#66717A] leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
      </section>

      {/* Direct Contact Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-10 border border-[#D5D4D0] bg-white rounded-xl shadow-xs">
          <HelpCircle className="w-8 h-8 text-[#D96B27] mx-auto mb-3" />
          <h2 className="text-xl font-bold text-[#18324A] mb-2">
            Have a Specific Construction Question Not Listed Here?
          </h2>
          <p className="text-sm text-[#66717A] max-w-md mx-auto mb-6">
            Speak directly with our team. We are happy to discuss plot dimensions, building feasibility, or stage-wise construction milestones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="sm">
              <span>Send an Enquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
            <Button href="/get-a-quote" variant="outline" size="sm">
              Request Construction Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
