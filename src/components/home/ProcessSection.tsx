import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      subtitle: "Site & Requirements",
      description:
        "We review your plot dimensions, soil conditions, space requirements, and budget expectations for your low-rise residential or commercial building.",
      points: ["Plot Inspection", "Scope Alignment", "Feasibility Discussion"],
    },
    {
      number: "02",
      title: "Plan",
      subtitle: "Schedule & Estimates",
      description:
        "We prepare an itemized milestone estimate, establish floor-by-floor construction schedules, and define structural material specifications upfront.",
      points: ["Itemized Cost Estimate", "Stage-Wise Schedule", "Material Specifications"],
    },
    {
      number: "03",
      title: "Build",
      subtitle: "On-Site Execution",
      description:
        "Our team manages foundation footings, plinth beam casting, RCC column-beam framing, slab pouring, brick masonry, and disciplined 14–21 day curing.",
      points: ["RCC Framing & Slabs", "Brickwork Masonry", "Daily Site Supervision"],
    },
    {
      number: "04",
      title: "Complete",
      subtitle: "Finishing & Handover",
      description:
        "We coordinate concealed electrical conduits, plumbing lines, cement plastering, waterproofing, and complete a thorough joint walkthrough before handover.",
      points: ["MEP & Plastering", "Waterproofing Check", "Joint Walkthrough"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          eyebrow="How We Work"
          title="Practical Construction Process"
          description="A straightforward 4-step workflow ensuring structural durability, attentive on-site supervision, and clear milestone progress from ground-breaking to handover."
        />

        {/* 4-Step Practical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[#D5D4D0] p-6 sm:p-7 rounded-sm shadow-xs flex flex-col justify-between hover:border-[#18324A] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#D5D4D0]">
                  <span className="text-3xl font-extrabold text-[#18324A]">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#D96B27] bg-[#F3D8C7] px-2 py-0.5 rounded-xs">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#18324A] mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-[#66717A] block mb-3">
                  {step.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-[#66717A] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D5D4D0]">
                <ul className="space-y-1.5 text-xs text-[#20272D] font-medium">
                  {step.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D96B27]" />
                      <span>{pt}</span>
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
