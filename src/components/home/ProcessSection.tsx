import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "DISCUSS",
      subtitle: "Understand the construction requirement.",
      description:
        "We discuss your plot dimensions, space needs, floor configurations, and budget expectations for your low-rise residential or commercial building.",
    },
    {
      number: "02",
      title: "PLAN",
      subtitle: "Review the project scope and requirements.",
      description:
        "We review structural drawings, prepare transparent itemized milestone estimates, and establish realistic construction schedules upfront.",
    },
    {
      number: "03",
      title: "BUILD",
      subtitle: "Coordinate and execute the construction work.",
      description:
        "Our team manages foundation footings, RCC column and beam framing, slab pours, brick masonry, and disciplined 14–21 day water curing with daily site oversight.",
    },
    {
      number: "04",
      title: "COMPLETE",
      subtitle: "Move through finishing and project completion.",
      description:
        "We coordinate utility conduits, cement plastering, waterproofing, and conduct a thorough joint walkthrough before final building handover.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          sectionNumber="05"
          eyebrow="PROCESS"
          title="A SIMPLE WAY TO GET STARTED."
          description="A clear, structured workflow designed for low-rise building construction in Delhi NCR, ensuring predictable milestones and disciplined civil execution."
        />

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div
            className="hidden lg:block absolute top-9 left-10 right-10 h-[2px] bg-[#D5D4D0] z-0"
            aria-hidden="true"
          >
            <div className="h-full bg-[#D96B27] w-full" />
          </div>

          {/* Steps Grid: Horizontal on Desktop (lg:grid-cols-4), Vertical Timeline on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white border border-[#D5D4D0] p-6 sm:p-7 rounded-xl shadow-xs hover:border-[#18324A] transition-all flex flex-col justify-between relative"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#D5D4D0]">
                    <div className="w-10 h-10 rounded-lg bg-[#18324A] text-white flex items-center justify-center font-mono font-extrabold text-sm shadow-xs">
                      {step.number}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#D96B27] bg-[#F3D8C7] px-2.5 py-0.5 rounded">
                      STAGE {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#18324A] mb-1 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs font-bold text-[#D96B27] uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-sm text-[#66717A] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 mt-6 border-t border-[#D5D4D0] flex items-center justify-between text-xs text-[#66717A]">
                  <span className="font-mono text-[10px] font-bold text-[#18324A]">
                    PHASE {idx + 1} OF 4
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D96B27]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
