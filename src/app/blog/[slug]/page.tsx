import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, Tag, ArrowUpRight, Share2, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/cards/BlogCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { blogPostsData } from "@/data/blog";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPostsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Knowledge Centre`,
    description: post.excerpt,
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // Related articles
  const otherPosts = blogPostsData.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-24 pb-20 bg-[#0B0D0F]">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7ADB3] hover:text-[#B89A63] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Knowledge Centre</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#667582] mb-6">
          <Badge variant="bronze">{post.category}</Badge>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#B89A63]" />
            <span>{post.publishedDate}</span>
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#B89A63]" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed mb-8 font-light pb-8 border-b border-[#2A3035]">
          {post.excerpt}
        </p>

        {/* Author Bio Bar */}
        <div className="flex items-center justify-between py-4 border-b border-[#2A3035] text-xs">
          <div>
            <span className="text-[#B89A63] font-mono block">
              {post.authorNamePlaceholder}
            </span>
            <span className="text-[#667582] block text-[11px]">
              {post.authorRole}
            </span>
          </div>

          <span className="text-[10px] font-mono text-[#667582] uppercase tracking-wider bg-[#15191D] px-2.5 py-1 border border-[#2A3035]">
            GG TECHNICAL BRIEFING
          </span>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full my-10 bg-[#15191D] border border-[#2A3035] overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="space-y-10 text-sm sm:text-base text-[#F3F1EC]/90 font-light leading-relaxed">
          {post.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-normal text-[#F3F1EC] pt-4">
                {section.heading}
              </h2>

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-[#A7ADB3] leading-relaxed">
                  {para}
                </p>
              ))}

              {section.callout && (
                <div className="my-6 p-5 bg-[#15191D] border-l-2 border-[#B89A63] text-sm text-[#F3F1EC] font-normal italic">
                  &ldquo;{section.callout}&rdquo;
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Article Tags */}
        <div className="mt-12 pt-6 border-t border-[#2A3035]">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-3.5 h-3.5 text-[#B89A63]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#667582] mr-2">
              Topic Tags:
            </span>
            {post.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 text-xs font-mono bg-[#15191D] border border-[#2A3035] text-[#A7ADB3]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Other Related Articles */}
      {otherPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#2A3035]">
          <h3 className="text-lg font-light text-[#F3F1EC] mb-6">
            Related Technical Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
