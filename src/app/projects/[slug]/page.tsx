import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Clock, Maximize2, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { projectsData } from "@/data/projects";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: `${project.subtitle}. Delivered by GG Construction Co. under certified engineering standards.`,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  // Related projects
  const relatedProjects = projectsData.filter((p) =>
    project.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <div className="pt-24 pb-20 bg-[#0B0D0F]">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7ADB3] hover:text-[#B89A63] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects Portfolio</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="bronze">{project.sectorLabel}</Badge>
          <span className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-[#15191D] text-[#A7ADB3] border border-[#2A3035]">
            STATUS: {project.status}
          </span>
          <span className="text-[11px] font-mono text-[#667582]">
            DELIVERED: {project.year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-4">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[#A7ADB3] max-w-3xl leading-relaxed">
          {project.subtitle}
        </p>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-[#15191D] border border-[#2A3035]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* Project Meta Metrics Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-xs divide-y sm:divide-y-0 sm:divide-x divide-[#2A3035]">
            <div className="pt-2 sm:pt-0 sm:pr-4">
              <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1">
                Location
              </span>
              <span className="text-[#F3F1EC] font-medium block">
                {project.location}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1">
                Built-up Area
              </span>
              <span className="text-[#F3F1EC] font-mono font-medium block">
                {project.builtUpArea}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1">
                Execution Timeline
              </span>
              <span className="text-[#F3F1EC] font-mono font-medium block">
                {project.timeline}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1">
                Completion Year
              </span>
              <span className="text-[#F3F1EC] font-mono font-medium block">
                {project.year}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1">
                Client Entity
              </span>
              <span className="text-[#B89A63] font-mono text-[11px] block">
                {project.clientTypePlaceholder}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4">
              <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1">
                Contract Value
              </span>
              <span className="text-[#B89A63] font-mono text-[11px] block">
                {project.projectValuePlaceholder}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Engineering Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content: Overview, Challenge & Solution */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block mb-2">
                Project Narrative
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-4">
                Executive Overview
              </h2>
              <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#15191D] border border-red-900/30">
                <span className="text-[10px] uppercase tracking-wider font-mono text-red-400 block mb-2 font-semibold">
                  The Engineering Challenge
                </span>
                <p className="text-xs text-[#A7ADB3] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 bg-[#15191D] border border-[#B89A63]/30">
                <span className="text-[10px] uppercase tracking-wider font-mono text-[#B89A63] block mb-2 font-semibold">
                  The Engineering Solution
                </span>
                <p className="text-xs text-[#A7ADB3] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Scope of Work */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                Contractual Scope of Work
              </h3>
              <ul className="space-y-2.5 text-xs text-[#A7ADB3]">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                    <span className="text-[#F3F1EC] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar: Engineering Highlights & Key Features */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B89A63] mb-6 pb-2 border-b border-[#2A3035]">
                Structural & Engineering Innovations
              </h3>
              <div className="space-y-6">
                {project.engineeringHighlights.map((hl, i) => (
                  <div key={i} className="pb-4 border-b border-[#2A3035]/60 last:border-b-0 last:pb-0">
                    <span className="text-sm font-medium text-[#F3F1EC] block mb-1">
                      {hl.title}
                    </span>
                    <p className="text-xs text-[#A7ADB3] leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                Architectural Key Features
              </h3>
              <ul className="space-y-2 text-xs text-[#A7ADB3]">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B89A63] rounded-none" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-[#0B0D0F] border border-[#B89A63]/40 text-center">
              <h4 className="text-sm font-medium text-[#F3F1EC] mb-2">
                Need Similar Civil Capabilities?
              </h4>
              <p className="text-xs text-[#A7ADB3] mb-4">
                Consult with our engineering team regarding site feasibility and preliminary BOQ estimates.
              </p>
              <Button
                href={`/get-a-quote?project=${project.slug}`}
                variant="primary"
                size="sm"
                className="w-full"
              >
                Inquire on Similar Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Images */}
      {project.galleryImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            eyebrow="On-Site Documentation"
            title="Project Visual Records"
            description="High-resolution visual inspection of structural framing, MEP integration, and final facade finishes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] bg-[#15191D] border border-[#2A3035] overflow-hidden group"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} gallery photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[11px] font-mono text-[#B89A63]">
                    {project.title} &bull; Plate {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <SectionHeading
            eyebrow="Parallel Engineering"
            title="Related Project Case Studies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
