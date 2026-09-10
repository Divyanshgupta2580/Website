import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "@/data/services";
import Badge from "@/components/ui/Badge";

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <article
      className={`group bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/70 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <Badge variant="bronze">{service.badge}</Badge>
          <span className="text-[11px] font-mono text-[#667582] uppercase tracking-wider">
            CIVIL // ENG
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-light text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors mb-3">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        <p className="text-[#A7ADB3] text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        <div className="pt-4 border-t border-[#2A3035]/60 mb-6">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
            Core Scope
          </span>
          <ul className="space-y-2">
            {service.capabilities.slice(0, 3).map((cap, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#A7ADB3]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A63] flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-[#2A3035] flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-2 transition-colors focus-visible:ring-1 focus-visible:ring-[#B89A63]"
        >
          <span>Detailed Capabilities</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <span className="text-[10px] text-[#667582] font-mono">
          IS // NBC COMPLIANT
        </span>
      </div>
    </article>
  );
}
