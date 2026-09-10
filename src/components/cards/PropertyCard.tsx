import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Maximize, Calendar } from "lucide-react";
import { PropertyItem } from "@/data/properties";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export interface PropertyCardProps {
  property: PropertyItem;
  className?: string;
}

export default function PropertyCard({ property, className = "" }: PropertyCardProps) {
  return (
    <article
      className={`group bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-300 flex flex-col overflow-hidden ${className}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1D2227]">
        <Image
          src={property.heroImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/30 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 gap-2">
          <Badge variant="bronze">{property.propertyType}</Badge>
          <span
            className={`px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider border ${
              property.status === "Ready to Move"
                ? "bg-emerald-950/70 text-emerald-300 border-emerald-800"
                : property.status === "Under Construction"
                ? "bg-[#B89A63]/20 text-[#B89A63] border-[#B89A63]/40"
                : "bg-[#1D2227] text-[#A7ADB3] border-[#2A3035]"
            }`}
          >
            {property.status}
          </span>
        </div>

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#F3F1EC] z-10">
          <div className="flex items-center gap-1.5 drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-[#B89A63]" />
            <span className="text-[11px] font-medium tracking-wide">
              {property.cityArea}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#A7ADB3]">
            {property.possessionDate}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B89A63] bg-[#0B0D0F] px-2 py-0.5 border border-[#2A3035] inline-block">
              {property.listingNature}
            </span>
          </div>

          <h3 className="text-xl font-light text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors mb-1">
            {property.title}
          </h3>
          <p className="text-xs text-[#A7ADB3] mb-4">
            {property.tagline}
          </p>

          <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#2A3035]/60 text-xs mb-5">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#667582] block">
                Configured Sizes
              </span>
              <span className="text-[#F3F1EC] font-mono text-[11px] block mt-0.5">
                {property.sizeRange}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#667582] block">
                Price Guidance
              </span>
              <span className="text-[#B89A63] font-mono text-[11px] block mt-0.5">
                {property.priceStartingPlaceholder}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            href={`/contact?division=real-estate&subject=${encodeURIComponent(
              `Property Enquiry: ${property.title}`
            )}`}
            variant="primary"
            size="sm"
            className="flex-1"
          >
            Enquire Details
          </Button>
          <Button
            href={`/contact?division=real-estate&subject=${encodeURIComponent(
              `Site Visit Request: ${property.title}`
            )}`}
            variant="outline"
            size="sm"
          >
            Site Visit
          </Button>
        </div>
      </div>
    </article>
  );
}
