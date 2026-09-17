import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import Badge from "@/components/ui/Badge";

export interface ProjectCardProps {
  project: ProjectItem;
  priority?: boolean;
  className?: string;
}

export default function ProjectCard({
  project,
  priority = false,
  className = "",
}: ProjectCardProps) {
  return (
    <article
      className={`group bg-white border border-[#D5D4D0] hover:border-[#18324A] hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden rounded-xl shadow-xs ${className}`}
    >
      {/* Project Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#E8E6E1]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-102"
        />

        {/* Top Badges Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <Badge variant="orange">{project.sectorLabel}</Badge>
          <span className="px-2.5 py-1 text-[11px] uppercase font-bold bg-white text-[#18324A] border border-[#D5D4D0] rounded-lg shadow-xs">
            {project.status} &bull; {project.floors}
          </span>
        </div>

        {/* Bottom Location Indicator inside Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
          <div className="flex items-center gap-1.5 bg-white/95 px-2.5 py-1 border border-[#D5D4D0] rounded-lg shadow-xs text-[#18324A] font-bold">
            <MapPin className="w-3.5 h-3.5 text-[#D96B27]" />
            <span className="text-[11px] line-clamp-1">{project.location}</span>
          </div>
          <span className="text-[11px] font-mono font-bold bg-white/95 px-2 py-1 border border-[#D5D4D0] rounded-lg shadow-xs text-[#18324A]">
            {project.builtUpArea}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {project.isRepresentativePlaceholder && (
            <span className="text-[10px] font-bold uppercase text-[#B9551D] bg-[#F3D8C7] px-2 py-0.5 rounded-md mb-2.5 inline-block">
              Representative Example
            </span>
          )}

          <h3 className="text-xl font-bold text-[#18324A] group-hover:text-[#D96B27] transition-colors mb-2 leading-snug">
            <Link href={`/projects/${project.slug}`} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-[#66717A] leading-relaxed line-clamp-2 mb-4">
            {project.subtitle}
          </p>
        </div>

        <div className="pt-4 border-t border-[#D5D4D0] flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs uppercase tracking-wider font-bold text-[#18324A] group-hover:text-[#D96B27] inline-flex items-center gap-1 transition-colors"
          >
            <span>View Project Scope</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[11px] font-bold text-[#66717A]">
            {project.floors}
          </span>
        </div>
      </div>
    </article>
  );
}
