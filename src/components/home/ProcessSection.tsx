import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Geotechnical & Architectural Engineering",
      tag: "Pre-Construction Phase",
      description: "Subsoil boring surveys, seismic load analysis, BIM 3D clash-detection modeling, and municipal statutory sanction coordination.",
      deliverables: ["Soil Bearing Capacity Report", "BIM 3D Model", "Statutory Sanctions"],
    },
    {
      number: "02",
      title: "Integrated Material Sourcing & Staging",
      tag: "Supply Chain Phase",
      description: "Direct mill-allocation of Fe 500D TMT rebars, certified cement tankers, and crushed aggregates tested for silt and moisture before delivery.",
      deliverables: ["Mill Test Certificates (MTC)", "Aggregate Sieve Logs", "Buffered Logistics Plan"],
    },
    {
      number: "03",
      title: "Automated Civil Superstructure Execution",
      tag: "Execution Phase",
      description: "Deployment of laser screed flooring, system formwork, post-tensioned cable tensioning, and continuous cube compression testing.",
      deliverables: ["28-Day Cube Compressive Logs", "Post-Tension Stress Verification", "Bi-Weekly Drone Scans"],
    },
    {
      number: "04",
      title: "MEP Commissioning & Digital Handover",
      tag: "Handover Phase",
      description: "Pressure testing of plumbing lines, fire hydrant flow clearance, electrical harmonic audits, and complete digital as-built blueprints.",
      deliverables: ["Occupancy Certificate (OC) Dossier", "MEP Commissioning Logs", "Warranty Manuals"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Methodology"
          title="Engineered Execution From Inception to Handover"
          description="How our 4-phase integrated delivery model eliminates surprises, controls costs, and guarantees structural permanence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-light font-mono text-[#B89A63]">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#667582]">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-lg font-light text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors mb-3">
                  {step.title}
                </h3>

                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A3035]/60">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-2">
                  Key Verification Gates
                </span>
                <ul className="space-y-1 text-[11px] text-[#A7ADB3]">
                  {step.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-[#B89A63] rounded-full" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
