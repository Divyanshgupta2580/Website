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
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#D96B27]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D96B27]">
              Visual Records &amp; Documentation
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-6">
            Construction Work Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#66717A] leading-relaxed mb-4">
            Representative photographic records of low-rise building construction, reinforced concrete frame execution, brick masonry, and finished spaces across Delhi localities.
          </p>
          <div className="p-4 bg-white border border-[#D5D4D0] shadow-sm text-xs text-[#66717A] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D96B27] flex-shrink-0" />
            <span>
              <strong className="text-[#18324A]">Note:</strong> Visual archives depict representative structural methods, masonry works, and low-rise building typologies up to 4–5 floors.
            </span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#D5D4D0] scrollbar-none">
          <Filter className="w-4 h-4 text-[#D96B27] flex-shrink-0 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? "bg-[#D96B27] text-white border-[#D96B27]"
                  : "bg-white text-[#66717A] border-[#D5D4D0] hover:text-[#18324A] hover:border-[#66717A]"
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
              className="group relative aspect-[16/11] bg-white border border-[#D5D4D0] hover:border-[#D96B27] rounded-2xl sm:rounded-[22px] shadow-sm transition-all cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18324A]/90 via-[#18324A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5">
                <div className="flex justify-between items-center">
                  <Badge variant="orange">{item.category}</Badge>
                  <span className="w-8 h-8 rounded-lg bg-[#18324A]/80 border border-white/20 flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4 text-[#D96B27]" />
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs text-white/80 block">
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
          className="fixed inset-0 z-50 bg-[#18324A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border border-[#D5D4D0] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-white/90 border border-[#D5D4D0] text-[#18324A] hover:text-[#D96B27] flex items-center justify-center focus:outline-none shadow-sm"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative aspect-[16/10] w-full bg-[#18324A]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Details Footer */}
            <div className="p-6 bg-white border-t border-[#D5D4D0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="orange">{selectedItem.category}</Badge>
                  <span className="text-xs text-[#66717A]">
                    Location: {selectedItem.location}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#18324A]">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#66717A] mt-1">
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
