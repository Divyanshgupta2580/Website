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
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { testimonialsData, TestimonialItem } from "@/data/testimonials";

const divisions = [
  "All Divisions",
  "Building Materials Supply",
  "Building Construction",
  "Real Estate Sales & Assistance",
];

export default function TestimonialsPage() {
  const [activeDivision, setActiveDivision] = useState("All Divisions");

  const filteredTestimonials =
    activeDivision === "All Divisions"
      ? testimonialsData
      : testimonialsData.filter((item) => item.division === activeDivision);

  const featuredTestimonial = testimonialsData[0];

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Client & Customer Perspectives
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Customer Testimonials & Feedback
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Our business is built on dependable building materials delivery, quality construction of homes and commercial buildings up to 4–5 floors, and transparent property sales coordination.
          </p>
        </div>
      </section>

      {/* Practical Business Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#2A3035]">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89A63] block mb-1">
                Core Service Capabilities
              </span>
              <h2 className="text-xl sm:text-2xl font-light text-[#F3F1EC]">
                What We Deliver for Our Customers
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#667582]">
              <ShieldCheck className="w-4 h-4 text-[#B89A63]" />
              <span>Customer-Focused Service</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-[#0B0D0F] border border-[#2A3035]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-medium text-[#F3F1EC]">Materials</span>
                <CheckCircle2 className="w-5 h-5 text-[#B89A63]" />
              </div>
              <h3 className="text-xs font-medium text-[#B89A63] mb-1">
                Primary Business Supply
              </h3>
              <p className="text-[11px] text-[#A7ADB3]">
                Prompt site dispatches of cement, TMT steel, red bricks, sand, and aggregates with honest weighbridge measurement.
              </p>
            </div>

            <div className="p-5 bg-[#0B0D0F] border border-[#2A3035]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-medium text-[#F3F1EC]">4–5 Floors</span>
                <TrendingUp className="w-5 h-5 text-[#B89A63]" />
              </div>
              <h3 className="text-xs font-medium text-[#B89A63] mb-1">
                Low-Rise Construction
              </h3>
              <p className="text-[11px] text-[#A7ADB3]">
                Practical construction for residential homes, independent floors, shops, and offices up to 4–5 floors.
              </p>
            </div>

            <div className="p-5 bg-[#0B0D0F] border border-[#2A3035]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-medium text-[#F3F1EC]">Real Estate</span>
                <Award className="w-5 h-5 text-[#B89A63]" />
              </div>
              <h3 className="text-xs font-medium text-[#B89A63] mb-1">
                Sales & Coordination
              </h3>
              <p className="text-[11px] text-[#A7ADB3]">
                Assisting buyers and sellers with property enquiries, site walkthroughs, and clear document checks.
              </p>
            </div>

            <div className="p-5 bg-[#0B0D0F] border border-[#2A3035]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-medium text-[#F3F1EC]">Dependable</span>
                <ShieldCheck className="w-5 h-5 text-[#B89A63]" />
              </div>
              <h3 className="text-xs font-medium text-[#B89A63] mb-1">
                Local Experience
              </h3>
              <p className="text-[11px] text-[#A7ADB3]">
                Hands-on construction understanding, direct founder accessibility, and transparent commercial dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Banner */}
      {featuredTestimonial && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-[#15191D] via-[#1D2227] to-[#15191D] border border-[#B89A63]/40 relative overflow-hidden">
            <Quote className="absolute right-6 bottom-4 w-32 h-32 text-[#2A3035]/30 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="bronze">Customer Review Placeholder</Badge>
                <span className="text-xs font-mono text-[#667582]">
                  {featuredTestimonial.division} &bull; {featuredTestimonial.year}
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-light text-[#F3F1EC] leading-relaxed mb-6">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#2A3035]">
                <div>
                  <div className="text-sm font-medium text-[#F3F1EC]">
                    {featuredTestimonial.designation}
                  </div>
                  <div className="text-xs font-mono text-[#B89A63]">
                    {featuredTestimonial.clientNamePlaceholder}
                  </div>
                  <div className="text-xs text-[#A7ADB3]">
                    {featuredTestimonial.organizationPlaceholder}
                  </div>
                </div>

                <div className="text-xs font-mono text-[#667582]">
                  CONTEXT: {featuredTestimonial.projectContext}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Verification Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="p-4 bg-[#15191D] border border-[#2A3035] flex items-start gap-3 text-xs">
          <AlertCircle className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
          <p className="text-[#A7ADB3] leading-relaxed">
            <strong className="text-[#F3F1EC]">Transparency Notice:</strong> All customer testimonials are maintained as clearly labeled placeholders (<span className="text-[#B89A63]">[ADD VERIFIED CUSTOMER REVIEW]</span>) until verified client reviews are confirmed by the owner.
          </p>
        </div>
      </section>

      {/* Division Filtering Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#2A3035] scrollbar-none">
          <Filter className="w-4 h-4 text-[#B89A63] flex-shrink-0 mr-2" />
          {divisions.map((div) => (
            <button
              key={div}
              type="button"
              onClick={() => setActiveDivision(div)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all border ${
                activeDivision === div
                  ? "bg-[#B89A63] text-[#0B0D0F] border-[#B89A63] font-semibold"
                  : "bg-[#15191D] text-[#A7ADB3] border-[#2A3035] hover:text-[#F3F1EC] hover:border-[#667582]"
              }`}
            >
              {div}
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
                    {item.division}
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
                  CONTEXT: {item.projectContext} &bull; {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#2A3035] bg-[#15191D]/50">
          <h2 className="text-2xl font-light text-[#F3F1EC] mb-3">
            Speak with GG Construction Co. Today
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            For building materials enquiries, low-rise construction planning, or property sales assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Enquire Now
            </Button>
            <Button href="/materials" variant="outline" size="md">
              Explore Materials
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
