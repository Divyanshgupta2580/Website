import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { projectsData } from "@/data/projects";

export default function FeaturedProjects() {
  const leadProject =
    projectsData.find((p) => p.slug === "residential-building-4-floors") || projectsData[0];
  const commercialProject =
    projectsData.find((p) => p.slug === "commercial-building-4-floors") || projectsData[1];
  const familyResidence =
    projectsData.find((p) => p.slug === "family-residence-3-floors") || projectsData[2];

  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          sectionNumber="03"
          eyebrow="PROJECTS"
          title="SELECTED CONSTRUCTION WORK"
          description="Construction experience across Rohini, Pitampura and nearby areas of Delhi. The visual records below represent our typical low-rise building construction scale for residential homes, independent floors, and commercial premises."
          action={
            <Button href="/projects" variant="outline" size="sm" className="border-[#18324A] text-[#18324A] hover:bg-[#18324A] hover:text-white">
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          }
        />

        {/* 1. Large Featured Project Plate (Dominant Visual) */}
        <div className="bg-white border border-[#D5D4D0] rounded-xl overflow-hidden mb-8 group hover:border-[#18324A] transition-all shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Large Project Image Column */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] bg-[#E8E6E1] overflow-hidden">
              <Image
                src={leadProject.heroImage}
                alt={`${leadProject.title} [Representative Example]`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />

              {/* Technical Overlay Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 bg-[#18324A] text-white text-[11px] font-bold uppercase tracking-wider rounded">
                  {leadProject.sectorLabel}
                </span>
                <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-white/95 text-[#18324A] border border-[#D5D4D0] rounded">
                  {leadProject.floors}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 bg-white/95 px-3 py-1 border border-[#D5D4D0] rounded text-[#18324A] font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#D96B27]" />
                  <span>Rohini / Delhi Area</span>
                </div>
                <span className="text-[10px] font-bold text-[#66717A] bg-white/95 px-2 py-1 border border-[#D5D4D0] rounded">
                  Representative Visual Record
                </span>
              </div>
            </div>

            {/* Clean Project Metadata Column */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#D96B27]">
                    RESIDENTIAL CONSTRUCTION
                  </span>
                  <span className="text-[10px] font-bold uppercase text-[#66717A] bg-[#E8E6E1] px-2 py-0.5 rounded">
                    ROHINI
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18324A] mb-3 group-hover:text-[#D96B27] transition-colors leading-tight">
                  <Link href={`/projects/${leadProject.slug}`}>
                    {leadProject.title}
                  </Link>
                </h3>

                <p className="text-xs font-bold uppercase tracking-wider text-[#66717A] mb-4">
                  LOW-RISE BUILDING &bull; G+3 FLOORS
                </p>

                <p className="text-sm text-[#66717A] mb-6 leading-relaxed">
                  {leadProject.subtitle}. RCC column and beam framed structure with quality red brick masonry walls, disciplined water curing, and complete utility conduits.
                </p>

                <div className="space-y-2 pt-4 border-t border-[#D5D4D0] mb-6 text-xs text-[#20272D]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D96B27]" />
                    <span>Framed RCC Structure for G+3 Floors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D96B27]" />
                    <span>Red Brick Masonry &amp; Internal Plaster</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D96B27]" />
                    <span>Disciplined 14–21 Day Concrete Curing</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#D5D4D0] flex items-center justify-between">
                <Link
                  href={`/projects/${leadProject.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D96B27] hover:text-[#B9551D] transition-colors"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-[11px] font-mono font-bold text-[#66717A]">
                  RCC FRAME &bull; BRICKWORK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Supporting Project Images (2-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Supporting Project 1: Commercial */}
          <div className="bg-white border border-[#D5D4D0] rounded-xl overflow-hidden group hover:border-[#18324A] transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative aspect-[16/10] bg-[#E8E6E1] overflow-hidden border-b border-[#D5D4D0]">
                <Image
                  src={commercialProject.heroImage}
                  alt={`${commercialProject.title} [Representative Example]`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-0.5 bg-[#18324A] text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    COMMERCIAL
                  </span>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-white text-[#18324A] border border-[#D5D4D0] rounded">
                    ROHINI / DELHI
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 z-10">
                  <span className="text-[10px] font-bold text-[#66717A] bg-white/95 px-2 py-0.5 border border-[#D5D4D0] rounded">
                    Representative Visual Record
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#D96B27] block mb-1">
                  COMMERCIAL CONSTRUCTION
                </span>

                <h3 className="text-xl font-extrabold text-[#18324A] mb-1 group-hover:text-[#D96B27] transition-colors">
                  <Link href={`/projects/${commercialProject.slug}`}>
                    {commercialProject.title}
                  </Link>
                </h3>

                <p className="text-xs font-bold uppercase tracking-wider text-[#66717A] mb-3">
                  LOW-RISE COMMERCIAL &bull; 4 FLOORS
                </p>

                <p className="text-sm text-[#66717A] leading-relaxed mb-4">
                  {commercialProject.subtitle}. Wide-span column layouts planned for ground retail shops and flexible upper office floors.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-[#D5D4D0] mt-auto">
              <Link
                href={`/projects/${commercialProject.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#18324A] group-hover:text-[#D96B27] transition-colors"
              >
                <span>VIEW PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-[10px] font-bold text-[#66717A] uppercase">
                G+3 Floors
              </span>
            </div>
          </div>

          {/* Supporting Project 2: Family Residence */}
          <div className="bg-white border border-[#D5D4D0] rounded-xl overflow-hidden group hover:border-[#18324A] transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative aspect-[16/10] bg-[#E8E6E1] overflow-hidden border-b border-[#D5D4D0]">
                <Image
                  src={familyResidence.heroImage}
                  alt={`${familyResidence.title} [Representative Example]`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-0.5 bg-[#D96B27] text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    RESIDENTIAL
                  </span>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-white text-[#18324A] border border-[#D5D4D0] rounded">
                    PITAMPURA / DELHI
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 z-10">
                  <span className="text-[10px] font-bold text-[#66717A] bg-white/95 px-2 py-0.5 border border-[#D5D4D0] rounded">
                    Representative Visual Record
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#D96B27] block mb-1">
                  RESIDENTIAL CONSTRUCTION
                </span>

                <h3 className="text-xl font-extrabold text-[#18324A] mb-1 group-hover:text-[#D96B27] transition-colors">
                  <Link href={`/projects/${familyResidence.slug}`}>
                    {familyResidence.title}
                  </Link>
                </h3>

                <p className="text-xs font-bold uppercase tracking-wider text-[#66717A] mb-3">
                  INDEPENDENT HOUSE &bull; 3 FLOORS
                </p>

                <p className="text-sm text-[#66717A] leading-relaxed mb-4">
                  {familyResidence.subtitle}. Deep foundation footings, tested steel reinforcement, and masonry partitions for family living.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-[#D5D4D0] mt-auto">
              <Link
                href={`/projects/${familyResidence.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#18324A] group-hover:text-[#D96B27] transition-colors"
              >
                <span>VIEW PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-[10px] font-bold text-[#66717A] uppercase">
                G+2 Floors
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
