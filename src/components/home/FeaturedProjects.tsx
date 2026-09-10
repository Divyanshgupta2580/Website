import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import { projectsData } from "@/data/projects";

export default function FeaturedProjects() {
  // Select top 3 varied projects (commercial, industrial, residential)
  const featured = projectsData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#15191D]/40 border-t border-[#2A3035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proven Delivery"
          title="Featured Architectural & Engineering Portfolio"
          description="A selection of landmark commercial towers, superflat logistics warehouses, and bespoke residences delivered under our unified engineering framework."
          action={
            <Button href="/projects" variant="outline" size="sm">
              <span>View Full Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={idx === 0}
            />
          ))}
        </div>

        <div className="mt-12 text-center lg:hidden">
          <Button href="/projects" variant="outline" size="md">
            <span>Explore All Projects</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
