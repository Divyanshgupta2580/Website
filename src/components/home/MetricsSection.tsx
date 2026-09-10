import React from "react";
import { AlertCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import StatBlock from "@/components/ui/StatBlock";
import { companyData } from "@/data/company";

export default function MetricsSection() {
  const metrics = [
    {
      label: "Construction Work",
      value: "Up to 4–5 Floors",
      helper: "Practical building construction for residential homes, shops, and small offices",
    },
    {
      label: "Primary Business",
      value: "Materials Supply",
      helper: "Direct supply of cement, TMT steel, bricks, blocks, sand, and aggregates",
    },
    {
      label: "Regional Area",
      value: companyData.metrics.regionalFocus,
      helper: "Serving local building projects and contractors across the region",
    },
    {
      label: "Real Estate",
      value: "Sales Assistance",
      helper: "Property marketing, buyer-seller coordination, and enquiry assistance",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#15191D]/60 border-y border-[#2A3035] relative">
      <Container size="default">
        {/* Section Heading Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B89A63] block mb-1">
              BUSINESS SCOPE
            </span>
            <h2 className="text-2xl font-light text-[#F3F1EC]">
              Practical Experience & Core Focus
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
