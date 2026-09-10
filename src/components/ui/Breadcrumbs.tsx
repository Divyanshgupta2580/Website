import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs font-mono uppercase tracking-wider text-[#A7ADB3] py-4 ${className}`}
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-[#B89A63] transition-colors focus-visible:ring-1 focus-visible:ring-[#B89A63]"
          >
            <Home className="w-3.5 h-3.5 text-[#B89A63]" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#667582]" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="text-[#F3F1EC] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#B89A63] transition-colors focus-visible:ring-1 focus-visible:ring-[#B89A63]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
