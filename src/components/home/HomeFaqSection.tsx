import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { faqsData } from "@/data/faqs";

export default function HomeFaqSection() {
  // Show 5 most critical high-intent questions
  const previewFaqs = faqsData.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-[#15191D]/30 border-t border-[#2A3035]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Questions & Technical Clarity"
          title="Frequently Asked Questions"
          description="Straightforward answers regarding our low-rise building construction work, project scope, estimates, and construction process."
          align="center"
        />

        <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-10 mb-8">
          <Accordion>
            {previewFaqs.map((faq, idx) => (
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
      </Container>
    </section>
  );
}
