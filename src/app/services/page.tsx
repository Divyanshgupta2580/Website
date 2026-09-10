import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Construction & Engineering Services",
  description:
    "Explore the 9 specialized construction & engineering services of GG Construction Co., including turnkey civil contracting, commercial towers, industrial PEB, and seismic design.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Division 01 // Civil Engineering & Contracting
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Comprehensive Construction & Structural Engineering
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            From deep multi-level basement excavations in dense urban corridors to superflat logistics hubs and turnkey commercial complexes, we execute structural civil works backed by our dedicated in-house materials supply.
          </p>
        </div>
      </section>

      {/* Services Grid (All 9 Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Engineering Standards Matrix Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 bg-[#15191D] border border-[#2A3035]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#B89A63] block mb-2">
                QUALITY CONTROLS
              </span>
              <h3 className="text-xl font-light text-[#F3F1EC] mb-2">
                On-Site Material & Concrete Laboratories
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Every construction site maintains calibrated testing cubes, automated slump test cones, and rebar gauge micrometers. Zero concrete is poured without verified slump tests.
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#B89A63] block mb-2">
                SEISMIC DESIGN
              </span>
              <h3 className="text-xl font-light text-[#F3F1EC] mb-2">
                Zone IV & V Structural Detailing
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                All framing adheres strictly to IS 13920 ductile detailing provisions, utilizing Fe 500D high-elongation steel rebars and confinement ties to absorb dynamic lateral forces.
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#B89A63] block mb-2">
                ACCOUNTABILITY
              </span>
              <h3 className="text-xl font-light text-[#F3F1EC] mb-2">
                Single-Contract Turnkey Guarantees
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                We accept comprehensive contractual liability for cost, quality, and delivery dates, backed by performance bank guarantees and milestone defect liability periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#2A3035] bg-[#15191D]/50">
          <h2 className="text-2xl font-light text-[#F3F1EC] mb-3">
            Discuss Your Civil Project With Our Chief Engineer
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            Share your plot coordinates, architectural drawings, or tender specifications for immediate engineering review.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/get-a-quote" variant="primary" size="md">
              Request Project Estimate
            </Button>
            <Button href="/contact?division=construction" variant="outline" size="md">
              Contact Construction Division
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
