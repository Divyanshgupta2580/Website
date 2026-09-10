import React from "react";
import { Compass, ShieldCheck, Truck, Scale, HeartHandshake, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  const pillars = [
    {
      number: "01",
      icon: Compass,
      title: "Engineering-Led Approach",
      subtitle: "Structural Rigor Before Ground-Break",
      description: "Every site begins with geotechnical bore logs, seismic modeling conforming to IS 1893 & IS 13920, and 3D BIM clash-detection. We solve engineering conflicts on computers rather than in cured concrete.",
      highlights: [
        "In-house licensed structural & MEP engineers",
        "Virtual Design & Construction (BIM 4D/5D)",
        "Seismic Zone IV & V high-ductility detailing",
      ],
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Quality-Focused Execution",
      subtitle: "On-Site Laboratory Verification",
      description: "We establish calibrated on-site testing laboratories for every major project. Concrete cubes undergo continuous 7-day and 28-day compression crushing tests; aggregate silt content is strictly audited below 3%.",
      highlights: [
        "On-site NABL-aligned material testing labs",
        "Laser screed FM-2 superflat concrete placement",
        "Triple-layer crystalline waterproofing protocols",
      ],
    },
    {
      number: "03",
      icon: Truck,
      title: "Reliable Material Supply",
      subtitle: "Direct-From-Mill Provenance",
      description: "Our dedicated Building Materials division procures primary Fe 500D TMT steel and certified cements directly from integrated plants. Our sites never face work stoppages due to regional material shortages.",
      highlights: [
        "Direct tier-one integrated steel & cement allocations",
        "Manufacturer Test Certificates (MTC) with every load",
        "Automated weighbridge slip validation at site gates",
      ],
    },
    {
      number: "04",
      icon: Scale,
      title: "Transparent Project Management",
      subtitle: "No Hidden Costs. No Speculative Delays.",
      description: "We practice open-book milestone auditing with weekly digital progress reports. Earned Value Analysis (EVA) and strict RERA escrow ring-fencing guarantee that capital is used solely for approved construction.",
      highlights: [
        "Itemized BOQ with transparent material quantity checks",
        "Bi-weekly drone photographic progress tracking",
        "Liquidated damages schedule guarantees in EPC contracts",
      ],
    },
    {
      number: "05",
      icon: HeartHandshake,
      title: "Long-Term Relationships",
      subtitle: "Accountability Long After Handover",
      description: "Our engagement doesn't end when the ribbon is cut. We provide comprehensive post-occupancy defect liability coverage, as-built MEP digital dossiers, and structural health checkups for lasting asset performance.",
      highlights: [
        "Comprehensive defect liability warranty periods",
        "Digital as-built facilities management handovers",
        "Repeat partnerships with major commercial REITs",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035] relative">
      <Container size="default">
        <SectionHeading
          eyebrow="The Institutional Difference"
          title="Why Enterprise Clients Choose GG Construction Co."
          description="In an industry plagued by fragmented subcontracting and disputed billing, our integrated model delivers predictability, structural permanence, and peace of mind."
        />

        {/* 5-Pillar Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Top 2 Primary Pillars (Large 6-span each) */}
          {pillars.slice(0, 2).map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="lg:col-span-6 bg-[#15191D] border border-[#2A3035] p-8 sm:p-10 flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63] group-hover:border-[#B89A63] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-mono text-[#667582]">
                      PILLAR // {p.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-[#F3F1EC] mb-1 group-hover:text-[#B89A63] transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B89A63] block mb-4">
                    {p.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#2A3035]/60">
                  <ul className="space-y-2 text-xs text-[#F3F1EC]">
                    {p.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A63] flex-shrink-0 mt-0.5" />
                        <span className="text-[#A7ADB3]">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* Bottom 3 Pillars (4-span each) */}
          {pillars.slice(2, 5).map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="lg:col-span-4 bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63] group-hover:border-[#B89A63] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-mono text-[#667582]">
                      PILLAR // {p.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-light text-[#F3F1EC] mb-1 group-hover:text-[#B89A63] transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B89A63] block mb-3">
                    {p.subtitle}
                  </span>

                  <p className="text-xs text-[#A7ADB3] leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A3035]/60">
                  <ul className="space-y-1.5 text-xs text-[#A7ADB3]">
                    {p.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#B89A63] rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-[11px] leading-snug">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
