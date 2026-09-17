import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { ClipboardList, HardHat, MessagesSquare } from "lucide-react";

export default function ApproachSection() {
  const points = [
    {
      number: "01",
      icon: ClipboardList,
      title: "CLEAR SCOPE",
      description:
        "Defined architectural drawings, itemized material quantities, and transparent milestone budgets agreed upon upfront without hidden variations or ambiguous clauses.",
    },
    {
      number: "02",
      icon: HardHat,
      title: "ON-SITE EXECUTION",
      description:
        "Disciplined daily jobsite supervision covering steel rebar tying, concrete batching, plumb masonry alignment, and full 14–21 day water curing cycles.",
    },
    {
      number: "03",
      icon: MessagesSquare,
      title: "DIRECT COMMUNICATION",
      description:
        "Direct access to the core construction team, regular milestone walkthroughs on site, and honest project updates from groundbreaking through handover.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          eyebrow="OUR APPROACH"
          title="BUILT AROUND PRACTICAL CONSTRUCTION."
          description="GG Construction Co. focuses on practical building construction and direct project execution. We prioritize sound civil craftsmanship, disciplined jobsite management, and dependable timelines for low-rise residential and commercial structures."
        />

        {/* 3 Core Points in Clean Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="bg-white border border-[#D5D4D0] p-6 sm:p-8 rounded-none hover:border-[#18324A] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#D5D4D0]">
                    <div className="w-10 h-10 rounded-none bg-[#F4F2EE] border border-[#D5D4D0] flex items-center justify-center text-[#D96B27]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#18324A] mb-3 tracking-tight">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-[#66717A] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
