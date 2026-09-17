import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
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
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          eyebrow="Local Experience // Rohini & Pitampura"
          title="Selected Building Projects"
          description="GG Construction Co. has carried out construction work across Rohini, Pitampura and nearby areas of Delhi. The representative projects below illustrate our practical construction work for residential homes, independent floors, shops, and offices up to approximately 4–5 floors maximum."
          action={
            <Button href="/projects" variant="outline" size="sm">
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          }
        />

        {/* 1. Large Editorial Lead Project */}
        <div className="bg-white border border-[#D5D4D0] rounded-sm overflow-hidden mb-8 group hover:border-[#18324A] transition-all shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Column */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] bg-[#E8E6E1] overflow-hidden">
              <Image
                src={leadProject.heroImage}
                alt={leadProject.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <Badge variant="orange">{leadProject.sectorLabel}</Badge>
                <span className="px-2.5 py-1 text-[11px] uppercase font-bold tracking-wider bg-white/95 text-[#18324A] border border-[#D5D4D0] rounded-xs shadow-xs">
                  {leadProject.floors}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 bg-white/95 px-3 py-1 border border-[#D5D4D0] rounded-xs shadow-xs text-[#18324A] font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#D96B27]" />
                  <span>{leadProject.location}</span>
                </div>
                <span className="font-mono text-xs font-bold text-[#18324A] bg-white/95 px-2.5 py-1 border border-[#D5D4D0] rounded-xs shadow-xs">
                  {leadProject.builtUpArea}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#D96B27]">
                    PROJECT TYPE: {leadProject.sectorLabel.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-bold text-[#66717A] bg-[#E8E6E1] px-2 py-0.5 rounded-xs">
                    Representative Scope
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18324A] mb-3 group-hover:text-[#D96B27] transition-colors">
                  <Link href={`/projects/${leadProject.slug}`}>
                    {leadProject.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#66717A] mb-6 leading-relaxed">
                  {leadProject.subtitle}
                </p>

                <div className="space-y-4 pt-5 border-t border-[#D5D4D0] mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#18324A] font-bold block mb-1.5">
                      Construction Scope
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#20272D]">
                      {leadProject.scope.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D96B27] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#D5D4D0]">
                    <span className="text-xs uppercase tracking-wider text-[#18324A] font-bold block mb-1">
                      Structural Method
                    </span>
                    <p className="text-xs text-[#66717A] leading-relaxed">
                      {leadProject.engineeringHighlights[0]?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#D5D4D0] flex items-center justify-between">
                <Button
                  href={`/projects/${leadProject.slug}`}
                  variant="primary"
                  size="sm"
                >
                  <span>Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>

                <span className="text-xs font-bold text-[#66717A] uppercase">
                  RCC FRAME &bull; BRICKWORK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Secondary Editorial Projects Grid (Commercial & Family Residence) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Commercial Building */}
          <div className="bg-white border border-[#D5D4D0] rounded-sm overflow-hidden group hover:border-[#18324A] transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative aspect-[16/10] bg-[#E8E6E1] overflow-hidden">
                <Image
                  src={commercialProject.heroImage}
                  alt={commercialProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <Badge variant="navy">{commercialProject.sectorLabel}</Badge>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-white text-[#18324A] border border-[#D5D4D0] rounded-xs shadow-xs">
                    {commercialProject.floors}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 z-10">
                  <div className="flex items-center gap-1.5 bg-white/95 px-2.5 py-1 border border-[#D5D4D0] rounded-xs shadow-xs text-xs text-[#18324A] font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#D96B27]" />
                    <span>{commercialProject.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-[#18324A] mb-2 group-hover:text-[#D96B27] transition-colors">
                  <Link href={`/projects/${commercialProject.slug}`}>
                    {commercialProject.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#66717A] leading-relaxed mb-4">
                  {commercialProject.subtitle}
                </p>

                <div className="p-3 bg-[#F4F2EE] border border-[#D5D4D0] rounded-sm text-xs text-[#20272D] mb-4">
                  <span className="text-[#18324A] font-bold block uppercase tracking-wider text-[10px] mb-1">
                    Construction Scope
                  </span>
                  {commercialProject.scope[0]}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-[#D5D4D0] mt-auto">
              <Link
                href={`/projects/${commercialProject.slug}`}
                className="text-xs uppercase tracking-wider font-bold text-[#18324A] hover:text-[#D96B27] inline-flex items-center gap-1 transition-colors"
              >
                <span>View Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[10px] font-bold text-[#66717A]">
                {commercialProject.builtUpArea}
              </span>
            </div>
          </div>

          {/* Family Residence */}
          <div className="bg-white border border-[#D5D4D0] rounded-sm overflow-hidden group hover:border-[#18324A] transition-all flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative aspect-[16/10] bg-[#E8E6E1] overflow-hidden">
                <Image
                  src={familyResidence.heroImage}
                  alt={familyResidence.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <Badge variant="orange">{familyResidence.sectorLabel}</Badge>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-white text-[#18324A] border border-[#D5D4D0] rounded-xs shadow-xs">
                    {familyResidence.floors}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 z-10">
                  <div className="flex items-center gap-1.5 bg-white/95 px-2.5 py-1 border border-[#D5D4D0] rounded-xs shadow-xs text-xs text-[#18324A] font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#D96B27]" />
                    <span>{familyResidence.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-[#18324A] mb-2 group-hover:text-[#D96B27] transition-colors">
                  <Link href={`/projects/${familyResidence.slug}`}>
                    {familyResidence.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#66717A] leading-relaxed mb-4">
                  {familyResidence.subtitle}
                </p>

                <div className="p-3 bg-[#F4F2EE] border border-[#D5D4D0] rounded-sm text-xs text-[#20272D] mb-4">
                  <span className="text-[#18324A] font-bold block uppercase tracking-wider text-[10px] mb-1">
                    Construction Scope
                  </span>
                  {familyResidence.scope[0]}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-[#D5D4D0] mt-auto">
              <Link
                href={`/projects/${familyResidence.slug}`}
                className="text-xs uppercase tracking-wider font-bold text-[#18324A] hover:text-[#D96B27] inline-flex items-center gap-1 transition-colors"
              >
                <span>View Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[10px] font-bold text-[#66717A]">
                {familyResidence.builtUpArea}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
