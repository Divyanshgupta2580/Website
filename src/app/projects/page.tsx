"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, ArrowUpRight, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/cards/ProjectCard";
import StatBlock from "@/components/ui/StatBlock";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/ui/CTA";
import { projectsData, ProjectSector } from "@/data/projects";
import { companyData } from "@/data/company";
import { faqsData } from "@/data/faqs";

const filterTabs: { id: string; label: string; sector?: ProjectSector }[] = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential", sector: "residential" },
  { id: "commercial", label: "Commercial", sector: "commercial" },
  { id: "mixed-use", label: "Mixed Use", sector: "mixed-use" },
  { id: "renovation", label: "Renovation", sector: "renovation" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const flagshipProject =
    projectsData.find((p) => p.slug === "residential-building-4-floors") || projectsData[0];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.sector === activeFilter);

  const projectFaqs = faqsData.filter((f) => f.category === "Construction");

  return (
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#D96B27]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18324A]">
              SELECTED PROJECTS
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-6">
            Low-Rise Building Projects (Up to 4–5 Floors)
          </h1>
          <p className="text-base sm:text-lg text-[#66717A] leading-relaxed">
            Representative project examples illustrating our construction work across Rohini, Pitampura, and nearby areas of Delhi for residential homes, builder floors, shops, and small offices.
          </p>
        </div>
      </section>

      {/* 2. Flagship Project Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white border border-[#D5D4D0] rounded-none overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px] bg-[#E8E6E1]">
              <Image
                src={flagshipProject.heroImage}
                alt={flagshipProject.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="orange">{flagshipProject.sectorLabel}</Badge>
              </div>
              <div className="absolute bottom-4 left-4 z-10 text-xs font-bold text-[#18324A] bg-white/95 px-3 py-1.5 border border-[#D5D4D0] rounded-none">
                {flagshipProject.floors} &bull; {flagshipProject.location}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D96B27] block mb-2">
                  Representative Project Example
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#18324A] mb-2 hover:text-[#D96B27] transition-colors">
                  <Link href={`/projects/${flagshipProject.slug}`}>
                    {flagshipProject.title}
                  </Link>
                </h2>
                <p className="text-sm text-[#66717A] mb-6 leading-relaxed">
                  {flagshipProject.subtitle}
                </p>

                <div className="space-y-4 pt-4 border-t border-[#D5D4D0] mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#66717A] block mb-1 font-bold">
                      Construction Feature
                    </span>
                    <p className="text-xs text-[#20272D] leading-relaxed">
                      {flagshipProject.engineeringHighlights[0]?.description}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#66717A] block mb-1 font-bold">
                      Scope &amp; Timeline
                    </span>
                    <span className="text-xs font-semibold text-[#66717A]">
                      Built in {flagshipProject.timeline} &bull; Concrete Frame &amp; Brick Masonry
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#D5D4D0] flex items-center justify-between">
                <Button
                  href={`/projects/${flagshipProject.slug}`}
                  variant="primary"
                  size="sm"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>

                <span className="text-xs font-bold text-[#D96B27]">
                  {flagshipProject.year} &bull; COMPLETED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Neutral Capability Blocks */}
      <section className="py-16 bg-white border-y border-[#D5D4D0] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Construction Scale"
            title="Practical Building Capabilities"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatBlock
              index={0}
              label="Building Scale"
              value="Up to 4–5 Floors"
              helper="Residential homes, builder floors, shops, and small offices"
            />
            <StatBlock
              index={1}
              label="Regional Coverage"
              value={companyData.metrics.regionalFocus}
              helper="Serving local residential and commercial building sites"
            />
            <StatBlock
              index={2}
              label="Key Locations"
              value="Rohini & Pitampura"
              helper="Extensive building construction experience across North-West Delhi"
            />
            <StatBlock
              index={3}
              label="Jobsite Oversight"
              value="Daily Supervision"
              helper="Close monitoring of concrete curing, rebar placement, and masonry"
            />
          </div>
        </Container>
      </section>

      {/* 4. Interactive Sector Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D5D4D0]">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <Filter className="w-4 h-4 text-[#D96B27] flex-shrink-0 mr-2" />
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-none text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all border ${
                  activeFilter === tab.id
                    ? "bg-[#D96B27] text-white border-[#D96B27]"
                    : "bg-white text-[#66717A] border-[#D5D4D0] hover:text-[#18324A] hover:border-[#66717A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-semibold text-[#66717A]">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </span>
        </div>
      </section>

      {/* 5. Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-white border border-[#D5D4D0]">
            <p className="text-sm text-[#66717A]">No projects found for the selected filter.</p>
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

      {/* 6. Project Portfolio FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="FAQS"
          title="Building Construction FAQs"
          align="center"
        />

        <div className="bg-white border border-[#D5D4D0] rounded-none p-6 sm:p-10">
          <Accordion>
            {projectFaqs.map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                title={faq.question}
                defaultOpen={idx === 0}
              >
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7. Conversion CTA */}
      <CTA
        eyebrow="CONTACT US"
        title="Planning a Construction Project?"
        description="Speak with our team regarding your plot size, building plan, or construction requirements in Rohini, Pitampura, and nearby Delhi areas. We provide honest estimates and dependable execution."
        primaryCtaText="GET A QUOTE"
        primaryCtaHref="/get-a-quote"
        secondaryCtaText="Call +91 98110 34825"
        secondaryCtaHref="tel:+919811034825"
        showContacts={true}
      />
    </div>
  );
}
