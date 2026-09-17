"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, Maximize2, X, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { galleryData, GalleryItem } from "@/data/gallery";

const categories = [
  "All Works",
  "Residential Construction",
  "Commercial Construction",
  "Structural Work",
  "Masonry & Finishing",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Accessible keyboard listener for Esc key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  const filteredItems =
    activeCategory === "All Works"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Visual Records & Documentation
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Construction Work Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed mb-4">
            Representative photographic records of low-rise building construction, reinforced concrete frame execution, brick masonry, and finished spaces across Delhi localities.
          </p>
          <div className="p-3.5 bg-[#15191D] border border-[#2A3035] text-xs text-[#A7ADB3] flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89A63] flex-shrink-0" />
            <span>
              <strong className="text-[#F3F1EC]">Note:</strong> Visual archives depict representative structural methods, masonry works, and low-rise building typologies up to 4–5 floors.
            </span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#2A3035] scrollbar-none">
          <Filter className="w-4 h-4 text-[#B89A63] flex-shrink-0 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? "bg-[#B89A63] text-[#0B0D0F] border-[#B89A63] font-semibold"
                  : "bg-[#15191D] text-[#A7ADB3] border-[#2A3035] hover:text-[#F3F1EC] hover:border-[#667582]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[16/11] bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/90 via-[#0B0D0F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5">
                <div className="flex justify-between items-center">
                  <Badge variant="bronze">{item.category}</Badge>
                  <span className="w-8 h-8 rounded-none bg-[#0B0D0F]/80 border border-[#2A3035] flex items-center justify-center text-[#F3F1EC]">
                    <Maximize2 className="w-4 h-4 text-[#B89A63]" />
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-[#F3F1EC] mb-1">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-[#A7ADB3] block">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 bg-[#0B0D0F]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#15191D] border border-[#2A3035] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#0B0D0F]/80 border border-[#2A3035] text-[#F3F1EC] hover:text-[#B89A63] flex items-center justify-center focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative aspect-[16/10] w-full bg-[#0B0D0F]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Details Footer */}
            <div className="p-6 bg-[#15191D] border-t border-[#2A3035] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="bronze">{selectedItem.category}</Badge>
                  <span className="text-xs font-mono text-[#667582]">
                    LOC: {selectedItem.location}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-[#F3F1EC]">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#A7ADB3] mt-1">
                  {selectedItem.description}
                </p>
              </div>

              {selectedItem.relatedSlug && (
                <Button
                  href={selectedItem.relatedSlug}
                  variant="primary"
                  size="sm"
                  className="flex-shrink-0"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
