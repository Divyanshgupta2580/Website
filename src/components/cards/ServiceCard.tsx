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
      className={`group bg-white border border-[#D5D4D0] hover:border-[#18324A] hover:shadow-md transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 rounded-xl shadow-xs ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="orange">{service.badge}</Badge>
          <span className="text-[11px] font-bold text-[#66717A] uppercase tracking-wider">
            BUILDING // CONST
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#18324A] group-hover:text-[#D96B27] transition-colors mb-2.5">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        <p className="text-[#66717A] text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        <div className="pt-4 border-t border-[#D5D4D0] mb-6">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#18324A] block mb-2.5">
            Core Scope
          </span>
          <ul className="space-y-2">
            {service.capabilities.slice(0, 3).map((cap, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#20272D]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D96B27] flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-[#D5D4D0] flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs uppercase tracking-wider font-bold text-[#18324A] group-hover:text-[#D96B27] inline-flex items-center gap-1 transition-colors"
        >
          <span>Detailed Capabilities</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        <span className="text-[10px] font-bold text-[#66717A] uppercase">
          Low-Rise Civil
        </span>
      </div>
    </article>
  );
}
