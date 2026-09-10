import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      subtitle: "Site Brief & Feasibility",
      description: "Initial client engagement, site topographical assessment, zoning review, structural load requirements, and preliminary budget benchmarking.",
      deliverables: ["Site Feasibility Matrix", "Topographical Review", "Initial Parameter Brief"],
    },
    {
      number: "02",
      title: "Planning",
      subtitle: "BIM & Master Scheduling",
      description: "Architectural blueprint coordination, Critical Path Method (CPM) scheduling, municipal statutory clearance roadmap, and material supply planning.",
      deliverables: ["Master CPM Schedule", "Statutory Sanction Dossier", "Material Procurement Plan"],
    },
    {
      number: "03",
      title: "Engineering",
      subtitle: "Structural & IS Code Detailing",
      description: "Seismic load calculation (IS 1893), geotechnical foundation design, BIM 3D clash-detection between civil and MEP lines, and itemized BOQ generation.",
      deliverables: ["Approved Structural Blueprints", "BIM 3D Coordination Model", "Detailed Itemized BOQ"],
    },
    {
      number: "04",
      title: "Construction",
      subtitle: "Civil Execution & Material Integration",
      description: "Substructure piling, continuous diaphragm walls, post-tensioned slab casting, and PEB structural erection backed by direct primary steel supply.",
      deliverables: ["Daily Site Inspection Logs", "Batch Slump Test Tickets", "Bi-Weekly Drone Progress"],
    },
    {
      number: "05",
      title: "Quality & Inspection",
      subtitle: "On-Site Laboratory Testing",
      description: "Continuous 7-day and 28-day concrete cube crushing tests, weld ultrasonic testing, hydrostatic plumbing tests, and third-party structural verification.",
      deliverables: ["NABL Certified Lab Logs", "28-Day Strength Certificates", "Pre-Commissioning Audit"],
    },
    {
      number: "06",
      title: "Handover",
      subtitle: "Occupancy & Digital As-Builts",
      description: "Full MEP commissioning, fire safety NOC clearance, final client snag clearance, Occupancy Certificate (OC) delivery, and long-term warranty handover.",
      deliverables: ["Occupancy Certificate (OC)", "Digital As-Built CAD/BIM", "Warranty Manual & Keys"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="The Engineering Lifecycle"
          title="Our 6-Phase Construction Process"
          description="A disciplined, milestone-governed methodology ensuring transparency, code compliance, and guaranteed project delivery timelines."
        />

        {/* 6-Step Process Grid */}
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
                    PHASE {step.number}
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
                  Milestone Deliverables
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
