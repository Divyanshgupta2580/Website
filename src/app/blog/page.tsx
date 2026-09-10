"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar, User, BookOpen, Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/cards/BlogCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { blogPostsData, BlogPost } from "@/data/blog";

const categories = [
  "All Insights",
  "Structural Engineering",
  "Material Science",
  "Real Estate Due Diligence",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const featuredPost = blogPostsData[0];

  const filteredPosts =
    activeCategory === "All Insights"
      ? blogPostsData
      : blogPostsData.filter((post) => post.category === activeCategory);

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

      {/* Featured Article Banner */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/50 transition-all overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] bg-[#0B0D0F]">
                <Image
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="bronze">Featured Engineering Briefing</Badge>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#A7ADB3] mb-4">
                    <span className="text-[#B89A63] uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#667582]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`} className="group">
                    <h2 className="text-xl sm:text-2xl font-light text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors leading-snug mb-4">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#2A3035]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-medium text-[#F3F1EC]">
                        {featuredPost.authorRole}
                      </div>
                      <div className="text-[11px] font-mono text-[#B89A63]">
                        {featuredPost.authorNamePlaceholder}
                      </div>
                    </div>

                    <Button
                      href={`/blog/${featuredPost.slug}`}
                      variant="primary"
                      size="sm"
                      className="flex-shrink-0"
                    >
                      <span>Read Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Contextual Technical Newsletter / Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#2A3035] bg-[#15191D]/50">
          <BookOpen className="w-8 h-8 text-[#B89A63] mx-auto mb-3" />
          <h2 className="text-2xl font-light text-[#F3F1EC] mb-3">
            Need Technical Specification or Structural Peer Review?
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            Submit your structural drawings, BOQ schedules, or statutory due diligence questions to our central engineering desk for peer review.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Consult Engineering Directorate
            </Button>
            <Button href="/get-a-quote" variant="outline" size="md">
              Request Project Estimate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
