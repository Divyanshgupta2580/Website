import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/data/blog";
import Badge from "@/components/ui/Badge";

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export default function BlogCard({ post, className = "" }: BlogCardProps) {
  return (
    <article
      className={`group bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1D2227]">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/30 to-transparent" />

          <div className="absolute top-4 left-4 z-10">
            <Badge variant="bronze">{post.category}</Badge>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-[11px] font-mono text-[#667582] mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#B89A63]" />
              <span>{post.publishedDate}</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#B89A63]" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-light text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors mb-3 line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="focus:outline-none">
              {post.title}
            </Link>
          </h3>

          <p className="text-xs text-[#A7ADB3] leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-3 border-t border-[#2A3035] flex items-center justify-between">
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-2 transition-colors focus-visible:ring-1 focus-visible:ring-[#B89A63]"
        >
          <span>Read Technical Analysis</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <span className="text-[10px] text-[#667582] font-mono">
          INSIGHTS
        </span>
      </div>
    </article>
  );
}
