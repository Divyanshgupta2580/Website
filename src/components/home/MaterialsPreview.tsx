import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MaterialCategoryCard from "@/components/cards/MaterialCategoryCard";
import Button from "@/components/ui/Button";
import { materialsData } from "@/data/materials";

export default function MaterialsPreview() {
  // Showcase top 3 high-volume categories on homepage
  const featuredCategories = materialsData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#15191D]/30 border-t border-[#2A3035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Division 03 // Materials Supply"
          title="Direct-From-Mill Building Materials"
          description="We distribute primary TMT steel, certified cement, precision VSI sand, and structural chemicals with original mill test certificates and guaranteed weighbridge integrity."
          action={
            <Button href="/materials" variant="outline" size="sm">
              <span>All 9 Material Categories</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredCategories.map((category) => (
            <MaterialCategoryCard key={category.slug} category={category} />
          ))}
        </div>

        <div className="mt-12 text-center lg:hidden">
          <Button href="/materials" variant="outline" size="md">
            <span>Explore All 9 Material Categories</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
