import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Truck } from "lucide-react";
import { MaterialCategoryItem } from "@/data/materials";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export interface MaterialCardProps {
  material: MaterialCategoryItem;
  className?: string;
}

export default function MaterialCard({
  material,
  className = "",
}: MaterialCardProps) {
  const displayTitle = material.shortTitle || material.title;
  const description = material.shortDescription || material.overview;
  const applications =
    material.applicationsSummary ||
    material.products[0]?.applications.slice(0, 3).join(", ");
  const productExamples =
    material.exampleProducts ||
    material.products.map((p) => p.name).slice(0, 3);

  return (
    <article
      className={`group bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div>
        {/* Visual Header */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1D2227]">
          <Image
            src={material.heroImage}
            alt={material.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/40 to-transparent" />

          <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between z-10">
            <Badge variant="bronze">Direct Supply</Badge>
            <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-[#0B0D0F]/80 text-[#F3F1EC] border border-[#2A3035]">
              <Truck className="w-3 h-3 text-[#B89A63]" />
              <span>Site Delivery</span>
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 z-10">
            <h3 className="text-xl font-light text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors tracking-tight">
              <Link href={`/materials/${material.slug}`} className="focus:outline-none">
                {displayTitle}
              </Link>
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-3.5">
          {/* What is this? */}
          <p className="text-xs text-[#A7ADB3] leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* What is it used for? */}
          {applications && (
            <div className="pt-3 border-t border-[#2A3035]/60">
              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#667582] block mb-1">
                Typical Use &amp; Applications
              </span>
              <p className="text-xs text-[#F3F1EC]/90 leading-relaxed line-clamp-2">
                {applications}
              </p>
            </div>
          )}

          {/* Small Product Examples */}
          {productExamples.length > 0 && (
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {productExamples.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 bg-[#0B0D0F] border border-[#2A3035] text-[#A7ADB3]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Simpler, Clear Action Area */}
      <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-3 border-t border-[#2A3035]/40 mt-3">
        <Button
          href={`/contact?division=materials&subject=${encodeURIComponent(
            `Material Enquiry: ${displayTitle}`
          )}`}
          variant="primary"
          size="sm"
          className="flex-1 text-xs justify-center"
        >
          <span>Enquire Now</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
        </Button>

        <Link
          href={`/materials/${material.slug}`}
          className="text-xs uppercase tracking-wider font-mono text-[#A7ADB3] hover:text-[#B89A63] transition-colors py-2 px-1 flex-shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A63]"
        >
          Details ↗
        </Link>
      </div>
    </article>
  );
}
