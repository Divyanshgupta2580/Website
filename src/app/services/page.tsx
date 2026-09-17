import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  MapPin,
  Home,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import ServiceCard from "@/components/cards/ServiceCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/ui/CTA";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { testimonialsData } from "@/data/testimonials";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Building Construction Services | GG Construction Co.",
  description:
    "Explore practical building construction services from GG Construction Co. specializing in residential homes, builder floors, shops, small offices, and renovations up to 4–5 floors across Rohini, Pitampura, and Delhi.",
};

export default function ServicesPage() {
  const residentialService =
    servicesData.find((s) => s.slug === "residential-construction") || servicesData[0];
  const constructionTestimonials = testimonialsData.slice(0, 2);
  const constructionFaqs = faqsData.filter((f) => f.category === "Construction");

  const processSteps = [
    {
      number: "01",
      title: "Plot & Requirement Review",
      description:
        "Initial discussion of your plot dimensions, architectural layout plans, and required room/floor configurations.",
    },
    {
      number: "02",
      title: "Itemized Cost Estimate",
      description:
        "Preparing a clear, itemized construction estimate with stage-wise milestone schedules and structural specifications.",
    },
    {
      number: "03",
      title: "Foundation & Plinth Casting",
      description:
        "Trench excavation, foundation footing cage placement, and plinth beam casting with damp-proof course (DPC) installation.",
    },
    {
      number: "04",
      title: "RCC Frame & Slab Casting",
      description:
        "Column and beam casting, formwork shuttering, and roof slab pouring with disciplined concrete vibration and curing.",
    },
    {
      number: "05",
      title: "Brick Masonry & Conduit Work",
      description:
        "First-class red clay brick or AAC block masonry walls, concealed electrical piping, and plumbing line installations.",
    },
    {
      number: "06",
      title: "Plaster, Waterproofing & Handover",
      description:
        "Smooth cement wall plastering, terrace waterproofing, flooring base, and final walkthrough with the property owner.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      {/* 1. Hero & Service Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#D96B27]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96B27]">
              BUILDING CONSTRUCTION SERVICES
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#18324A] leading-tight mb-5">
            Practical Building Construction (Up to 4–5 Floors)
          </h1>
          <p className="text-base sm:text-lg text-[#66717A] leading-relaxed">
            GG Construction Co. undertakes building construction for residential homes, builder floors, commercial shops, and small offices. With genuine local experience across Rohini, Pitampura, and nearby areas, we ensure dependable structural execution and attentive on-site supervision.
          </p>
        </div>
      </section>

      {/* 2. Flagship Feature: Residential & Commercial Building */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white border border-[#D5D4D0] rounded-sm overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] bg-[#E8E6E1]">
              <Image
                src={residentialService.heroImage}
                alt={residentialService.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="orange">CORE BUILDING WORK</Badge>
              </div>
              <div className="absolute bottom-4 left-4 z-10 text-xs font-bold text-[#18324A] bg-white/95 px-3 py-1.5 border border-[#D5D4D0] rounded-xs shadow-xs">
                UP TO 4–5 FLOORS &bull; HONEST SUPERVISION
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#D96B27] block mb-2">
                  RESIDENTIAL &amp; COMMERCIAL BUILDINGS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18324A] mb-3">
                  {residentialService.title}
                </h2>
                <p className="text-sm text-[#66717A] leading-relaxed mb-6">
                  {residentialService.overview}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#D5D4D0] mb-6">
                  {residentialService.capabilities.slice(0, 4).map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#20272D] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#D96B27] flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#D5D4D0] flex items-center justify-between gap-4">
                <Button
                  href={`/services/${residentialService.slug}`}
                  variant="primary"
                  size="sm"
                >
                  <span>Explore Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>

                <Button
                  href="/contact"
                  variant="outline"
                  size="sm"
                >
                  Discuss Your Build
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Practical Construction Standards */}
      <section className="py-16 bg-white border-y border-[#D5D4D0] mb-20">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#D96B27] block">
                Construction Standards
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18324A] leading-tight">
                Quality RCC Framing, Sound Masonry &amp; Attentive Site Supervision
              </h2>
              <p className="text-sm sm:text-base text-[#66717A] leading-relaxed">
                A building&apos;s durability comes from proper concrete compaction, sufficient water curing, clean rebar placement, and good damp-proofing. We focus on getting these fundamentals right on every project.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-[#F4F2EE] border border-[#D5D4D0] rounded-sm flex items-start gap-3 text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#D96B27] flex-shrink-0 mt-0.5" />
                  <p className="text-[#20272D]">
                    <strong className="text-[#18324A]">Dedicated Curing Timelines:</strong> Ensuring mandatory continuous water curing for slabs and columns to achieve complete design strength.
                  </p>
                </div>
                <div className="p-3.5 bg-[#F4F2EE] border border-[#D5D4D0] rounded-sm flex items-start gap-3 text-xs">
                  <HardHat className="w-4 h-4 text-[#D96B27] flex-shrink-0 mt-0.5" />
                  <p className="text-[#20272D]">
                    <strong className="text-[#18324A]">Damp-Proofing Protection:</strong> Plinth-level DPC barriers and terrace waterproofing to prevent moisture seepage.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F4F2EE] border border-[#D5D4D0] p-7 sm:p-9 rounded-sm space-y-5">
              <h3 className="text-xs uppercase tracking-[0.18em] font-extrabold text-[#18324A] pb-3 border-b border-[#D5D4D0]">
                Core Site Checkpoints
              </h3>
              <p className="text-xs text-[#66717A] leading-relaxed">
                Practical checks conducted by our on-site supervisors during each construction stage:
              </p>
              <div className="grid grid-cols-2 gap-3.5 text-xs">
                <div className="p-3 bg-white border border-[#D5D4D0] rounded-sm shadow-xs">
                  <span className="text-[#18324A] block font-bold mb-1">CONCRETE MIXING</span>
                  <span className="text-[#66717A] text-[11px]">Strict water-cement ratio and mechanical vibration</span>
                </div>
                <div className="p-3 bg-white border border-[#D5D4D0] rounded-sm shadow-xs">
                  <span className="text-[#18324A] block font-bold mb-1">STEEL PLACEMENT</span>
                  <span className="text-[#66717A] text-[11px]">Ensuring proper concrete cover and rebar spacing</span>
                </div>
                <div className="p-3 bg-white border border-[#D5D4D0] rounded-sm shadow-xs">
                  <span className="text-[#18324A] block font-bold mb-1">BRICKWORK PLUMB</span>
                  <span className="text-[#66717A] text-[11px]">True vertical alignment and uniform mortar joints</span>
                </div>
                <div className="p-3 bg-white border border-[#D5D4D0] rounded-sm shadow-xs">
                  <span className="text-[#18324A] block font-bold mb-1">TERRACE WATERPROOF</span>
                  <span className="text-[#66717A] text-[11px]">Ponding water test for 72 hours before tiling</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Complete Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeading
          eyebrow="Building Services"
          title="Our Construction Services"
          description="Specialized services for residential homes, builder floors, commercial shops, small offices, renovations, and structural improvement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* 5. 6-Stage Process */}
      <section className="py-16 bg-white border-y border-[#D5D4D0] mb-20">
        <Container size="default">
          <SectionHeading
            eyebrow="Workflow"
            title="Building Construction Steps"
            description="Our systematic approach ensuring quality workmanship and clear communication from ground-break to handover."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-6 bg-[#F4F2EE] border border-[#D5D4D0] rounded-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-extrabold text-[#18324A] block mb-2">
                    {step.number}
                  </span>
                  <h4 className="text-base font-bold text-[#18324A] mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#66717A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Construction FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Building Construction FAQs"
          align="center"
        />

        <div className="bg-white border border-[#D5D4D0] p-6 sm:p-8 rounded-sm shadow-xs">
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

      {/* 7. Final Conversion CTA */}
      <CTA
        eyebrow="GET IN TOUCH"
        title="Planning a Construction Project?"
        description="Tell us about your building requirement and we'll get in touch."
        primaryCtaText="GET A QUOTE"
        primaryCtaHref="/get-a-quote"
        secondaryCtaText="CONTACT US"
        secondaryCtaHref="/contact"
        showContacts={true}
      />
    </div>
  );
}
