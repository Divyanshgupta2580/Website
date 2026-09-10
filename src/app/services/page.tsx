import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Compass,
  Layers,
  Cpu,
  Boxes,
  Truck,
  Building2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import ServiceCard from "@/components/cards/ServiceCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import StatBlock from "@/components/ui/StatBlock";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/ui/CTA";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { testimonialsData } from "@/data/testimonials";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Construction & Engineering Services | Turnkey Civil EPC",
  description:
    "Explore the 9 specialized civil construction services of GG Construction Co., including turnkey EPC contracting, commercial towers, industrial PEB, and seismic engineering.",
};

export default function ServicesPage() {
  const turnkeyService =
    servicesData.find((s) => s.slug === "turnkey-construction") || servicesData[0];
  const constructionTestimonials = testimonialsData
    .filter((t) => t.division === "Construction & Engineering")
    .slice(0, 2);
  const constructionFaqs = faqsData.filter((f) => f.category === "Construction");

  const processSteps = [
    {
      number: "01",
      title: "Geotechnical & Site Audit",
      description:
        "Topographical surveys, soil bore log analysis, and preliminary structural load calculations.",
    },
    {
      number: "02",
      title: "BIM 4D & Master Scheduling",
      description:
        "Full 3D architectural/structural modeling with CPM scheduling and municipal approvals roadmap.",
    },
    {
      number: "03",
      title: "Substructure Execution",
      description:
        "Piling, anchored diaphragm retention walls, and continuous high-density raft slab casting.",
    },
    {
      number: "04",
      title: "Superstructure & PEB Erection",
      description:
        "Aluminum system formwork, post-tensioned slabs, and pre-engineered structural steel framing.",
    },
    {
      number: "05",
      title: "Laboratory Auditing & MEP",
      description:
        "On-site concrete cube crushing tests, weld ultrasonic testing, and precision MEP rough-ins.",
    },
    {
      number: "06",
      title: "Snag Clearance & Handover",
      description:
        "Fire safety NOC clearance, Occupancy Certificate delivery, and digital as-built BIM handover.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* 1. Hero & Division Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Division 01 // Civil Engineering & Contracting
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Comprehensive Construction & Structural Engineering
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            From deep multi-level basement excavations in dense urban corridors to superflat logistics hubs and turnkey commercial complexes, we execute structural civil works backed by our dedicated in-house materials supply.
          </p>
        </div>
      </section>

      {/* 2. Flagship Feature: Turnkey Single-Point EPC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px] bg-[#1D2227]">
              <Image
                src={turnkeyService.heroImage}
                alt={turnkeyService.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#15191D]" />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="bronze">FLAGSHIP CAPABILITY</Badge>
              </div>
              <div className="absolute bottom-4 left-4 z-10 font-mono text-xs text-[#F3F1EC] bg-[#0B0D0F]/85 px-3 py-1 border border-[#2A3035]">
                IS 456 &bull; NBC 2016 COMPLIANT
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B89A63] block mb-2">
                  TURNKEY CONTRACT CERTAINTY
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-4">
                  {turnkeyService.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
                  {turnkeyService.overview}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#2A3035]/60 mb-6">
                  {turnkeyService.capabilities.slice(0, 4).map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F3F1EC]">
                      <CheckCircle2 className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
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
      </section>

      {/* 3. Engineering Coordination Feature (BIM 4D & MEP) */}
      <section className="py-20 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block">
                Engineering Coordination
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#F3F1EC] leading-tight">
                Virtual Design & Construction (VDC) with 3D BIM Clash Detection
              </h2>
              <p className="text-sm text-[#A7ADB3] leading-relaxed">
                Before a single cubic meter of concrete is placed on site, our structural and MEP engineers model every column, beam rebar envelope, duct, and plumbing sleeve in comprehensive 3D BIM coordination software.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] flex items-start gap-3 text-xs">
                  <Cpu className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                  <p className="text-[#A7ADB3]">
                    <strong className="text-[#F3F1EC]">Zero Rebar & Pipe Clashing:</strong> Identifies and resolves interference between heavy reinforcement cages and drainage pipelines virtually.
                  </p>
                </div>
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] flex items-start gap-3 text-xs">
                  <Compass className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                  <p className="text-[#A7ADB3]">
                    <strong className="text-[#F3F1EC]">Seismic Ductility Detailing:</strong> 100% strict adherence to IS 13920 seismic confinement tie spacing and development lengths.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#15191D] border border-[#2A3035] p-8 sm:p-10 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] pb-3 border-b border-[#2A3035]">
                On-Site Testing Laboratories Protocol
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                We establish dedicated, calibrated testing laboratories directly on each primary construction site:
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035]">
                  <span className="text-[#B89A63] block font-semibold mb-1">CONCRETE CUBES</span>
                  <span className="text-[#A7ADB3] text-[11px]">7-day & 28-day hydraulic compression crushing</span>
                </div>
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035]">
                  <span className="text-[#B89A63] block font-semibold mb-1">SLUMP VERIFICATION</span>
                  <span className="text-[#A7ADB3] text-[11px]">Workability checked on every transit mixer</span>
                </div>
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035]">
                  <span className="text-[#B89A63] block font-semibold mb-1">STEEL REBAR GAUGING</span>
                  <span className="text-[#A7ADB3] text-[11px]">Nominal mass per meter per IS 1786</span>
                </div>
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035]">
                  <span className="text-[#B89A63] block font-semibold mb-1">ULTRASONIC WELDS</span>
                  <span className="text-[#A7ADB3] text-[11px]">Non-destructive weld joint integrity checks</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Complete Services Grid (All 9 Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Specialized Capabilities"
          title="All 9 Construction & Engineering Services"
          description="Explore our complete scope from high-rise commercial structures and industrial PEBs to seismic retrofitting and site infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* 5. Metrics & Operational Scale */}
      <section className="py-16 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Proven Execution"
            title="Civil Capacity & Performance Telemetry"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatBlock
              index={0}
              label="Years in Civil Engineering"
              value={companyData.metrics.yearsInIndustry}
              helper="Over a decade of landmark structural delivery across India"
            />
            <StatBlock
              index={1}
              label="Projects Completed"
              value={companyData.metrics.completedProjects}
              helper="Commercial towers, logistics parks, and bespoke enclaves"
            />
            <StatBlock
              index={2}
              label="Active Workforce"
              value={companyData.metrics.activeWorkforce}
              helper="Licensed structural engineers, project managers, and technicians"
            />
            <StatBlock
              index={3}
              label="Safety Record"
              value="Zero LTI"
              helper={companyData.safetyRecordPlaceholder}
            />
          </div>
        </Container>
      </section>

      {/* 6. Strategic Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Institutional Advantage"
          title="Strategic Benefits of Single-Contract Civil Delivery"
          description="Why commercial developers and institutional operators choose our unified engineering model."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <ShieldCheck className="w-5 h-5 text-[#B89A63] mb-3" />
            <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
              Single-Point Contract Risk
            </h4>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              One contract, one point of executive contact, zero subcontractor blame shifting.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Boxes className="w-5 h-5 text-[#B89A63] mb-3" />
            <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
              In-House Raw Material Buffer
            </h4>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Sites never pause for regional cement or steel shortages thanks to direct mill allocations.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Compass className="w-5 h-5 text-[#B89A63] mb-3" />
            <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
              Seismic Zone IV & V Compliance
            </h4>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              High-ductility reinforcement detailing designed to safeguard life and structural assets.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Layers className="w-5 h-5 text-[#B89A63] mb-3" />
            <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
              Digital As-Built Dossiers
            </h4>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Complete CAD and 3D BIM models handed over for lifetime facilities management.
            </p>
          </div>
        </div>
      </section>

      {/* 7. The 6-Stage Engineering Process */}
      <section className="py-20 bg-[#15191D]/30 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <SectionHeading
            eyebrow="Methodology"
            title="The 6-Phase Construction Process"
            description="Our systematic engineering pathway guaranteeing schedule adherence and zero-defect handovers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-6 bg-[#15191D] border border-[#2A3035] flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-light font-mono text-[#B89A63] block mb-2">
                    {step.number}
                  </span>
                  <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Construction Testimonials */}
      {constructionTestimonials.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            eyebrow="Client Endorsements"
            title="What Civil Project Stakeholders Say"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {constructionTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>
      )}

      {/* 9. Construction FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Technical Clarity"
          title="Construction & Engineering FAQs"
          align="center"
        />

        <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-10">
          <Accordion>
            {constructionFaqs.map((faq, idx) => (
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

      {/* 10. Final Conversion CTA */}
      <CTA
        eyebrow="Commission Civil Engineering"
        title="Discuss Your Civil Project With Our Chief Engineer"
        description="Share your plot coordinates, structural drawings, or tender specifications for immediate engineering review and preliminary BOQ guidance."
        primaryCtaText="Request Project Estimate"
        primaryCtaHref="/get-a-quote?division=construction"
        secondaryCtaText="Contact Engineering Desk"
        secondaryCtaHref="/contact?division=construction"
        showContacts={true}
      />
    </div>
  );
}
