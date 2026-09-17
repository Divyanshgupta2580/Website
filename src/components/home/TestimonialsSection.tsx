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
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="Client Perspectives"
          title="Construction Testimonials"
          description="Representative client feedback from residential homebuilders, commercial owners, and building renovation clients across Delhi."
          action={
            <Button href="/testimonials" variant="outline" size="sm">
              <span>View Testimonials</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          }
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {topTestimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
