import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, ShieldCheck, ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/ui/CTA";
import { servicesData, ServiceItem } from "@/data/services";
import { projectsData } from "@/data/projects";
import { testimonialsData } from "@/data/testimonials";

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
    title: `${service.title} | Construction Services | GG Construction Co.`,
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

  // Relevant testimonial
  const contextualTestimonial =
    testimonialsData.find((t) => t.category === "Residential Construction") ||
    testimonialsData[0];

  return (
    <div className="pt-24 pb-20 bg-[#F4F2EE]">
      {/* 1. Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#66717A] hover:text-[#D96B27] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Construction Services</span>
        </Link>
      </div>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative min-h-[420px] lg:min-h-[500px] w-full overflow-hidden bg-[#18324A] border border-[#D5D4D0] shadow-sm flex items-end p-6 sm:p-12">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18324A] via-[#18324A]/70 to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="orange">{service.badge}</Badge>
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                BUILDING CONSTRUCTION
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8">
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
                href={`/contact?subject=${encodeURIComponent(
                  `Enquiry regarding ${service.title}`
                )}`}
                variant="outline"
                size="md"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white"
              >
                Discuss Construction Scope
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Service Statistics Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white border border-[#D5D4D0] rounded-xl shadow-xs p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs divide-y sm:divide-y-0 sm:divide-x divide-[#D5D4D0]">
            <div className="pt-2 sm:pt-0 sm:pr-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                STANDARDS COMPLIANCE
              </span>
              <span className="text-[#18324A] font-bold text-sm block">
                IS 456 &bull; NBC Guidelines
              </span>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                STRUCTURAL SCALE
              </span>
              <span className="text-[#D96B27] font-bold text-sm block">
                Low-Rise (Up to 4–5 Floors)
              </span>
            </div>
            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                QUALITY SUPERVISION
              </span>
              <span className="text-[#18324A] font-bold text-sm block">
                Direct Site Oversight
              </span>
            </div>
            <div className="pt-2 sm:pt-0 sm:pl-4">
              <span className="text-xs uppercase font-bold text-[#66717A] block mb-1">
                CLIENT ASSURANCE
              </span>
              <span className="text-[#D96B27] font-bold text-sm block">
                Direct Project Accessibility
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Overview & Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D96B27] block">
              Service Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18324A]">
              Overview &amp; Execution Standards
            </h2>
            <p className="text-base text-[#66717A] leading-relaxed">
              {service.overview}
            </p>

            <div className="p-4 bg-white border border-[#D5D4D0] rounded-xl shadow-xs flex items-start gap-3 text-xs">
              <ShieldCheck className="w-5 h-5 text-[#D96B27] flex-shrink-0 mt-0.5" />
              <p className="text-[#66717A] leading-snug">
                All structural work, reinforcement placement, and concrete casting adheres to IS 456 concrete standards and NBC building safety guidelines.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#D5D4D0] rounded-xl shadow-xs p-6 sm:p-8">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#18324A] mb-6 pb-2 border-b border-[#D5D4D0]">
              Core Capabilities
            </h3>
            <ul className="space-y-4">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#66717A]">
                  <CheckCircle2 className="w-5 h-5 text-[#D96B27] flex-shrink-0 mt-0.5" />
                  <span className="text-[#20272D] font-medium leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Benefits Matrix */}
      <section className="py-16 bg-white border-y border-[#D5D4D0] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Benefits"
            title="Why Clients Choose GG Construction Co."
            description="Practical building construction backed by genuine local experience across Rohini, Pitampura, and Delhi, transparent communication, and dedicated site coordination."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-[#F4F2EE] border border-[#D5D4D0] p-6 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#D96B27] block mb-2">
                    BENEFIT // 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#18324A] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#66717A] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Project Workflow"
          title="How We Execute Your Build"
          description="A structured 4-step process from planning and structural estimates to site execution and handover."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white border border-[#D5D4D0] rounded-xl shadow-xs p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-[#D96B27] block mb-3">
                  {step.stepNumber}
                </span>
                <h3 className="text-base font-bold text-[#18324A] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#66717A] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D5D4D0]">
                <span className="text-xs uppercase tracking-wider text-[#66717A] block mb-2 font-bold">
                  Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-[#66717A]">
                  {step.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#D96B27] rounded-full" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            eyebrow="Project Examples"
            title="Projects Utilizing This Service"
            description="Explore low-rise building examples illustrating this construction service."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((proj) => (
              <ProjectCard key={proj.slug} project={proj} />
            ))}
          </div>
        </section>
      )}

      {/* 8. Contextual Testimonial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D96B27] block mb-3 text-center">
            REPRESENTATIVE CLIENT FEEDBACK
          </span>
          <TestimonialCard testimonial={contextualTestimonial} />
        </div>
      </section>

      {/* 9. Service FAQs */}
      {service.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            eyebrow="Clarifications"
            title={`${service.title} FAQs`}
            align="center"
          />

          <div className="bg-white border border-[#D5D4D0] rounded-xl shadow-xs p-6 sm:p-10">
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

      {/* 10. Service CTA */}
      <CTA
        eyebrow="Start Your Build"
        title={`Plan Your ${service.title} With Us`}
        description="Connect with our team to review your building plans and obtain a realistic construction estimate."
        primaryCtaText="Request Project Estimate"
        primaryCtaHref={`/get-a-quote?service=${service.slug}`}
        secondaryCtaText="Contact Construction Team"
        secondaryCtaHref={`/contact?subject=${encodeURIComponent(
          `Consultation: ${service.title}`
        )}`}
        showContacts={true}
      />
    </div>
  );
}
