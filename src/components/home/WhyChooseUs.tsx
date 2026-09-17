import React from "react";
import { ShieldCheck, HardHat, Scale, HeartHandshake, CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  const pillars = [
    {
      number: "01",
      icon: HardHat,
      title: "Quality-Focused Low-Rise Construction",
      subtitle: "Up to 4–5 Floors",
      description:
        "Specialized in small-to-medium building construction up to 4–5 floors maximum. We maintain rigorous standards for concrete mixing ratios, reinforcement tie placement, and proper 14–21 day curing cycles.",
      highlights: [
        "Sound RCC column and beam structural frame casting",
        "First-class red clay brick & lightweight AAC block masonry",
        "Disciplined 14–21 day water curing protocols",
      ],
    },
    {
      number: "02",
      icon: MapPin,
      title: "Genuine Local Delhi Experience",
      subtitle: "Rohini, Pitampura & Nearby Areas",
      description:
        "GG Construction Co. has carried out construction work across Rohini, Pitampura and nearby areas of Delhi. We understand local ground conditions, neighborhood logistics, and municipal building practices thoroughly.",
      highlights: [
        "Confirmed construction experience across North-West Delhi",
        "Practical neighborhood site delivery coordination",
        "Familiarity with local soil and residential layout norms",
      ],
    },
    {
      number: "03",
      icon: Scale,
      title: "Transparent Estimates & Billing",
      subtitle: "Honest Milestone Accounting",
      description:
        "Clear, itemized cost estimates without hidden extras or confusing contract terms. Milestone payments are tied directly to verified physical progress on site from foundation to finishing.",
      highlights: [
        "Itemized civil and structural quantity breakdowns",
        "Stage-wise milestone payments tied to physical progress",
        "No unexpected cost surges or hidden billing items",
      ],
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Attentive On-Site Supervision",
      subtitle: "Daily Quality Oversight",
      description:
        "Every active building project receives dedicated on-site supervision. Our experienced supervisors oversee steel rebar tying, concrete pouring, mortar mixes, and plumb lines continuously.",
      highlights: [
        "Daily site presence for critical casting operations",
        "Rebar binding and concrete cover inspection",
        "True vertical plumb lines and mortar joint verification",
      ],
    },
    {
      number: "05",
      icon: HeartHandshake,
      title: "Direct Client Accessibility",
      subtitle: "Clear Personal Communication",
      description:
        "We believe in personal accessibility and straightforward communication. Speak directly with our core project team for milestone updates, technical queries, or on-site walkthroughs.",
      highlights: [
        "Direct contact with core construction management",
        "Regular milestone walkthroughs on site",
        "Long-term client relationships built on dependability",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          eyebrow="Practical Advantages"
          title="Why Choose GG Construction Co."
          description="A dedicated building construction contractor focused on durable low-rise residential and commercial buildings across Rohini, Pitampura, and nearby areas of Delhi."
        />

        {/* 5-Pillar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Top 2 Primary Pillars (Large 6-span each) */}
          {pillars.slice(0, 2).map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="lg:col-span-6 bg-white border border-[#D5D4D0] p-7 sm:p-9 rounded-sm shadow-xs flex flex-col justify-between hover:border-[#18324A] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 bg-[#F4F2EE] border border-[#D5D4D0] rounded-sm flex items-center justify-center text-[#18324A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#66717A] uppercase tracking-wider">
                      PILLAR // {p.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#18324A] mb-1">
                    {p.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D96B27] block mb-4">
                    {p.subtitle}
                  </span>

                  <p className="text-sm text-[#66717A] leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#D5D4D0]">
                  <ul className="space-y-2 text-xs text-[#20272D] font-medium">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D96B27] flex-shrink-0 mt-0.5" />
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
                className="lg:col-span-4 bg-white border border-[#D5D4D0] p-6 sm:p-7 rounded-sm shadow-xs flex flex-col justify-between hover:border-[#18324A] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-[#F4F2EE] border border-[#D5D4D0] rounded-sm flex items-center justify-center text-[#18324A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#66717A] uppercase tracking-wider">
                      PILLAR // {p.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#18324A] mb-1">
                    {p.title}
                  </h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D96B27] block mb-3">
                    {p.subtitle}
                  </span>

                  <p className="text-xs text-[#66717A] leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D5D4D0]">
                  <ul className="space-y-2 text-xs text-[#20272D] font-medium">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D96B27] flex-shrink-0 mt-0.5" />
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
