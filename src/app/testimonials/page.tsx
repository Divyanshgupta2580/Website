"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import { Quote, Star, ShieldCheck, AlertCircle, Award, CheckCircle2, TrendingUp, Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { testimonialsData, TestimonialItem } from "@/data/testimonials";

const divisions = [
  "All Divisions",
  "Construction & Engineering",
  "Real Estate & Property Development",
  "Building Materials Supply",
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
              Institutional Validation // Stakeholder Audits
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Client & Enterprise Partner Perspectives
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Our reputation is built on steel delivered without shortages, concrete poured to code, and buildings handed over without litigation. Review operational feedback from institutional developers, industrial plant operators, and homebuyers.
          </p>
        </div>
      </section>

      {/* Rating & Performance Summary Using Placeholder Data */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#2A3035]">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89A63] block mb-1">
                Audit Summary Placeholder Data
              </span>
              <h2 className="text-xl sm:text-2xl font-light text-[#F3F1EC]">
                Performance Metrics & Satisfaction Index
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#667582]">
              <ShieldCheck className="w-4 h-4 text-[#B89A63]" />
              <span>[VERIFY - Third-Party QA & CPM Audit 2024]</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-[#0B0D0F] border border-[#2A3035]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-light text-[#F3F1EC]">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B89A63] text-[#B89A63]" />
                  ))}
                </div>
              </div>
              <h3 className="text-xs font-medium text-[#F3F1EC] mb-1">
                Overall Client Satisfaction
              </h3>
              <p className="text-[11px] text-[#A7ADB3]">
                Weighted across turnkey, property sales, and materials dispatch.
              </p>
              <span className="text-[10px] font-mono text-[#B89A63] block mt-2">
                [VERIFY - CSAT 4.9/5.0]
              </span>
            </div>

            <div className="p-5 bg-[#0B0D0F] border border-[#2A3035]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-light text-[#F3F1EC]">96.8%</span>
                <CheckCircle2 className="w-5 h-5 text-[#B89A63]" />
              </div>
              <h3 className="text-xs font-medium text-[#F3F1EC] mb-1">
                On-Time Milestone Handover
              </h3>
              <p className="text-[11px] text-[#A7ADB3]">
                BIM 4D schedule adherence across commercial & industrial contracts.
              </p>
              <span className="text-[10px] font-mono text-[#B89A63] block mt-2">
                [VERIFY - 96.8% On-Time]
              </span>
            </div>

            <div className="p-5 bg-[#0B0D0F] border border-[#2A3035]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-light text-[#F3F1EC]">82%</span>
                <TrendingUp className="w-5 h-5 text-[#B89A63]" />
              </div>
              <h3 className="text-xs font-medium text-[#F3F1EC] mb-1">
                Repeat Institutional Developers
              </h3>
              <p className="text-[11px] text-[#A7ADB3]">
                Developers re-engaging GG for phase expansions and new sites.
              </p>
              <span className="text-[10px] font-mono text-[#B89A63] block mt-2">
                [VERIFY - 82% Repeat Rate]
              </span>
            </div>

            <div className="p-5 bg-[#0B0D0F] border border-[#2A3035]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-light text-[#F3F1EC]">98.4%</span>
                <Award className="w-5 h-5 text-[#B89A63]" />
              </div>
              <h3 className="text-xs font-medium text-[#F3F1EC] mb-1">
                First-Pass Snag Audit Score
              </h3>
              <p className="text-[11px] text-[#A7ADB3]">
                Pre-handover structural, MEP, and finish quality compliance.
              </p>
              <span className="text-[10px] font-mono text-[#B89A63] block mt-2">
                [VERIFY - 98.4% Snag-Free]
              </span>
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
                <Badge variant="bronze">Featured Institutional Review</Badge>
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
                  PROJECT: {featuredTestimonial.projectContext}
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
            <strong className="text-[#F3F1EC]">Authenticity Statement:</strong> In strict compliance with our corporate transparency policy, all client corporate identities in this public preview are designated with verification placeholders (<span className="text-[#B89A63]">[VERIFY CLIENT NAME]</span>). Formal client references, completion certificates, and site audit credentials can be furnished upon signing mutual Non-Disclosure Agreements.
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
            Partner with a Builder Backed by Proof
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            Join the developers and commercial enterprises who build with GG Construction Co.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/get-a-quote" variant="primary" size="md">
              Request Project Estimate
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact Directorate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
