import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/services";
import Badge from "@/components/ui/Badge";

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <article
      className={`group bg-white border border-[#D5D4D0] hover:border-[#18324A] transition-all duration-300 flex flex-col justify-between rounded-none overflow-hidden ${className}`}
    >
      <div>
        {/* Strong Rectangular Image Area */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8E6E1] border-b border-[#D5D4D0]">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="orange">{service.badge}</Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#18324A] group-hover:text-[#D96B27] transition-colors mb-2.5 leading-snug">
            <Link href={`/services/${service.slug}`} className="focus:outline-none">
              {service.title}
            </Link>
          </h3>

          <p className="text-[#66717A] text-sm leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          <ul className="space-y-1.5 pt-3 border-t border-[#D5D4D0] text-xs text-[#20272D]">
            {service.capabilities.slice(0, 2).map((cap, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D96B27] flex-shrink-0" />
                <span className="line-clamp-1">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#18324A] group-hover:text-[#D96B27] transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
