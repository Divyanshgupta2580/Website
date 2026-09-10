import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Enquiry & Assessment",
      subtitle: "Material Needs & Site Review",
      description: "We understand your exact requirements—whether you need bulk cement and steel delivered to your site, or complete construction planning for a 3–4 floor residential or commercial building.",
      deliverables: ["Requirement Checklist", "Plot / Site Discussion", "Preliminary Cost Guidance"],
    },
    {
      number: "02",
      title: "Transparent Estimation",
      subtitle: "Clear Pricing & Milestones",
      description: "We provide an itemized material quote or stage-wise building estimate based on actual market rates, without hidden extras or confusing contractual language.",
      deliverables: ["Itemized Material Rates", "Stage-Wise Construction Plan", "Clear Commercial Terms"],
    },
    {
      number: "03",
      title: "Material Staging & Delivery",
      subtitle: "Direct Site Supply",
      description: "For material orders, we schedule direct truck/trolley deliveries. For construction projects, we stage quality cement, steel, bricks, and sand systematically to keep work flowing.",
      deliverables: ["Direct Plot Delivery", "Weighbridge / Volumetric Check", "Safe Unloading Coordination"],
    },
    {
      number: "04",
      title: "Construction & Supervision",
      subtitle: "Disciplined Civil Execution",
      description: "Execution of foundation footings, RCC column-beam framing, slab pours, and brick masonry under experienced daily supervision, maintaining proper concrete curing periods.",
      deliverables: ["RCC Structural Framing", "Quality Brick & AAC Masonry", "Attentive Site Oversight"],
    },
    {
      number: "05",
      title: "Finishing & Handover",
      subtitle: "Inspection & Handover",
      description: "Checking plumbing lines, electrical conduits, plaster finishes, and roof waterproofing before a clean, organized handover to the property owner.",
      deliverables: ["Comprehensive Quality Walkthrough", "Plumbing & Electrical Check", "Customer Handover"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="Structured Execution"
          title="How We Work"
          description="A practical, 5-step methodology ensuring transparent pricing, dependable material delivery, and honest construction supervision."
        />

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors group relative"
            >
              {/* Top Accent Indicator */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#2A3035] to-transparent group-hover:via-[#B89A63] transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-light font-mono text-[#B89A63]">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#667582] bg-[#0B0D0F] px-2 py-0.5 border border-[#2A3035]">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-light text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-[#A7ADB3] block mb-3">
                  {step.subtitle}
                </span>

                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A3035]/60">
                <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-2 font-semibold">
                  Key Steps
                </span>
                <ul className="space-y-1 text-[11px] text-[#A7ADB3]">
                  {step.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-[#B89A63] rounded-full" />
                      <span className="line-clamp-1">{deliv}</span>
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
