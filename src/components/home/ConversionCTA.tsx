import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyData } from "@/data/company";

export default function ConversionCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035] relative overflow-hidden">
      <div className="absolute inset-0 bg-architectural-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#15191D] border border-[#2A3035] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#B89A63] block mb-3">
              Initiate Engagement
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#F3F1EC] leading-tight mb-6">
              Ready to Build with Engineering Rigor and Supply Certainty?
            </h2>

            <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed mb-8">
              Whether you are an enterprise developer scoping a commercial tower, an industrial operator establishing a warehouse, or a builder procuring bulk TMT steel and cement, connect directly with our engineering division.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Button href="/get-a-quote" variant="primary" size="lg">
                <span>Request Project Estimate</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>

              <Button href="/contact" variant="outline" size="lg">
                Contact Our Engineers
              </Button>
            </div>

            <div className="pt-8 border-t border-[#2A3035] flex flex-wrap items-center gap-6 text-xs text-[#A7ADB3]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B89A63]" />
                <span>Call: {companyData.contact.phoneFormatted}</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#B89A63]" />
                <span>WhatsApp Desk Available</span>
              </div>
              <span>&bull;</span>
              <span className="text-[#667582]">{companyData.contact.officeHours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
