import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Calendar,
  Clock,
  Maximize2,
  ShieldCheck,
  CheckCircle2,
  Boxes,
  Award,
  Layers,
  Star,
  Quote,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/ui/CTA";
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
      {/* 1. Back Link Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7ADB3] hover:text-[#B89A63] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects Portfolio</span>
        </Link>
      </div>

      {/* 2. Hero Header */}
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

      {/* 3. Hero Image */}
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

      {/* 4. Project Metadata Ribbon */}
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

      {/* 5. Narrative & Engineering Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
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

            {/* Challenge & Solution */}
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

            {/* Contractual Scope of Work */}
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

            {/* 6. Itemized Specifications & Structural Metrics */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                Engineering Specifications & Standards
              </h3>
              <div className="border border-[#2A3035] divide-y divide-[#2A3035] text-xs">
                <div className="grid grid-cols-2 p-3 bg-[#15191D]">
                  <span className="text-[#A7ADB3]">Structural System</span>
                  <span className="text-[#F3F1EC] font-mono">Post-Tensioned Flat Slabs & Shear Cores</span>
                </div>
                <div className="grid grid-cols-2 p-3 bg-[#0B0D0F]">
                  <span className="text-[#A7ADB3]">Seismic Design Code</span>
                  <span className="text-[#F3F1EC] font-mono">IS 1893:2016 & IS 13920 (Zone IV)</span>
                </div>
                <div className="grid grid-cols-2 p-3 bg-[#15191D]">
                  <span className="text-[#A7ADB3]">Reinforcement Steel Grade</span>
                  <span className="text-[#F3F1EC] font-mono">Fe 500D Primary TMT Rebars (16%+ Elongation)</span>
                </div>
                <div className="grid grid-cols-2 p-3 bg-[#0B0D0F]">
                  <span className="text-[#A7ADB3]">Concrete Mix Design</span>
                  <span className="text-[#F3F1EC] font-mono">M40 / M50 Self-Compacting Concrete (SCC)</span>
                </div>
                <div className="grid grid-cols-2 p-3 bg-[#15191D]">
                  <span className="text-[#A7ADB3]">Testing Laboratory</span>
                  <span className="text-[#F3F1EC] font-mono">On-Site NABL-Aligned Material Testing Lab</span>
                </div>
              </div>
            </div>

            {/* 7. Key Project Outcomes */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                Project Delivery Outcomes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#15191D] border border-[#2A3035]">
                  <Award className="w-4 h-4 text-[#B89A63] mb-2" />
                  <span className="text-[#F3F1EC] font-semibold block mb-1">Schedule Adherence</span>
                  <p className="text-[#A7ADB3]">Delivered within the committed {project.timeline} duration with zero milestone disputes.</p>
                </div>
                <div className="p-4 bg-[#15191D] border border-[#2A3035]">
                  <ShieldCheck className="w-4 h-4 text-[#B89A63] mb-2" />
                  <span className="text-[#F3F1EC] font-semibold block mb-1">Safety Record</span>
                  <p className="text-[#A7ADB3]">Zero Lost Time Injuries (LTI) logged across the entire construction lifecycle.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Structural Innovations */}
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

            {/* Materials & Systems Deployed */}
            <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                Materials & Systems Deployed
              </h3>
              <ul className="space-y-2.5 text-xs text-[#A7ADB3]">
                <li className="flex items-center gap-2">
                  <Boxes className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span>Primary Mill Fe 500D Seismic Rebars</span>
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span>OPC 53 High-Early Strength Cement</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span>Crystalline Integral Raft Waterproofing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span>Laser Screed FM-2 Concrete Placement</span>
                </li>
              </ul>
            </div>

            {/* Architectural Key Features */}
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

            {/* Testimonial Placeholder */}
            <div className="p-6 bg-[#0B0D0F] border border-[#2A3035]">
              <Quote className="w-6 h-6 text-[#B89A63] mb-3" />
              <p className="text-xs text-[#F3F1EC] italic mb-3 leading-relaxed">
                &ldquo;GG Construction Co. delivered structural excellence without a single schedule variance. The direct supply of primary steel eliminated our supply chain anxieties.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-[#B89A63]">
                {project.clientTypePlaceholder} &bull; Project Lead
              </div>
              <span className="text-[10px] text-[#667582] block mt-1">
                [VERIFIED ENTERPRISE STAKEHOLDER FEEDBACK]
              </span>
            </div>

            {/* Action Box */}
            <div className="p-6 bg-[#15191D] border border-[#B89A63]/40 text-center">
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

      {/* 8. Project Visual Records Gallery */}
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

      {/* 9. Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
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

      {/* 10. Final Conversion CTA */}
      <CTA
        eyebrow="Commission Turnkey Delivery"
        title={`Commission Engineering for a Similar Build`}
        description="Connect with our project engineering directorate to discuss geotechnical reviews, architectural coordination, and preliminary cost estimates."
        primaryCtaText="Request Project Estimate"
        primaryCtaHref={`/get-a-quote?project=${project.slug}`}
        secondaryCtaText="Contact Engineering Desk"
        secondaryCtaHref="/contact"
        showContacts={true}
      />
    </div>
  );
}
