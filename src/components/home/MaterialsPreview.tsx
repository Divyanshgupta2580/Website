import React from "react";
import Link from "next/link";
import { ArrowUpRight, Truck, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import MaterialCard from "@/components/cards/MaterialCard";
import Button from "@/components/ui/Button";
import { materialsData } from "@/data/materials";

export default function MaterialsPreview() {
  // Present the core categories requested by the prompt
  return (
    <section className="py-20 md:py-28 bg-[#15191D]/35 border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="Division 03 // Building Materials Supply"
          title="Direct-From-Mill Building Materials"
          description="Direct manufacturer distribution of primary TMT steel, certified cement, hydro-washed sand, coarse aggregates, plumbing, electrical, and structural chemicals with guaranteed weighbridge integrity."
          action={
            <Button
              href="/get-a-quote?division=materials"
              variant="primary"
              size="sm"
            >
              <span>Request Material Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          }
        />

        {/* 8 Core Categories Grid (Exact Prompt Specification) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            "cement",
            "tmt-steel",
            "bricks-blocks",
            "sand-aggregates",
            "plumbing",
            "electrical",
            "construction-chemicals",
            "other-building-supplies",
          ]
            .map((slug) => materialsData.find((m) => m.slug === slug))
            .filter((m): m is (typeof materialsData)[0] => Boolean(m))
            .map((material) => (
              <MaterialCard key={material.slug} material={material} />
            ))}
        </div>

        {/* Bottom Banner with Direct Material Quote Action */}
        <div className="p-6 sm:p-8 bg-[#15191D] border border-[#2A3035] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Truck className="w-6 h-6 text-[#B89A63] flex-shrink-0" />
            <div className="text-xs">
              <span className="text-[#F3F1EC] font-medium block">
                Bulk Dispatch Across Key Industrial & Civil Corridors
              </span>
              <span className="text-[#A7ADB3] block mt-0.5">
                Supplied with original manufacturer Test Certificates (MTC). Minimum Order: Full Truckload (FTL).
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              href="/get-a-quote?division=materials"
              variant="primary"
              size="sm"
            >
              <span>Request Material Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>

            <Button
              href="/materials"
              variant="outline"
              size="sm"
            >
              All Materials
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
