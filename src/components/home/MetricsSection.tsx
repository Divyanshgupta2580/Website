import React from "react";
import { CheckCircle2 } from "lucide-react";
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
    <section className="py-14 md:py-18 bg-[#F4F2EE] border-b border-[#D5D4D0] relative">
      <Container size="default">
        {/* Section Heading Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96B27] block mb-1">
              CONSTRUCTION CAPABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18324A]">
              Practical Experience &amp; Core Standards
            </h2>
          </div>
          <span className="text-xs font-bold text-[#66717A] uppercase">
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

        {/* Factual Disclaimer */}
        <div className="mt-8 pt-4 border-t border-[#D5D4D0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#66717A]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D96B27] flex-shrink-0" />
            <span className="text-[11px]">
              All statements represent factual operational parameters for low-rise building construction in Delhi.
            </span>
          </div>
          <span className="text-[11px] font-bold text-[#18324A]">
            FACTUAL SERVICE SCOPE
          </span>
        </div>
      </Container>
    </section>
  );
}
