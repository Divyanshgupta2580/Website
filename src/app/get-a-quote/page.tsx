import React, { Suspense } from "react";
import { Metadata } from "next";
import { Calculator, ShieldCheck, CheckCircle2 } from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote | Material Supply & Construction Estimates",
  description:
    "Request an itemized quotation for building materials supply, residential or commercial low-rise construction (up to 4–5 floors), or real estate assistance from GG Construction Co.",
};

export default function GetAQuotePage() {
  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Material Supply &amp; Construction Estimates
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Request an Estimate or Quotation
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Provide your material requirements, building construction scope, or real-estate enquiry below. Our team will review your details and provide clear pricing guidance and availability.
          </p>
        </div>
      </section>

      {/* Assurance Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-[#15191D] border border-[#2A3035] flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#B89A63] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#F3F1EC] font-medium block">Transparent Quotations</span>
              <span className="text-[#A7ADB3]">Clear itemized pricing for materials and construction work.</span>
            </div>
          </div>

          <div className="p-4 bg-[#15191D] border border-[#2A3035] flex items-center gap-3">
            <Calculator className="w-5 h-5 text-[#B89A63] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#F3F1EC] font-medium block">Material &amp; Site Feasibility</span>
              <span className="text-[#A7ADB3]">Accurate quantity planning and local delivery coordination.</span>
            </div>
          </div>

          <div className="p-4 bg-[#15191D] border border-[#2A3035] flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#B89A63] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#F3F1EC] font-medium block">Direct Team Review</span>
              <span className="text-[#A7ADB3]">Prompt review and personal follow-up on phone or email.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 12-field Quote Estimator Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="p-8 bg-[#15191D] border border-[#2A3035] text-xs text-[#A7ADB3]">Loading estimation desk...</div>}>
          <QuoteForm />
        </Suspense>
      </section>
    </div>
  );
}
