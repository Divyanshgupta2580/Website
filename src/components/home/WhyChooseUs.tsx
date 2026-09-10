import React from "react";
import { Compass, ShieldCheck, Truck, Scale, HeartHandshake, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  const pillars = [
    {
      number: "01",
      icon: Truck,
      title: "Dependable Material Supply",
      subtitle: "Primary Business Focus",
      description: "Direct and steady supply of essential construction materials: cement, TMT steel, red bricks, sand, aggregates, and plumbing supplies delivered directly to your building site without unnecessary delays.",
      highlights: [
        "Fresh cement bags and tested TMT steel rebars",
        "Honest weighbridge and volumetric measurement",
        "Prompt local truck & trolley dispatch",
      ],
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Quality-Focused Construction",
      subtitle: "Small to Medium Buildings",
      description: "Specialized in small-to-medium building construction up to 4–5 floors maximum. We maintain rigorous standards for concrete mixing ratios, reinforcement tie placement, and proper 14–21 day curing cycles.",
      highlights: [
        "Sound RCC column and beam structural frame casting",
        "First-class red clay brick & lightweight AAC masonry",
        "Dedicated day-to-day on-site supervision",
      ],
    },
    {
      number: "03",
      icon: Scale,
      title: "Transparent Estimates & Billing",
      subtitle: "Honest Dealings",
      description: "Clear, itemized cost estimates without hidden extras. Whether ordering 50 bags of cement or contracting a full 4-storey residential house, you receive honest pricing and stage-wise accountability.",
      highlights: [
        "Transparent daily material pricing and discounts",
        "Stage-wise construction milestone payments",
        "Accurate delivery challans with zero ambiguity",
      ],
    },
    {
      number: "04",
      icon: Compass,
      title: "Property Sales Assistance",
      subtitle: "Real Estate Coordination",
      description: "Assisting customers with property enquiries, marketing listed properties on behalf of owners and developers, scheduling site visits, and ensuring transparent buyer-seller coordination.",
      highlights: [
        "Assistance with title document verification",
        "Clear distinction between built and marketed properties",
        "Personal guidance from site visit to transaction",
      ],
    },
    {
      number: "05",
      icon: HeartHandshake,
      title: "Accessible Personal Service",
      subtitle: "Direct Communication",
      description: "We believe in personal accessibility. Speak directly with our team regarding material delivery times, ongoing construction milestones, or property details whenever you need assistance.",
      highlights: [
        "Direct founder and management availability",
        "Practical understanding of local construction conditions",
        "Long-term customer relationships built on trust",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035] relative">
      <Container size="default">
        <SectionHeading
          eyebrow="Practical Advantages"
          title="Why Choose GG Construction Co."
          description="A customer-focused business combining dependable building materials supply, practical construction up to 4–5 floors, and transparent property sales assistance."
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
                  <ul className="space-y-2 text-xs text-[#A7ADB3]">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* Bottom 3 Supporting Pillars (4-span each) */}
          {pillars.slice(2).map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="lg:col-span-4 bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
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
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#B89A63] flex-shrink-0 mt-1.5" />
                        <span className="line-clamp-2">{h}</span>
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
