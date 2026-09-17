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
    title: `${post.title} | Construction Guides | GG Construction Co.`,
    description: post.excerpt,
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // Related articles
  const otherPosts = blogPostsData.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-24 pb-20 bg-[#F4F2EE]">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#66717A] hover:text-[#D96B27] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Construction Guides</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#66717A] mb-6">
          <Badge variant="orange">{post.category}</Badge>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>{post.publishedDate}</span>
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-[#66717A] leading-relaxed mb-8 pb-8 border-b border-[#D5D4D0]">
          {post.excerpt}
        </p>

        {/* Author Bio Bar */}
        <div className="flex items-center justify-between py-4 border-b border-[#D5D4D0] text-xs">
          <div>
            <span className="text-[#D96B27] font-bold block">
              {post.authorNamePlaceholder}
            </span>
            <span className="text-[#66717A] block text-xs">
              {post.authorRole}
            </span>
          </div>

          <span className="text-xs font-bold text-[#18324A] uppercase tracking-wider bg-white px-3 py-1 border border-[#D5D4D0] rounded-none">
            GG Construction Guide
          </span>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full my-10 bg-white border border-[#D5D4D0] rounded-none overflow-hidden">
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
        <div className="space-y-10 text-base text-[#20272D] leading-relaxed">
          {post.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#18324A] pt-4">
                {section.heading}
              </h2>

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-[#66717A] leading-relaxed">
                  {para}
                </p>
              ))}

              {section.callout && (
                <div className="my-6 p-5 bg-white border-l-4 border-[#D96B27] border-y border-r border-[#D5D4D0] text-sm text-[#18324A] font-medium rounded-none">
                  &ldquo;{section.callout}&rdquo;
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Article Tags */}
        <div className="mt-12 pt-6 border-t border-[#D5D4D0]">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-3.5 h-3.5 text-[#D96B27]" />
            <span className="text-xs uppercase font-semibold tracking-wider text-[#66717A] mr-2">
              Topic Tags:
            </span>
            {post.tags.map((tag, tIdx) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold bg-white border border-[#D5D4D0] text-[#18324A] rounded-none"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Other Related Articles */}
      {otherPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#D5D4D0]">
          <h3 className="text-xl font-bold text-[#18324A] mb-6">
            Related Construction Guides
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
