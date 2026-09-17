import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Plot & Scope Consultation",
      subtitle: "Site Review & Requirements",
      description:
        "We discuss your plot dimensions, architectural layout plans, floor requirements, and budget expectations for your residential or commercial project.",
      deliverables: ["Plot & Site Feasibility", "Floor Layout Scope", "Preliminary Cost Guidance"],
    },
    {
      number: "02",
      title: "Itemized Cost Estimation",
      subtitle: "Transparent Milestones",
      description:
        "We prepare a detailed, itemized cost estimate broken down across structural stages, civil works, and finishing packages with clear milestone timelines.",
      deliverables: ["Itemized Civil Breakdown", "Stage-Wise Milestone Plan", "Clear Commercial Terms"],
    },
    {
      number: "03",
      title: "Foundation & Substructure",
      subtitle: "Footings, Plinth & DPC",
      description:
        "Excavation, anti-termite treatment, lean concrete bed, RCC footing cages, plinth beam casting, and damp-proof course (DPC) installation.",
      deliverables: ["Foundation Inspection", "Plinth Beam Casting Log", "DPC Quality Verification"],
    },
    {
      number: "04",
      title: "Superstructure & Masonry",
      subtitle: "Columns, Slabs & Walls",
      description:
        "Erecting RCC columns, beam framing, floor slab pouring per floor with disciplined 14–21 day water curing, followed by true red brick or AAC block masonry.",
      deliverables: ["Slab Curing Records", "Structural Frame Verification", "Plumb Line Masonry Check"],
    },
    {
      number: "05",
      title: "Services, Finishing & Handover",
      subtitle: "Plumbing, Plaster & Handover",
      description:
        "Concealed electrical piping, sanitary drainage, internal/external cement plastering, terrace waterproofing, and a structured joint client walkthrough for handover.",
      deliverables: ["Plumbing Pressure Test", "Waterproofing Ponding Sign-off", "Clean Building Handover"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="Structured Execution"
          title="How We Build"
          description="A disciplined 5-stage construction methodology ensuring structural integrity, attentive on-site supervision, and honest milestone delivery from ground breaking to handover."
        />

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors group relative"
            >
              {/* Top Accent Indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2A3035]">
                <span className="text-2xl sm:text-3xl font-mono font-light text-[#B89A63]">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#667582]">
                  STAGE // {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-light text-[#F3F1EC] mb-1 group-hover:text-[#B89A63] transition-colors">
                  {step.title}
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-[#A7ADB3] block mb-3">
                  {step.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A3035]/60">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#667582] block mb-2">
                  Key Deliverables
                </span>
                <ul className="space-y-1 text-xs text-[#A7ADB3]">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#B89A63]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
