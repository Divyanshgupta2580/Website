import React, { Suspense } from "react";
import { Metadata } from "next";
import { Calculator, ShieldCheck, CheckCircle2, HardHat, Building2, MapPin } from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Construction Quote | GG Construction Co.",
  description:
    "Request an itemized construction estimate for residential homes, builder floors, commercial shops, or office buildings up to 4–5 floors across Rohini, Pitampura, and Delhi.",
};

export default function GetAQuotePage() {
  return (
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#D96B27]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D96B27]">
              Building Construction Quotations
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-6">
            Request a Construction Quote
          </h1>
          <p className="text-base sm:text-lg text-[#66717A] leading-relaxed">
            Provide your plot details, construction scope, and location below. Our team specializes in low-rise construction (up to 4–5 floors) across Rohini, Pitampura, and nearby Delhi localities, providing clear, milestone-based estimates.
          </p>
        </div>
      </section>

      {/* Assurance Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-white border border-[#D5D4D0] shadow-sm flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D96B27] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#18324A] font-bold block">Transparent Quotations</span>
              <span className="text-[#66717A]">Clear, stage-wise milestone estimates without hidden charges.</span>
            </div>
          </div>

          <div className="p-5 bg-white border border-[#D5D4D0] shadow-sm flex items-center gap-3">
            <Building2 className="w-5 h-5 text-[#D96B27] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#18324A] font-bold block">Low-Rise Expertise</span>
              <span className="text-[#66717A]">Specialized in buildings up to 4–5 floors: residential &amp; commercial.</span>
            </div>
          </div>

          <div className="p-5 bg-white border border-[#D5D4D0] shadow-sm flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#D96B27] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#18324A] font-bold block">Local Delhi Knowledge</span>
              <span className="text-[#66717A]">Extensive construction experience in Rohini, Pitampura, and Delhi NCR.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Quotation Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="p-8 bg-white border border-[#D5D4D0] text-xs text-[#66717A]">Loading quotation form...</div>}>
          <QuoteForm />
        </Suspense>
      </section>
    </div>
  );
}
