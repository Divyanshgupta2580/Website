import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Compass } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { servicesData } from "@/data/services";

export default function ServicesPreview() {
  const turnkeyService = servicesData.find((s) => s.slug === "turnkey-construction") || servicesData[0];
  const secondaryServices = servicesData.filter((s) => s.slug !== "turnkey-construction").slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="Division 01 // Civil Capabilities"
          title="Engineered Construction Services"
          description="From complex multi-acre logistics parks and commercial high-rises to turnkey EPC mandates, we deploy certified engineering teams and modern formwork to guarantee schedule adherence."
          action={
            <Button href="/services" variant="outline" size="sm">
              <span>All 9 Services</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          }
        />

        {/* Asymmetric Editorial Hero Service Card */}
        <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden mb-8 group hover:border-[#B89A63]/60 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Column */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[440px] bg-[#1D2227] overflow-hidden">
              <Image
                src={turnkeyService.heroImage}
                alt={turnkeyService.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-[#15191D]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#15191D]" />

              <div className="absolute top-4 left-4 z-10">
                <Badge variant="bronze">{turnkeyService.badge}</Badge>
              </div>

              <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] text-[#A7ADB3] bg-[#0B0D0F]/80 px-2 py-1 border border-[#2A3035]">
                IS 456 &bull; NBC 2016 COMPLIANT
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89A63] block mb-2">
                  FLAGSHIP CIVIL MANDATE
                </span>

                <h3 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-3 group-hover:text-[#B89A63] transition-colors">
                  <Link href={`/services/${turnkeyService.slug}`}>
                    {turnkeyService.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
                  {turnkeyService.overview}
                </p>

                <div className="pt-4 border-t border-[#2A3035]/60 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
                    Turnkey Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A7ADB3]">
                    {turnkeyService.capabilities.slice(0, 4).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A63] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2A3035] flex items-center justify-between gap-4">
                <Button
                  href={`/services/${turnkeyService.slug}`}
                  variant="primary"
                  size="sm"
                >
                  <span>Explore Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>

                <Button
                  href={`/get-a-quote?service=${turnkeyService.slug}`}
                  variant="outline"
                  size="sm"
                >
                  Request Estimate
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Asymmetric 3-Column Grid for Supporting Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {secondaryServices.map((service, idx) => (
            <div
              key={service.slug}
              className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B89A63]/60 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="slate">{service.badge}</Badge>
                  <span className="text-[10px] font-mono text-[#667582]">
                    CIVIL // 0{idx + 2}
                  </span>
                </div>

                <h3 className="text-xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-6 line-clamp-3">
                  {service.shortDescription}
                </p>

                <div className="pt-4 border-t border-[#2A3035]/60 mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-2 font-semibold">
                    Capabilities Snapshot
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#A7ADB3]">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#B89A63]" />
                        <span className="line-clamp-1">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A3035] flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Scope Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63]" />
                </Link>
                <span className="text-[10px] font-mono text-[#667582]">IS CODE</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
