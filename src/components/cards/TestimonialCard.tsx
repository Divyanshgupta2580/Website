import React from "react";
import { Quote, Star } from "lucide-react";
import { TestimonialItem } from "@/data/testimonials";

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-[#15191D] border border-[#2A3035] p-8 flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-[#B89A63] text-[#B89A63]"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#667582] bg-[#0B0D0F] px-2 py-0.5 border border-[#2A3035]">
            {testimonial.division.split(" ")[0]}
          </span>
        </div>

        <Quote className="w-8 h-8 text-[#2A3035] mb-4" aria-hidden="true" />

        <p className="text-sm text-[#F3F1EC] leading-relaxed mb-6 font-light">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-6 border-t border-[#2A3035]/60">
        <div className="text-xs font-mono text-[#B89A63] mb-1">
          {testimonial.clientNamePlaceholder}
        </div>
        <div className="text-xs text-[#F3F1EC] font-medium">
          {testimonial.designation}
        </div>
        <div className="text-[11px] text-[#A7ADB3]">
          {testimonial.organizationPlaceholder}
        </div>
        <div className="text-[10px] text-[#667582] font-mono mt-2">
          SCOPE: {testimonial.projectContext} &bull; {testimonial.year}
        </div>
      </div>
    </div>
  );
}
