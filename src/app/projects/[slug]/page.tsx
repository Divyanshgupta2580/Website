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
    title: `${project.title} | GG Construction Co.`,
    description: `${project.subtitle}. Practical low-rise building construction by GG Construction Co.`,
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
    <div className="pt-24 pb-20 bg-[#F4F2EE]">
      {/* 1. Back Link Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#66717A] hover:text-[#D96B27] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects Portfolio</span>
        </Link>
      </div>

      {/* 2. Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="orange">{project.sectorLabel}</Badge>
          {project.isRepresentativePlaceholder && (
            <span className="px-2.5 py-0.5 text-xs uppercase font-bold tracking-wider bg-[#F3D8C7] text-[#D96B27] border border-[#D96B27]/30">
              Representative Example
            </span>
          )}
          <span className="px-2.5 py-0.5 text-xs uppercase font-bold tracking-wider bg-white text-[#18324A] border border-[#D5D4D0] shadow-sm">
            Status: {project.status}
          </span>
          <span className="text-xs font-semibold text-[#66717A]">
            Delivered: {project.year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-4">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[#66717A] max-w-3xl leading-relaxed">
          {project.subtitle}
        </p>
      </section>

      {/* 3. Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-white border border-[#D5D4D0] shadow-sm">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18324A]/40 via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* 4. Project Metadata Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white border border-[#D5D4D0] rounded-2xl sm:rounded-[22px] shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-xs divide-y sm:divide-y-0 sm:divide-x divide-[#D5D4D0]">
            <div className="pt-2 sm:pt-0 sm:pr-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                Location
              </span>
              <span className="text-[#18324A] font-bold block">
                {project.location}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                Scale
              </span>
              <span className="text-[#18324A] font-bold block">
                {project.floors || "Low-Rise"}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                Built-up Area
              </span>
              <span className="text-[#18324A] font-bold block">
                {project.builtUpArea}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                Execution Timeline
              </span>
              <span className="text-[#18324A] font-bold block">
                {project.timeline}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                Client Type
              </span>
              <span className="text-[#D96B27] font-bold text-xs block">
                {project.clientTypePlaceholder}
              </span>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                Project Classification
              </span>
              <span className="text-[#D96B27] font-bold text-xs block">
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
              <span className="text-xs uppercase tracking-widest font-bold text-[#D96B27] block mb-2">
                Project Narrative
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18324A] mb-4">
                Executive Overview
              </h2>
              <p className="text-base text-[#66717A] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Requirements & Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-[#D5D4D0] rounded-2xl shadow-sm">
                <span className="text-xs uppercase tracking-wider font-bold text-[#D96B27] block mb-2">
                  Project Requirements
                </span>
                <p className="text-sm text-[#66717A] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 bg-white border border-[#D96B27]/40 rounded-2xl shadow-sm">
                <span className="text-xs uppercase tracking-wider font-bold text-[#D96B27] block mb-2">
                  Construction Approach
                </span>
                <p className="text-sm text-[#66717A] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Scope of Construction Work */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#18324A] mb-4 pb-2 border-b border-[#D5D4D0]">
                Scope of Construction Work
              </h3>
              <ul className="space-y-2.5 text-sm text-[#66717A]">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#D96B27] flex-shrink-0 mt-0.5" />
                    <span className="text-[#20272D] font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Itemized Specifications & Structural Metrics */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#18324A] mb-4 pb-2 border-b border-[#D5D4D0]">
                Construction Specifications &amp; Standards
              </h3>
              <div className="border border-[#D5D4D0] divide-y divide-[#D5D4D0] text-sm shadow-sm rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 p-3.5 bg-white">
                  <span className="text-[#66717A] font-medium">Structural System</span>
                  <span className="text-[#18324A] font-bold">Reinforced Cement Concrete (RCC) Frame</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 bg-[#F4F2EE]">
                  <span className="text-[#66717A] font-medium">Masonry System</span>
                  <span className="text-[#18324A] font-bold">Standard Clay Bricks / AAC Blocks with Mortar Curing</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 bg-white">
                  <span className="text-[#66717A] font-medium">Reinforcement Steel</span>
                  <span className="text-[#18324A] font-bold">Fe 500D Grade High-Yield Strength TMT Rebars</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 bg-[#F4F2EE]">
                  <span className="text-[#66717A] font-medium">Cement Selection</span>
                  <span className="text-[#18324A] font-bold">Standard PPC / OPC 43 for Structural Work</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 bg-white">
                  <span className="text-[#66717A] font-medium">Quality Protocol</span>
                  <span className="text-[#18324A] font-bold">Regular Slump Checks, Cube Tests &amp; Level Verification</span>
                </div>
              </div>
            </div>

            {/* 7. Key Project Outcomes */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#18324A] mb-4 pb-2 border-b border-[#D5D4D0]">
                Project Delivery Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-[#D5D4D0] rounded-xl shadow-sm">
                  <Award className="w-5 h-5 text-[#D96B27] mb-2" />
                  <span className="text-[#18324A] font-bold block mb-1">Schedule Coordination</span>
                  <p className="text-[#66717A]">Planned execution across structural, masonry, and finishing milestones.</p>
                </div>
                <div className="p-4 bg-white border border-[#D5D4D0] rounded-xl shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#D96B27] mb-2" />
                  <span className="text-[#18324A] font-bold block mb-1">Site Supervision</span>
                  <p className="text-[#66717A]">Continuous on-site coordination ensuring construction quality and safety.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Practical Construction Highlights */}
            <div className="bg-white border border-[#D5D4D0] rounded-2xl sm:rounded-[22px] shadow-sm p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#D96B27] mb-6 pb-2 border-b border-[#D5D4D0]">
                Construction &amp; Planning Highlights
              </h3>
              <div className="space-y-6">
                {project.engineeringHighlights.map((hl, i) => (
                  <div key={i} className="pb-4 border-b border-[#D5D4D0] last:border-b-0 last:pb-0">
                    <span className="text-sm font-bold text-[#18324A] block mb-1">
                      {hl.title}
                    </span>
                    <p className="text-xs text-[#66717A] leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Structural Specifications & Components */}
            <div className="bg-white border border-[#D5D4D0] rounded-2xl sm:rounded-[22px] shadow-sm p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#18324A] mb-4 pb-2 border-b border-[#D5D4D0]">
                Structural Specifications &amp; Components
              </h3>
              <ul className="space-y-2.5 text-xs text-[#66717A]">
                <li className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#D96B27]" />
                  <span>Fe 500D Grade Reinforcement TMT Rebars</span>
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#D96B27]" />
                  <span>Standard PPC / OPC Structural Cement</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D96B27]" />
                  <span>Integral Waterproofing &amp; Plinth DPC Barriers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D96B27]" />
                  <span>Quality Graded Coarse Aggregates &amp; River Sand</span>
                </li>
              </ul>
            </div>

            {/* Architectural & Functional Features */}
            <div className="bg-white border border-[#D5D4D0] rounded-2xl sm:rounded-[22px] shadow-sm p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#18324A] mb-4 pb-2 border-b border-[#D5D4D0]">
                Functional Features
              </h3>
              <ul className="space-y-2 text-xs text-[#66717A]">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D96B27] rounded-full" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Box */}
            <div className="p-6 bg-white border border-[#D96B27]/40 rounded-2xl shadow-sm text-center">
              <h4 className="text-sm font-bold text-[#18324A] mb-2">
                Need Similar Building Work?
              </h4>
              <p className="text-xs text-[#66717A] mb-4">
                Consult with our team regarding project feasibility, floor planning, and preliminary construction estimates.
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
            eyebrow="Visual Records"
            title="Representative Project Photos"
            description="Representative visual records of low-rise building construction, structural framing, masonry, and finishes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] bg-white border border-[#D5D4D0] rounded-2xl shadow-sm overflow-hidden group"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18324A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white">
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
            eyebrow="Other Examples"
            title="Related Project Examples"
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
        eyebrow="Start Your Project"
        title="Plan Your Building Construction With Us"
        description="Connect with our team to discuss your residential or commercial low-rise construction requirements, structural specifications, and site schedule."
        primaryCtaText="GET A QUOTE"
        primaryCtaHref={`/get-a-quote?project=${project.slug}`}
        secondaryCtaText="Contact Our Office"
        secondaryCtaHref="/contact"
        showContacts={true}
      />
    </div>
  );
}
