import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { faqsData } from "@/data/faqs";

export default function HomeFaqSection() {
  // Show first 5 general and structural questions on homepage
  const homeFaqs = faqsData.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-[#15191D]/30 border-t border-[#2A3035]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions & Technical Clarity"
          title="Frequently Asked Questions"
          description="Straightforward answers regarding our three-division structure, statutory certifications, testing protocols, and contract models."
          align="center"
        />

        <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-10 mb-8">
          <Accordion>
            {homeFaqs.map((faq, idx) => (
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

        <div className="text-center">
          <Button href="/faqs" variant="outline" size="sm">
            <span>View All Categorized FAQs</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
