"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Filter, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import { projectsData, ProjectSector } from "@/data/projects";

const filterTabs: { id: string; label: string; sector?: ProjectSector }[] = [
  { id: "all", label: "All Sectors" },
  { id: "commercial", label: "Commercial", sector: "commercial" },
  { id: "industrial", label: "Industrial & Logistics", sector: "industrial" },
  { id: "residential", label: "Residential", sector: "residential" },
  { id: "renovation", label: "Renovation & Retrofit", sector: "renovation" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.sector === activeFilter);

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Civil & Structural Portfolio
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Engineering Landmark Structures Across India
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Every project in our portfolio represents rigorous seismic detailing, precision material batching, and turnkey scheduling certainty.
          </p>
        </div>
      </section>

      {/* Interactive Sector Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#2A3035] scrollbar-none">
          <Filter className="w-4 h-4 text-[#B89A63] flex-shrink-0 mr-2" />
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all border ${
                activeFilter === tab.id
                  ? "bg-[#B89A63] text-[#0B0D0F] border-[#B89A63] font-semibold"
                  : "bg-[#15191D] text-[#A7ADB3] border-[#2A3035] hover:text-[#F3F1EC] hover:border-[#667582]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-[#15191D] border border-[#2A3035]">
            <p className="text-sm text-[#A7ADB3]">No projects found for the selected sector filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={idx < 2}
              />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#2A3035] bg-[#15191D]/50">
          <h2 className="text-2xl font-light text-[#F3F1EC] mb-3">
            Have a Specific Project Scope in Mind?
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            Our engineering desk can schedule an on-site geotechnical inspection and preliminary structural feasibility review.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/get-a-quote" variant="primary" size="md">
              Request Project Estimate
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact Engineering Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
