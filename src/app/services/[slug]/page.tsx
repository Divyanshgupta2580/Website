import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, ShieldCheck, ArrowLeft, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { servicesData, ServiceItem } from "@/data/services";
import { projectsData } from "@/data/projects";

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Construction & Engineering`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  // Fetch related projects
  const relatedProjects = projectsData.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <div className="pt-24 pb-20 bg-[#0B0D0F]">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7ADB3] hover:text-[#B89A63] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Construction Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative min-h-[420px] lg:min-h-[500px] w-full overflow-hidden bg-[#15191D] border border-[#2A3035] flex items-end p-6 sm:p-12">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/60 to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="bronze">{service.badge}</Badge>
              <span className="text-[11px] font-mono text-[#667582] uppercase tracking-wider">
                CIVIL DIVISION // 01
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-4">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed mb-8">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href={`/get-a-quote?service=${service.slug}`}
                variant="primary"
                size="md"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                href={`/contact?division=construction&subject=${encodeURIComponent(
                  `Enquiry regarding ${service.title}`
                )}`}
                variant="outline"
                size="md"
              >
                Inquire Technical Scope
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block">
              Engineering Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC]">
              Technical Overview & Execution Standards
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed">
              {service.overview}
            </p>

            <div className="p-4 bg-[#15191D] border border-[#2A3035] flex items-start gap-3 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
              <p className="text-[#A7ADB3] leading-snug">
                All structural engineering, reinforcement detailing, and material execution adheres strictly to Indian Standards (IS 456, IS 1893, IS 13920) and NBC 2016 safety guidelines.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#15191D] border border-[#2A3035] p-6 sm:p-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-6 pb-2 border-b border-[#2A3035]">
              Core Technical Capabilities
            </h3>
            <ul className="space-y-4">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#A7ADB3]">
                  <CheckCircle2 className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F3F1EC] font-light leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Matrix */}
      <section className="py-16 bg-[#15191D]/30 border-y border-[#2A3035] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial & Technical Value"
            title="Strategic Benefits of Our Integrated Approach"
            description="How our unified engineering and materials infrastructure creates measurable client advantage."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-[#15191D] border border-[#2A3035] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#B89A63] block mb-2">
                    BENEFIT // 0{idx + 1}
                  </span>
                  <h3 className="text-base font-medium text-[#F3F1EC] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Execution Milestones"
          title="Service Delivery Lifecycle"
          description="A disciplined 4-stage engineering pathway with concrete deliverables at every milestone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#15191D] border border-[#2A3035] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-light font-mono text-[#B89A63] block mb-4">
                  {step.stepNumber}
                </span>
                <h3 className="text-base font-light text-[#F3F1EC] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A3035]/60">
                <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-2 font-semibold">
                  Deliverables
                </span>
                <ul className="space-y-1 text-[11px] text-[#A7ADB3]">
                  {step.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-[#B89A63] rounded-full" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            eyebrow="Proven Results"
            title="Projects Utilizing This Service"
            description="Explore delivered projects where this engineering methodology was deployed."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((proj) => (
              <ProjectCard key={proj.slug} project={proj} />
            ))}
          </div>
        </section>
      )}

      {/* Service FAQs */}
      {service.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            eyebrow="Technical Clarifications"
            title={`${service.title} FAQs`}
            align="center"
          />

          <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-10">
            <Accordion>
              {service.faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  id={`service-faq-${idx}`}
                  title={faq.question}
                  defaultOpen={idx === 0}
                >
                  <p>{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Service CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 border border-[#2A3035] bg-[#15191D]/50">
          <h2 className="text-2xl font-light text-[#F3F1EC] mb-3">
            Commission {service.title} for Your Site
          </h2>
          <p className="text-sm text-[#A7ADB3] max-w-xl mx-auto mb-6">
            Our engineering team will assess your site drawings and provide itemized BOQ estimates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href={`/get-a-quote?service=${service.slug}`}
              variant="primary"
              size="md"
            >
              Request Project Estimate
            </Button>
            <Button
              href={`/contact?division=construction&subject=${encodeURIComponent(
                `Consultation: ${service.title}`
              )}`}
              variant="outline"
              size="md"
            >
              Speak to Chief Engineer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
