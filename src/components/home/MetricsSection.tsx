import React from "react";
import { companyData } from "@/data/company";
import { AlertCircle } from "lucide-react";

export default function MetricsSection() {
  const metricsList = [
    {
      label: "Years in Industry",
      value: companyData.metrics.yearsInIndustry,
      helper: "Continuous civil and material operations",
    },
    {
      label: "Completed Projects",
      value: companyData.metrics.completedProjects,
      helper: "Across commercial, industrial & residential sectors",
    },
    {
      label: "Regional Presence",
      value: companyData.metrics.citiesPresence,
      helper: "Active project sites & material dispatch hubs",
    },
    {
      label: "Annual Material Supply",
      value: companyData.metrics.materialTonnageAnnually,
      helper: "TMT steel, cement & aggregates moved annually",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#15191D] border-y border-[#2A3035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#2A3035]">
          {metricsList.map((item, idx) => (
            <div
              key={idx}
              className={`pt-6 sm:pt-0 ${idx > 0 ? "sm:pl-8" : ""} flex flex-col justify-between`}
            >
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#667582] block mb-2">
                  VERIFIED RECORD // 0{idx + 1}
                </span>
                <div className="text-xl sm:text-2xl font-light text-[#B89A63] font-mono tracking-tight mb-2 break-words">
                  {item.value}
                </div>
                <h3 className="text-sm font-medium text-[#F3F1EC] mb-1">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-[#A7ADB3] mt-2">
                {item.helper}
              </p>
            </div>
          ))}
        </div>

        {/* Verification Policy Indicator */}
        <div className="mt-12 pt-6 border-t border-[#2A3035] flex items-center justify-between text-xs text-[#667582]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-[#B89A63]" />
            <span className="text-[11px]">
              Values formatted as bracketed tokens are verified internally prior to commercial publication.
            </span>
          </div>
          <span className="hidden md:inline font-mono text-[10px] text-[#A7ADB3]">
            DATA INTEGRITY POLICY // SEC. 04
          </span>
        </div>
      </div>
    </section>
  );
}
