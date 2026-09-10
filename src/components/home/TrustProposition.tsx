import React from "react";
import { Check, X, ShieldAlert, ShieldCheck, Zap, Scale, Truck, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TrustProposition() {
  const comparativePoints = [
    {
      parameter: "Material Sourcing & Supply Chain",
      traditional: "Outsourced to third-party brokers; vulnerable to cement shortages, rebar price volatility, and unverified scrap metal.",
      ggModel: "Direct-from-mill procurement through our in-house Building Materials division; mill test certificates (MTC) with every load.",
    },
    {
      parameter: "Project Accountability",
      traditional: "Fragmented blame-shifting between independent architects, general contractors, MEP consultants, and suppliers.",
      ggModel: "Single-point turnkey accountability. One responsible partner across design, materials, execution, and handover.",
    },
    {
      parameter: "Testing & Quality Assurance",
      traditional: "Sporadic third-party cube tests often completed weeks after concrete is poured and cured.",
      ggModel: "On-site NABL-aligned testing labs; continuous slump testing, aggregate gradation checks, and batch verification.",
    },
    {
      parameter: "Schedule & Milestone Governance",
      traditional: "Paper-based schedules routinely delayed by cash flow disputes and material supply bottlenecks.",
      ggModel: "BIM 4D schedule simulations, automated crane placement, and milestone-linked contractual guarantees.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Integrated Advantage"
          title="Why The Integrated Model Changes Everything"
          description="Traditional construction relies on disjointed contractors, brokers, and consultants—each protecting their own profit margins. GG Construction Co. unifies the entire value chain."
          align="center"
        />

        {/* Comparison Matrix Table */}
        <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#2A3035] bg-[#1D2227]/70 text-xs font-semibold uppercase tracking-wider">
            <div className="md:col-span-4 p-4 text-[#A7ADB3]">Operational Dimension</div>
            <div className="md:col-span-4 p-4 text-red-400 border-t md:border-t-0 md:border-l border-[#2A3035]">
              Traditional Fragmented Contracting
            </div>
            <div className="md:col-span-4 p-4 text-[#B89A63] border-t md:border-t-0 md:border-l border-[#2A3035] bg-[#B89A63]/5">
              GG Construction Co. Integrated Model
            </div>
          </div>

          <div className="divide-y divide-[#2A3035] text-xs">
            {comparativePoints.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#1D2227]/30 transition-colors">
                <div className="md:col-span-4 p-5 text-[#F3F1EC] font-medium flex items-center">
                  <span>{item.parameter}</span>
                </div>
                <div className="md:col-span-4 p-5 text-[#A7ADB3] border-t md:border-t-0 md:border-l border-[#2A3035] flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.traditional}</span>
                </div>
                <div className="md:col-span-4 p-5 text-[#F3F1EC] border-t md:border-t-0 md:border-l border-[#2A3035] bg-[#B89A63]/5 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.ggModel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-8 bg-[#15191D] border border-[#2A3035]">
            <div className="w-12 h-12 mx-auto mb-4 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-medium text-[#F3F1EC] mb-2">Material Provenance</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Every bar of steel and bag of cement is tracked with mill test records. Zero adulteration, zero mystery metallurgy.
            </p>
          </div>

          <div className="p-8 bg-[#15191D] border border-[#2A3035]">
            <div className="w-12 h-12 mx-auto mb-4 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-medium text-[#F3F1EC] mb-2">Strict Regulatory Rigor</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Complete adherence to RERA escrow ring-fencing, Indian Standards (IS), and municipal fire clearance standards.
            </p>
          </div>

          <div className="p-8 bg-[#15191D] border border-[#2A3035]">
            <div className="w-12 h-12 mx-auto mb-4 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-medium text-[#F3F1EC] mb-2">Compressed Timelines</h3>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Eliminating external supply delays significantly compresses structural schedules, mitigating common procurement lead-time bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
