import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react";
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
      className={`group bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-300 flex flex-col overflow-hidden ${className}`}
    >
      {/* Project Image Container with Scrim */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#1D2227]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Editorial Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/30 to-transparent" />

        {/* Top Badges Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <Badge variant="bronze">{project.sectorLabel}</Badge>
          <span
            className={`px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider border ${
              project.status === "Completed"
                ? "bg-[#0B0D0F]/80 text-[#F3F1EC] border-[#2A3035]"
                : "bg-[#B89A63]/20 text-[#B89A63] border-[#B89A63]/40"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Bottom Location Indicator inside Image */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#F3F1EC] z-10">
          <div className="flex items-center gap-1.5 drop-shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#B89A63]" />
            <span className="text-[11px] font-medium tracking-wide text-[#F3F1EC] line-clamp-1">
              {project.location}
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#A7ADB3] drop-shadow-md">
            {project.builtUpArea}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-light text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors mb-2">
            <Link href={`/projects/${project.slug}`} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs text-[#A7ADB3] leading-relaxed line-clamp-2 mb-4">
            {project.subtitle}
          </p>
        </div>

        <div className="pt-4 border-t border-[#2A3035] flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-2 transition-colors focus-visible:ring-1 focus-visible:ring-[#B89A63]"
          >
            <span>Project Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-[11px] font-mono text-[#667582]">
            {project.year}
          </span>
        </div>
      </div>
    </article>
  );
}
