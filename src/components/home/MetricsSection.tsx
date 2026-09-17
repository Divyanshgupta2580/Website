import React from "react";
import { AlertCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import StatBlock from "@/components/ui/StatBlock";
import { companyData } from "@/data/company";

export default function MetricsSection() {
  const metrics = [
    {
      label: "Building Scale",
      value: "Up to 4–5 Floors",
      helper: "Practical low-rise construction for residential homes, builder floors, shops, and small offices",
    },
    {
      label: "Local Experience",
      value: "Rohini & Pitampura",
      helper: companyData.metrics.regionalFocus,
    },
    {
      label: "Structural Quality",
      value: "RCC & Masonry",
      helper: "Compliant column-beam framing, quality brickwork, and disciplined 14–21 day curing",
    },
    {
      label: "On-Site Supervision",
      value: "Daily Oversight",
      helper: "Dedicated supervisory presence on site for continuous quality check",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#15191D]/60 border-y border-[#2A3035] relative">
      <Container size="default">
        {/* Section Heading Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B89A63] block mb-1">
              CONSTRUCTION CAPABILITY
            </span>
            <h2 className="text-2xl font-light text-[#F3F1EC]">
              Practical Experience &amp; Core Standards
            </h2>
          </div>
          <span className="text-xs font-mono text-[#667582]">
            GG CONSTRUCTION CO.
          </span>
        </div>

        {/* 4 StatBlocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <StatBlock
              key={idx}
              index={idx}
              label={item.label}
              value={item.value}
              helper={item.helper}
            />
          ))}
        </div>

        {/* Verification Policy Disclaimer */}
        <div className="mt-8 pt-4 border-t border-[#2A3035]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#667582]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-[#B89A63] flex-shrink-0" />
            <span className="text-[11px]">
              Values formatted with brackets (<span className="text-[#B89A63] font-mono">[VERIFY ...]</span>) are centrally managed placeholders for verified company data.
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#A7ADB3]">
            CENTRALIZED DATA // company.ts
          </span>
        </div>
      </Container>
    </section>
  );
}
