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
      className={`group bg-white border border-[#D5D4D0] hover:border-[#18324A] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[22px] shadow-xs ${className}`}
    >
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8E6E1]">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-102"
          />

          <div className="absolute top-3 left-3 z-10">
            <Badge variant="orange">{post.category}</Badge>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-[11px] font-bold text-[#66717A] mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#D96B27]" />
              <span>{post.publishedDate}</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#D96B27]" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#18324A] group-hover:text-[#D96B27] transition-colors mb-2.5 line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="focus:outline-none">
              {post.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#66717A] leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-5 pt-3 border-t border-[#D5D4D0] flex items-center justify-between">
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs uppercase tracking-wider font-bold text-[#18324A] group-hover:text-[#D96B27] inline-flex items-center gap-1 transition-colors"
        >
          <span>Read Technical Note</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        <span className="text-[10px] font-bold text-[#66717A] uppercase">
          Delhi Construction
        </span>
      </div>
    </article>
  );
}
