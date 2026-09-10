import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Maximize2, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { projectsData } from "@/data/projects";

export default function FeaturedProjects() {
  const apexProject = projectsData.find((p) => p.slug === "apex-commercial-tower") || projectsData[0];
  const zenithProject = projectsData.find((p) => p.slug === "zenith-logistics-park") || projectsData[1];
  const sereneProject = projectsData.find((p) => p.slug === "serene-villas-phase1") || projectsData[2];

  return (
    <section className="py-20 md:py-28 bg-[#15191D]/35 border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="Proven Delivery"
          title="Featured Architectural & Engineering Portfolio"
          description="A curated selection of landmark commercial towers, superflat logistics warehouses, and bespoke residences delivered under our unified engineering framework."
          action={
            <Button href="/projects" variant="outline" size="sm">
              <span>View Full Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          }
        />

        {/* 1. Landmark Hero Project: Apex Commercial Centre (Wide Editorial Layout) */}
        <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden mb-8 group hover:border-[#B89A63]/60 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[480px] bg-[#1D2227] overflow-hidden">
              <Image
                src={apexProject.heroImage}
                alt={apexProject.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/25 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <Badge variant="bronze">{apexProject.sectorLabel}</Badge>
                <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-[#0B0D0F]/85 text-[#F3F1EC] border border-[#2A3035]">
                  {apexProject.status} &bull; {apexProject.year}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-[#F3F1EC]">
                <div className="flex items-center gap-1.5 drop-shadow">
                  <MapPin className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span className="text-[11px] font-medium">{apexProject.location}</span>
                </div>
                <span className="font-mono text-xs text-[#B89A63] bg-[#0B0D0F]/90 px-2 py-0.5 border border-[#2A3035]">
                  {apexProject.builtUpArea}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89A63] block mb-2">
                  COMMERCIAL LANDMARK
                </span>

                <h3 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                  <Link href={`/projects/${apexProject.slug}`}>
                    {apexProject.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#A7ADB3] mb-6 leading-relaxed">
                  {apexProject.subtitle}
                </p>

                <div className="space-y-4 pt-4 border-t border-[#2A3035]/60 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1 font-semibold">
                      Engineering Highlight
                    </span>
                    <p className="text-xs text-[#F3F1EC] leading-relaxed">
                      {apexProject.engineeringHighlights[0]?.description}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1 font-semibold">
                      Timeline & Verification
                    </span>
                    <span className="text-xs font-mono text-[#A7ADB3]">
                      Executed in {apexProject.timeline} &bull; Client: {apexProject.clientTypePlaceholder}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2A3035] flex items-center justify-between">
                <Button
                  href={`/projects/${apexProject.slug}`}
                  variant="primary"
                  size="sm"
                >
                  <span>Project Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>

                <span className="text-[10px] font-mono text-[#667582]">
                  POST-TENSIONED SLABS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Twin Asymmetric Projects Grid: Zenith Logistics & Serene Meadow Estates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Zenith Logistics */}
          <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden group hover:border-[#B89A63]/60 transition-colors flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] bg-[#1D2227] overflow-hidden">
                <Image
                  src={zenithProject.heroImage}
                  alt={zenithProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <Badge variant="bronze">{zenithProject.sectorLabel}</Badge>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-[#0B0D0F]/80 text-[#F3F1EC] border border-[#2A3035]">
                    {zenithProject.builtUpArea}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-1.5 text-xs text-[#A7ADB3] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span>{zenithProject.location}</span>
                </div>

                <h3 className="text-xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                  <Link href={`/projects/${zenithProject.slug}`}>
                    {zenithProject.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-4">
                  {zenithProject.subtitle}
                </p>

                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] text-[11px] text-[#A7ADB3]">
                  <span className="text-[#B89A63] font-semibold block uppercase tracking-wider text-[10px] mb-0.5">
                    FM-2 Superflat Floors:
                  </span>
                  Laser-screed steel-fiber reinforced concrete with zero joint curling.
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between">
              <Link
                href={`/projects/${zenithProject.slug}`}
                className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63]" />
              </Link>
              <span className="text-[10px] font-mono text-[#667582]">{zenithProject.year}</span>
            </div>
          </div>

          {/* Serene Meadow Estates */}
          <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden group hover:border-[#B89A63]/60 transition-colors flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] bg-[#1D2227] overflow-hidden">
                <Image
                  src={sereneProject.heroImage}
                  alt={sereneProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <Badge variant="slate">{sereneProject.sectorLabel}</Badge>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-[#0B0D0F]/80 text-[#F3F1EC] border border-[#2A3035]">
                    {sereneProject.builtUpArea}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-1.5 text-xs text-[#A7ADB3] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span>{sereneProject.location}</span>
                </div>

                <h3 className="text-xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                  <Link href={`/projects/${sereneProject.slug}`}>
                    {sereneProject.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-4">
                  {sereneProject.subtitle}
                </p>

                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] text-[11px] text-[#A7ADB3]">
                  <span className="text-[#B89A63] font-semibold block uppercase tracking-wider text-[10px] mb-0.5">
                    Acoustic & Waterproofing:
                  </span>
                  Triple-layer crystalline waterproofing and post-tensioned cantilever balconies.
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between">
              <Link
                href={`/projects/${sereneProject.slug}`}
                className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63]" />
              </Link>
              <span className="text-[10px] font-mono text-[#667582]">{sereneProject.year}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
