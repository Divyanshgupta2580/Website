import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Button from "@/components/ui/Button";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const topTestimonials = testimonialsData.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          eyebrow="Client Perspectives"
          title="Construction Feedback"
          description="Representative feedback from residential homebuilders, commercial building owners, and structural improvement clients across Delhi."
          action={
            <Button href="/testimonials" variant="outline" size="sm">
              <span>View All Feedback</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          }
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topTestimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
