import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { projectsData } from "@/data/projects";

export default function FeaturedProjects() {
  const leadProject =
    projectsData.find((p) => p.slug === "residential-building-4-floors") || projectsData[0];
  const commercialProject =
    projectsData.find((p) => p.slug === "commercial-building-4-floors") || projectsData[1];
  const familyResidence =
    projectsData.find((p) => p.slug === "family-residence-3-floors") || projectsData[2];

  return (
    <section className="py-20 md:py-28 bg-[#15191D]/35 border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="Local Experience // Rohini & Pitampura"
          title="Selected Building Projects"
          description="GG Construction Co. has carried out construction work across Rohini, Pitampura and nearby areas of Delhi. The representative projects below illustrate our practical construction work for residential homes, independent floors, shops, and offices up to approximately 4–5 floors maximum."
          action={
            <Button href="/projects" variant="outline" size="sm">
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          }
        />

        {/* 1. Lead Project: Residential Building - 4 Floors */}
        <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden mb-8 group hover:border-[#B89A63]/60 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[480px] bg-[#1D2227] overflow-hidden">
              <Image
                src={leadProject.heroImage}
                alt={leadProject.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/25 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <Badge variant="bronze">{leadProject.sectorLabel}</Badge>
                <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-[#0B0D0F]/85 text-[#F3F1EC] border border-[#2A3035]">
                  {leadProject.status} &bull; {leadProject.floors}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-[#F3F1EC]">
                <div className="flex items-center gap-1.5 drop-shadow">
                  <MapPin className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span className="text-[11px] font-medium">{leadProject.location}</span>
                </div>
                <span className="font-mono text-xs text-[#B89A63] bg-[#0B0D0F]/90 px-2 py-0.5 border border-[#2A3035]">
                  {leadProject.builtUpArea}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89A63] block mb-2">
                  RESIDENTIAL BUILDING // 4 FLOORS
                </span>

                <h3 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                  <Link href={`/projects/${leadProject.slug}`}>
                    {leadProject.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#A7ADB3] mb-6 leading-relaxed">
                  {leadProject.subtitle}
                </p>

                <div className="space-y-4 pt-4 border-t border-[#2A3035]/60 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1 font-semibold">
                      Construction Feature
                    </span>
                    <p className="text-xs text-[#F3F1EC] leading-relaxed">
                      {leadProject.engineeringHighlights[0]?.description}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-1 font-semibold">
                      Scope & Timeline
                    </span>
                    <span className="text-xs font-mono text-[#A7ADB3]">
                      Built in {leadProject.timeline} &bull; Scope: Concrete Frame & Brickwork
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2A3035] flex items-center justify-between">
                <Button
                  href={`/projects/${leadProject.slug}`}
                  variant="primary"
                  size="sm"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>

                <span className="text-[10px] font-mono text-[#667582]">
                  RCC & MASONRY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Twin Projects Grid: Commercial Building & Family Residence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Commercial Building - 4 Floors */}
          <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden group hover:border-[#B89A63]/60 transition-colors flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] bg-[#1D2227] overflow-hidden">
                <Image
                  src={commercialProject.heroImage}
                  alt={commercialProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <Badge variant="bronze">{commercialProject.sectorLabel}</Badge>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-[#0B0D0F]/80 text-[#F3F1EC] border border-[#2A3035]">
                    {commercialProject.floors}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-1.5 text-xs text-[#A7ADB3] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span>{commercialProject.location}</span>
                </div>

                <h3 className="text-xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                  <Link href={`/projects/${commercialProject.slug}`}>
                    {commercialProject.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-4">
                  {commercialProject.subtitle}
                </p>

                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] text-[11px] text-[#A7ADB3]">
                  <span className="text-[#B89A63] font-semibold block uppercase tracking-wider text-[10px] mb-0.5">
                    Structural Framework:
                  </span>
                  Reinforced concrete column-beam design optimized for ground retail shops and upper offices.
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between">
              <Link
                href={`/projects/${commercialProject.slug}`}
                className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63]" />
              </Link>
              <span className="text-[10px] font-mono text-[#667582]">{commercialProject.year}</span>
            </div>
          </div>

          {/* Family Residence - 3 Floors */}
          <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden group hover:border-[#B89A63]/60 transition-colors flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] bg-[#1D2227] overflow-hidden">
                <Image
                  src={familyResidence.heroImage}
                  alt={familyResidence.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <Badge variant="slate">{familyResidence.sectorLabel}</Badge>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-[#0B0D0F]/80 text-[#F3F1EC] border border-[#2A3035]">
                    {familyResidence.floors}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-1.5 text-xs text-[#A7ADB3] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span>{familyResidence.location}</span>
                </div>

                <h3 className="text-xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                  <Link href={`/projects/${familyResidence.slug}`}>
                    {familyResidence.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-4">
                  {familyResidence.subtitle}
                </p>

                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] text-[11px] text-[#A7ADB3]">
                  <span className="text-[#B89A63] font-semibold block uppercase tracking-wider text-[10px] mb-0.5">
                    Masonry & Finishing:
                  </span>
                  Quality red brick construction, concealed plumbing/wiring conduits, and weather-resistant paint.
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between">
              <Link
                href={`/projects/${familyResidence.slug}`}
                className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63]" />
              </Link>
              <span className="text-[10px] font-mono text-[#667582]">{familyResidence.year}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
