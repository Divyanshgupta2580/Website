import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Truck } from "lucide-react";
import { MaterialCategoryItem } from "@/data/materials";
import Badge from "@/components/ui/Badge";

export interface MaterialCategoryCardProps {
  category: MaterialCategoryItem;
  className?: string;
}

export default function MaterialCategoryCard({
  category,
  className = "",
}: MaterialCategoryCardProps) {
  return (
    <article
      className={`group bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div>
        {/* Category Header Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1D2227]">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/40 to-transparent" />

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <Badge variant="bronze">Bulk Supply</Badge>
            <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-[#0B0D0F]/80 text-[#F3F1EC] border border-[#2A3035]">
              <Truck className="w-3 h-3 text-[#B89A63]" />
              <span>FTL Fleet</span>
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 z-10">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89A63] block">
              Division 03 // Materials
            </span>
            <h3 className="text-xl font-light text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors">
              <Link href={`/materials/${category.slug}`} className="focus:outline-none">
                {category.title}
              </Link>
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-xs text-[#A7ADB3] leading-relaxed line-clamp-2 mb-4">
            {category.overview}
          </p>

          <div className="pt-3 border-t border-[#2A3035]/60 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-2.5">
              Available Product Lines
            </span>
            <ul className="space-y-1.5">
              {category.products.slice(0, 3).map((prod, idx) => (
                <li key={idx} className="flex items-center justify-between text-xs text-[#A7ADB3]">
                  <span className="text-[#F3F1EC] font-medium line-clamp-1">{prod.name}</span>
                  <span className="text-[10px] font-mono text-[#667582] flex-shrink-0 ml-2">
                    {prod.packaging.split("/")[0]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-[#2A3035]/40 flex items-center justify-between">
        <Link
          href={`/materials/${category.slug}`}
          className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-2 transition-colors focus-visible:ring-1 focus-visible:ring-[#B89A63]"
        >
          <span>Specifications & RFQ</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <span className="text-[10px] text-[#667582] font-mono">
          NABL TESTED
        </span>
      </div>
    </article>
  );
}
