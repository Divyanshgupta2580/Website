import React from "react";
import Link from "next/link";
import { HardHat, Building2, Boxes, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { companyData } from "@/data/company";

export default function DivisionsSection() {
  const divisionIcons = {
    HardHat: HardHat,
    Building2: Building2,
    Boxes: Boxes,
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Vertical Integration"
          title="Three Synergistic Divisions. One Accountable Partner."
          description="By uniting material supply, structural engineering, and property development under a single balance sheet, GG Construction Co. removes the traditional frictions, markup layers, and schedule delays of fragmented contracting."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {companyData.divisions.map((div, idx) => {
            const Icon = divisionIcons[div.iconName as keyof typeof divisionIcons] || HardHat;
            return (
              <div
                key={div.id}
                className="group relative bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/70 transition-all duration-300 flex flex-col justify-between p-8 sm:p-10"
              >
                {/* Accent Top Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-80 transition-all group-hover:h-[3px]"
                  style={{ backgroundColor: div.accentColor }}
                />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63] group-hover:border-[#B89A63] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-[#667582]">
                      DIV // 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                    {div.name}
                  </h3>

                  <p className="text-xs font-mono uppercase tracking-wider text-[#B89A63] mb-4">
                    {div.tagline}
                  </p>

                  <p className="text-sm text-[#A7ADB3] leading-relaxed mb-8">
                    {div.description}
                  </p>

                  <div className="pt-6 border-t border-[#2A3035]/60 mb-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
                      Division Core Focus
                    </span>
                    <ul className="space-y-2 text-xs text-[#A7ADB3]">
                      {div.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A63] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A3035] flex items-center justify-between">
                  <Link
                    href={div.href}
                    className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-2 transition-colors focus-visible:ring-1 focus-visible:ring-[#B89A63]"
                  >
                    <span>Explore Division</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B89A63] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-[#667582]">
                    GG CON CO.
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
