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
  Boxes,
  Truck,
  Building2,
  Home,
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
  title: "Building Construction Services | GG Construction Co.",
  description:
    "Explore practical building construction services from GG Construction Co. specializing in residential homes, 3–4 floor apartments, shops, small offices, and renovations up to 4–5 floors.",
};

export default function ServicesPage() {
  const residentialService =
    servicesData.find((s) => s.slug === "residential-construction") || servicesData[0];
  const constructionTestimonials = testimonialsData
    .filter((t) => t.division === "Building Construction")
    .slice(0, 2);
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
        "Preparing a clear, itemized construction estimate with stage-wise milestone schedules and material specifications.",
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
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* 1. Hero & Division Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Building Construction Services
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Practical Building Construction (Up to 4–5 Floors)
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            GG Construction Co. undertakes building construction for residential homes, independent apartments, commercial shops, and small offices. Backed by our primary materials supply business, we ensure dependable cement, steel, and masonry execution with attentive on-site supervision.
          </p>
        </div>
      </section>

      {/* 2. Flagship Feature: Residential & Commercial Building */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#15191D] border border-[#2A3035] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px] bg-[#1D2227]">
              <Image
                src={residentialService.heroImage}
                alt={residentialService.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#15191D]" />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="bronze">CORE BUILDING WORK</Badge>
              </div>
              <div className="absolute bottom-4 left-4 z-10 font-mono text-xs text-[#F3F1EC] bg-[#0B0D0F]/85 px-3 py-1 border border-[#2A3035]">
                UP TO 4–5 FLOORS &bull; HONEST SUPERVISION
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B89A63] block mb-2">
                  RESIDENTIAL & COMMERCIAL BUILDINGS
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-4">
                  {residentialService.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-6">
                  {residentialService.overview}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#2A3035]/60 mb-6">
                  {residentialService.capabilities.slice(0, 4).map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F3F1EC]">
                      <CheckCircle2 className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#2A3035] flex items-center justify-between gap-4">
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

      {/* 3. Practical Construction Principles */}
      <section className="py-20 bg-[#15191D]/40 border-y border-[#2A3035] mb-24">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block">
                Construction Standards
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#F3F1EC] leading-tight">
                Quality RCC Framing, Sound Masonry & Attentive Site Supervision
              </h2>
              <p className="text-sm text-[#A7ADB3] leading-relaxed">
                A building&apos;s durability comes from proper concrete compaction, sufficient water curing, clean rebar placement, and good damp-proofing. We focus on getting these fundamentals right on every project.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] flex items-start gap-3 text-xs">
                  <ShieldCheck className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                  <p className="text-[#A7ADB3]">
                    <strong className="text-[#F3F1EC]">Dedicated Curing Timelines:</strong> Ensuring mandatory 14 to 21-day continuous water curing for slabs and columns to achieve complete design strength.
                  </p>
                </div>
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035] flex items-start gap-3 text-xs">
                  <Compass className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                  <p className="text-[#A7ADB3]">
                    <strong className="text-[#F3F1EC]">Damp-Proofing Protection:</strong> Plinth-level DPC barriers and terrace membrane waterproofing to prevent moisture seepage into living areas.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#15191D] border border-[#2A3035] p-8 sm:p-10 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] pb-3 border-b border-[#2A3035]">
                Core Site Checkpoints
              </h3>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                Practical checks conducted by our on-site supervisors during each construction stage:
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035]">
                  <span className="text-[#B89A63] block font-semibold mb-1">CONCRETE MIXING</span>
                  <span className="text-[#A7ADB3] text-[11px]">Strict water-cement ratio and mechanical vibration</span>
                </div>
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035]">
                  <span className="text-[#B89A63] block font-semibold mb-1">STEEL COVER BLOCKS</span>
                  <span className="text-[#A7ADB3] text-[11px]">Ensuring proper concrete cover around rebar</span>
                </div>
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035]">
                  <span className="text-[#B89A63] block font-semibold mb-1">BRICKWORK PLUMB</span>
                  <span className="text-[#A7ADB3] text-[11px]">True vertical alignment and uniform mortar joints</span>
                </div>
                <div className="p-3 bg-[#0B0D0F] border border-[#2A3035]">
                  <span className="text-[#B89A63] block font-semibold mb-1">TERRACE WATERPROOF</span>
                  <span className="text-[#A7ADB3] text-[11px]">Ponding water test for 72 hours before tiling</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Complete Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Building Services"
          title="Our Construction Services"
          description="Specialized services for residential homes, independent floors, commercial shops, small offices, renovations, and site coordination."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* 5. Strategic Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Practical Advantages"
          title="Why Build With GG Construction Co."
          description="Clear benefits that save time, avoid material delays, and ensure sound building quality."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Boxes className="w-5 h-5 text-[#B89A63] mb-3" />
            <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
              In-House Materials Supply
            </h4>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Our primary materials business supplies cement, steel, bricks, and sand directly, avoiding site delays.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Home className="w-5 h-5 text-[#B89A63] mb-3" />
            <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
              Low-Rise Building Focus
            </h4>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Specialized in realistic construction up to 4–5 floors: residential homes, builder floors, and shops.
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <ShieldCheck className="w-5 h-5 text-[#B89A63] mb-3" />
            <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
              Stage-Wise Payments
            </h4>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Transparent payment milestones linked to completed civil stages (foundation, slabs, brickwork, plaster).
            </p>
          </div>

          <div className="p-6 bg-[#15191D] border border-[#2A3035]">
            <Compass className="w-5 h-5 text-[#B89A63] mb-3" />
            <h4 className="text-base font-medium text-[#F3F1EC] mb-2">
              Direct Accessibility
            </h4>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              Speak directly with our team and supervisors whenever you have a query about your building.
            </p>
          </div>
        </div>
      </section>

      {/* 6. The 6-Stage Process */}
      <section className="py-20 bg-[#15191D]/30 border-y border-[#2A3035] mb-24">
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

      {/* 7. Construction Testimonials */}
      {constructionTestimonials.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Client Feedback"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {constructionTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>
      )}

      {/* 8. Construction FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Building Construction FAQs"
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

      {/* 9. Final Conversion CTA */}
      <CTA
        eyebrow="Construction Enquiries"
        title="Planning a Building Project?"
        description="Discuss your plot dimensions, building requirements, or renovation plans with GG Construction Co. Call +91 98110 34825 or send an enquiry."
        primaryCtaText="Enquire Now"
        primaryCtaHref="/contact"
        secondaryCtaText="Call +91 98110 34825"
        secondaryCtaHref="tel:+919811034825"
        showContacts={true}
      />
    </div>
  );
}
