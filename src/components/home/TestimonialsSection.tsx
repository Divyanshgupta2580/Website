import React from "react";
import Link from "next/link";
import { Quote, ArrowUpRight, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const topTestimonials = testimonialsData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client & Partner Perspectives"
          title="Endorsements From Enterprise Partners"
          description="Hear from institutional developers, industrial plant heads, and commercial asset managers who entrust their structural delivery to GG Construction Co."
          action={
            <Button href="/testimonials" variant="outline" size="sm">
              <span>All Testimonials</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {topTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#15191D] border border-[#2A3035] p-8 flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#B89A63] text-[#B89A63]"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-mono text-[#667582]">
                    {item.division.split(" ")[0]}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#2A3035] mb-4" />

                <p className="text-sm text-[#F3F1EC] leading-relaxed mb-6 font-light">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#2A3035]/60">
                <div className="text-xs font-mono text-[#B89A63] mb-1">
                  {item.clientNamePlaceholder}
                </div>
                <div className="text-xs text-[#F3F1EC] font-medium">
                  {item.designation}
                </div>
                <div className="text-[11px] text-[#A7ADB3]">
                  {item.organizationPlaceholder}
                </div>
                <div className="text-[10px] text-[#667582] font-mono mt-2">
                  PROJECT: {item.projectContext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
