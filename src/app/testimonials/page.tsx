import React from "react";
import { Metadata } from "next";
import { Quote, Star, ShieldCheck, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { testimonialsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Client & Partner Testimonials",
  description:
    "Reviews and endorsements from commercial developers, industrial plant operators, and residential homeowners working with GG Construction Co.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Institutional Validation
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Client & Enterprise Partner Perspectives
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Our reputation is built on steel delivered without shortages, concrete poured to code, and buildings handed over without litigation. Here is what our project stakeholders have to say.
          </p>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-4 bg-[#15191D] border border-[#2A3035] flex items-start gap-3 text-xs">
          <AlertCircle className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
          <p className="text-[#A7ADB3] leading-relaxed">
            <strong className="text-[#F3F1EC]">Authenticity Statement:</strong> In strict compliance with our corporate transparency policy, all client corporate identities in this public preview are designated with verification placeholders (<span className="text-[#B89A63]">[VERIFY CLIENT NAME]</span>). Formal client references and site audit credentials can be furnished upon signing mutual Non-Disclosure Agreements.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
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
