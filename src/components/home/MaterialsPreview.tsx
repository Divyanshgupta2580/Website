import React from "react";
import Link from "next/link";
import { ArrowUpRight, Truck, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import MaterialCard from "@/components/cards/MaterialCard";
import Button from "@/components/ui/Button";
import { materialsData } from "@/data/materials";

export default function MaterialsPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#15191D]/35 border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="Primary Business // Building Materials"
          title="Quality Construction Materials Supply"
          description="Our primary business focuses on the sale and supply of essential construction materials: cement, TMT steel, red bricks, AAC blocks, sand, aggregates, plumbing, and electrical materials with dependable site delivery."
          action={
            <Button
              href="/contact"
              variant="primary"
              size="sm"
            >
              <span>Enquire for Materials</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          }
        />

        {/* 8 Core Categories Grid */}
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
                Direct Delivery to Your Building Site
              </span>
              <span className="text-[#A7ADB3] block mt-0.5">
                Bulk contractor orders and plot deliveries available. Call +91 98110 34825 for daily pricing.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
            >
              <span>Enquire for Materials</span>
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
