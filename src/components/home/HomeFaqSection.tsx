import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { faqsData } from "@/data/faqs";

export default function HomeFaqSection() {
  const previewFaqs = faqsData.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="Straightforward answers regarding our low-rise building construction work, project scope, estimates, and construction process."
          align="center"
        />

        <div className="bg-white border border-[#D5D4D0] p-6 sm:p-8 rounded-3xl sm:rounded-[28px] shadow-xs mb-8">
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
            <span>View All FAQs</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
