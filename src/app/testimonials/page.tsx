"use client";

import React, { useState } from "react";
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  Filter,
  AlertCircle,
  Building2,
  MapPin,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { testimonialsData, TestimonialItem } from "@/data/testimonials";

const categories = [
  "All Projects",
  "Residential Construction",
  "Commercial Construction",
  "Building Renovation",
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredTestimonials =
    activeCategory === "All Projects"
      ? testimonialsData
      : testimonialsData.filter((item) => item.category === activeCategory);

  const featuredTestimonial = testimonialsData[0];

  return (
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#D96B27]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D96B27]">
              Client Feedback
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-6">
            Client Perspectives &amp; Feedback
          </h1>
          <p className="text-base sm:text-lg text-[#66717A] leading-relaxed">
            Our construction reputation is built on dependable low-rise building execution, structural integrity, and transparent communication across Rohini, Pitampura, and nearby areas of Delhi.
          </p>
        </div>
      </section>

      {/* Construction Standards Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white border border-[#D5D4D0] p-6 sm:p-10 rounded-3xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#D5D4D0]">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#D96B27] block mb-1">
                Construction Delivery
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18324A]">
                What Clients Value in Our Work
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#66717A]">
              <ShieldCheck className="w-4 h-4 text-[#D96B27]" />
              <span>Attentive Supervision</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-[#F4F2EE] border border-[#D5D4D0] rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold text-[#18324A]">4–5 Floors</span>
                <TrendingUp className="w-5 h-5 text-[#D96B27]" />
              </div>
              <h3 className="text-xs font-bold text-[#D96B27] mb-1">
                Low-Rise Specialization
              </h3>
              <p className="text-xs text-[#66717A]">
                Practical building execution for residential homes, builder floors, shops, and offices up to 4–5 floors.
              </p>
            </div>

            <div className="p-5 bg-[#F4F2EE] border border-[#D5D4D0] rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold text-[#18324A]">Local Delhi</span>
                <MapPin className="w-5 h-5 text-[#D96B27]" />
              </div>
              <h3 className="text-xs font-bold text-[#D96B27] mb-1">
                Rohini &amp; Pitampura
              </h3>
              <p className="text-xs text-[#66717A]">
                Extensive local construction experience across North-West Delhi localities and municipal norms.
              </p>
            </div>

            <div className="p-5 bg-[#F4F2EE] border border-[#D5D4D0] rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold text-[#18324A]">RCC Frame</span>
                <CheckCircle2 className="w-5 h-5 text-[#D96B27]" />
              </div>
              <h3 className="text-xs font-bold text-[#D96B27] mb-1">
                Structural Quality
              </h3>
              <p className="text-xs text-[#66717A]">
                Strict adherence to IS 456 concrete standards, full water curing timelines, and clean rebar placement.
              </p>
            </div>

            <div className="p-5 bg-[#F4F2EE] border border-[#D5D4D0] rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold text-[#18324A]">Direct Desk</span>
                <ShieldCheck className="w-5 h-5 text-[#D96B27]" />
              </div>
              <h3 className="text-xs font-bold text-[#D96B27] mb-1">
                Transparent Milestones
              </h3>
              <p className="text-xs text-[#66717A]">
                Direct accessibility to supervisors with itemized, stage-wise payment schedules linked to completed civil work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Banner */}
      {featuredTestimonial && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 sm:p-12 bg-white border border-[#D5D4D0] rounded-3xl shadow-sm relative overflow-hidden">
            <Quote className="absolute right-6 bottom-4 w-32 h-32 text-[#D5D4D0]/40 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="orange">{featuredTestimonial.category}</Badge>
                <span className="text-xs font-medium text-[#66717A]">
                  {featuredTestimonial.year}
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-[#18324A] leading-relaxed mb-6">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#D5D4D0]">
                <div>
                  <div className="text-sm font-bold text-[#18324A]">
                    {featuredTestimonial.designation}
                  </div>
                  <div className="text-xs font-bold text-[#D96B27]">
                    {featuredTestimonial.clientNamePlaceholder}
                  </div>
                  <div className="text-xs text-[#66717A]">
                    {featuredTestimonial.organizationPlaceholder}
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#66717A]">
                  CONTEXT: {featuredTestimonial.projectContext}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filtering Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#D5D4D0] p-8 rounded-2xl sm:rounded-[22px] flex flex-col justify-between shadow-sm hover:border-[#D96B27] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D96B27] text-[#D96B27]"
                      />
                    ))}
                  </div>
                  <span className="text-xs uppercase font-semibold text-[#66717A]">
                    {item.category}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#D5D4D0] mb-4" />

                <p className="text-sm text-[#20272D] leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#D5D4D0]">
                <div className="text-xs font-bold text-[#D96B27] mb-1">
                  {item.clientNamePlaceholder}
                </div>
                <div className="text-xs text-[#18324A] font-bold">
                  {item.designation}
                </div>
                <div className="text-xs text-[#66717A]">
                  {item.organizationPlaceholder}
                </div>
                <div className="text-xs text-[#66717A] mt-2">
                  CONTEXT: {item.projectContext} &bull; {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#D5D4D0] bg-white shadow-sm">
          <h2 className="text-2xl font-bold text-[#18324A] mb-3">
            Planning a Construction Project?
          </h2>
          <p className="text-sm text-[#66717A] max-w-xl mx-auto mb-6">
            Discuss your residential or commercial low-rise construction plans with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              GET A QUOTE
            </Button>
            <Button href="/projects" variant="outline" size="md">
              VIEW PROJECTS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
