import React from "react";
import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/cards/BlogCard";
import { blogPostsData } from "@/data/blog";

export const metadata: Metadata = {
  title: "Knowledge Centre | Engineering Insights & Regulatory Standards",
  description:
    "Technical articles on seismic structural engineering, RERA escrow compliance, IS 1786 steel standards, and post-tensioned slab technology from GG Construction Co.",
};

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Technical Analysis & Industry Perspectives
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Knowledge Centre
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Forensic engineering investigations, Indian Standards (IS) code breakdowns, and statutory real estate due diligence written by our structural engineers and legal counsels.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
