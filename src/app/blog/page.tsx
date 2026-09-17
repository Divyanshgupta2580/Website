"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar, BookOpen, Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/cards/BlogCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { blogPostsData, BlogPost } from "@/data/blog";

const categories = [
  "All Articles",
  "Construction Guidance",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const featuredPost = blogPostsData[0];

  const filteredPosts =
    activeCategory === "All Articles"
      ? blogPostsData
      : blogPostsData.filter((post) => post.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#D96B27]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D96B27]">
              Practical Building Guides &amp; Advice
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-6">
            Building Construction Guides
          </h1>
          <p className="text-base sm:text-lg text-[#66717A] leading-relaxed">
            Practical insights on low-rise building construction, RCC framing standards, curing timelines, and damp-proofing best practices for home and building owners.
          </p>
        </div>
      </section>

      {/* Featured Article Banner */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-white border border-[#D5D4D0] shadow-sm hover:border-[#D96B27] transition-all overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[440px] bg-[#18324A]">
                <Image
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="orange">Featured Construction Guide</Badge>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#66717A] mb-4">
                    <span className="text-[#D96B27] uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#66717A]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`} className="group">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#18324A] group-hover:text-[#D96B27] transition-colors leading-snug mb-4">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-[#66717A] leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D5D4D0]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold text-[#18324A]">
                        {featuredPost.authorRole}
                      </div>
                      <div className="text-xs font-bold text-[#D96B27]">
                        {featuredPost.authorNamePlaceholder}
                      </div>
                    </div>

                    <Button
                      href={`/blog/${featuredPost.slug}`}
                      variant="primary"
                      size="sm"
                      className="flex-shrink-0"
                    >
                      <span>Read Guide</span>
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
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#D5D4D0] scrollbar-none">
          <Filter className="w-4 h-4 text-[#D96B27] flex-shrink-0 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all border ${
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

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Construction Planning CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#D5D4D0] bg-white shadow-sm">
          <BookOpen className="w-8 h-8 text-[#D96B27] mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-[#18324A] mb-3">
            Planning a Construction Project?
          </h2>
          <p className="text-sm text-[#66717A] max-w-xl mx-auto mb-6">
            Speak with our construction team regarding plot dimensions, structural planning, and realistic construction estimates across Rohini, Pitampura, and Delhi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/get-a-quote" variant="primary" size="md">
              GET A QUOTE
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact Construction Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
