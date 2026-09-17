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
      className={`bg-white border border-[#D5D4D0] p-7 flex flex-col justify-between hover:border-[#18324A] transition-colors rounded-2xl sm:rounded-[22px] shadow-xs ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-[#D96B27] text-[#D96B27]"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#18324A] bg-[#F4F2EE] px-2 py-0.5 border border-[#D5D4D0] rounded-md">
            {testimonial.category}
          </span>
        </div>

        <Quote className="w-7 h-7 text-[#D5D4D0] mb-3" aria-hidden="true" />

        <p className="text-sm text-[#20272D] leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-5 border-t border-[#D5D4D0]">
        <div className="text-xs font-bold text-[#18324A] mb-0.5">
          {testimonial.clientNamePlaceholder}
        </div>
        <div className="text-xs text-[#66717A] font-medium">
          {testimonial.designation}
        </div>
        <div className="text-[11px] text-[#66717A]">
          {testimonial.organizationPlaceholder}
        </div>
        <div className="text-[10px] text-[#66717A] font-medium mt-2 pt-2 border-t border-[#D5D4D0]/60">
          SCOPE: {testimonial.projectContext} &bull; {testimonial.year}
        </div>
      </div>
    </div>
  );
}
