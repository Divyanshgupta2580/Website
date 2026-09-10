"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import { Filter, HelpCircle, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { faqsData } from "@/data/faqs";

const categories = [
  "All",
  "General",
  "Construction",
  "Real Estate",
  "Materials",
  "Quality & Compliance",
];

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqsData
      : faqsData.filter((f) => f.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#B89A63]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
            Institutional Knowledge & Guidance
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
          Comprehensive answers covering our three-division vertical integration, civil EPC contracts, RERA governance, and laboratory testing protocols.
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

      {/* Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-10">
          <Accordion>
            {filteredFaqs.map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                title={faq.question}
                defaultOpen={idx === 0}
              >
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Direct Escalation Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-10 border border-[#2A3035] bg-[#15191D]/50">
          <HelpCircle className="w-8 h-8 text-[#B89A63] mx-auto mb-3" />
          <h2 className="text-xl font-light text-[#F3F1EC] mb-2">
            Have a Specific Question Not Answered Here?
          </h2>
          <p className="text-xs text-[#A7ADB3] max-w-md mx-auto mb-6">
            Our engineering desk can provide statutory code references, material data sheets (MSDS), or commercial contract templates.
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
