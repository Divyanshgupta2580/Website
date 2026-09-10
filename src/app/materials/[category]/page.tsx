import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Truck, ShieldCheck, CheckCircle2, AlertCircle, PackageCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MaterialCategoryCard from "@/components/cards/MaterialCategoryCard";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { materialsData, MaterialCategoryItem } from "@/data/materials";

interface MaterialCategoryPageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return materialsData.map((m) => ({
    category: m.slug,
  }));
}

export async function generateMetadata({ params }: MaterialCategoryPageProps): Promise<Metadata> {
  const cat = materialsData.find((m) => m.slug === params.category);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.title} | Bulk Building Materials Supply`,
    description: cat.subtitle,
  };
}

export default function MaterialCategoryDetailPage({ params }: MaterialCategoryPageProps) {
  const category = materialsData.find((m) => m.slug === params.category);
  if (!category) notFound();

  // Related categories
  const relatedCategories = materialsData.filter((m) =>
    category.relatedCategorySlugs.includes(m.slug)
  );

  return (
    <div className="pt-24 pb-20 bg-[#0B0D0F]">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/materials"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7ADB3] hover:text-[#B89A63] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Material Categories</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative min-h-[380px] lg:min-h-[440px] w-full overflow-hidden bg-[#15191D] border border-[#2A3035] flex items-end p-6 sm:p-12">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/70 to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="bronze">Bulk Supply Division</Badge>
              <span className="text-[11px] font-mono text-[#667582] uppercase tracking-wider">
                SUPPLY LINE // 03
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-4">
              {category.title}
            </h1>

            <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed mb-8">
              {category.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href={`/get-a-quote?category=${category.slug}&division=materials`}
                variant="primary"
                size="md"
              >
                <span>Request Wholesale Quotation</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                href={`/contact?division=materials&subject=${encodeURIComponent(
                  `Wholesale Enquiry: ${category.title}`
                )}`}
                variant="outline"
                size="md"
              >
                Speak to Supply Desk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Key Advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63] block">
              Division Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#F3F1EC]">
              Direct Sourcing & Laboratory Quality Assurance
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed">
              {category.overview}
            </p>

            <div className="p-4 bg-[#15191D] border border-[#2A3035] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F3F1EC]">
                <ShieldCheck className="w-4 h-4 text-[#B89A63]" />
                <span>Laboratory Testing & Batch Compliance Protocol</span>
              </div>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                {category.qualityAssuranceNotes}
              </p>
            </div>

            <div className="p-4 bg-[#15191D] border border-[#2A3035] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F3F1EC]">
                <Truck className="w-4 h-4 text-[#B89A63]" />
                <span>Bulk Logistics & Site Staging</span>
              </div>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                {category.bulkLogisticsDetails}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                Why Contractors Choose GG Supply
              </h3>
              <ul className="space-y-3">
                {category.advantages.map((adv, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#A7ADB3]">
                    <CheckCircle2 className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                    <span className="text-[#F3F1EC] leading-relaxed">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Authorized Brand Partnerships */}
            <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B89A63] mb-3 pb-2 border-b border-[#2A3035]">
                Authorized Mill & Brand Networks
              </h3>
              <ul className="space-y-2 text-xs font-mono text-[#A7ADB3]">
                {category.authorizedBrandsPlaceholder.map((brand, i) => (
                  <li key={i} className="p-2 bg-[#0B0D0F] border border-[#2A3035] text-[11px]">
                    {brand}
                  </li>
                ))}
              </ul>
              <span className="text-[10px] text-[#667582] block mt-3">
                * Specific brand availability subject to regional allocation and plant production cycles.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Available Product Lines & Technical Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          eyebrow="Technical Data"
          title="Product Lines & Specifications"
          description="Detailed grade variants, packaging, and tested technical specifications. All unknown specifications are flagged with verification placeholders."
        />

        <div className="space-y-8">
          {category.products.map((prod, idx) => (
            <div
              key={idx}
              className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2A3035]">
                <div>
                  <span className="text-[10px] font-mono text-[#B89A63] uppercase tracking-wider block mb-1">
                    PRODUCT CODE // 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-light text-[#F3F1EC]">
                    {prod.name}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 text-xs font-mono bg-[#0B0D0F] text-[#F3F1EC] border border-[#2A3035]">
                    MOQ: {prod.minimumOrder}
                  </span>
                  <Button
                    href={`/get-a-quote?product=${encodeURIComponent(prod.name)}&division=materials`}
                    variant="primary"
                    size="sm"
                  >
                    Request Tariff
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                {/* Specifications Table */}
                <div className="lg:col-span-6">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#667582] mb-3">
                    Technical Specifications
                  </h4>
                  <div className="border border-[#2A3035] divide-y divide-[#2A3035] text-xs">
                    {prod.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="grid grid-cols-2 p-3 bg-[#0B0D0F]">
                        <span className="text-[#A7ADB3]">{spec.label}</span>
                        <span className="text-[#F3F1EC] font-mono font-medium">{spec.value}</span>
                      </div>
                    ))}
                    <div className="grid grid-cols-2 p-3 bg-[#0B0D0F]">
                      <span className="text-[#A7ADB3]">Packaging</span>
                      <span className="text-[#F3F1EC] font-mono">{prod.packaging}</span>
                    </div>
                  </div>
                </div>

                {/* Grade Variants & Applications */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#667582] mb-2.5">
                      Available Grade & Size Variants
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {prod.gradeVariants.map((gv, gIdx) => (
                        <span
                          key={gIdx}
                          className="px-2.5 py-1 text-xs font-mono bg-[#0B0D0F] border border-[#2A3035] text-[#B89A63]"
                        >
                          {gv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#667582] mb-2.5">
                      Approved Engineering Applications
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#A7ADB3]">
                      {prod.applications.map((app, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A63]" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category FAQs */}
      {category.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            eyebrow="Commercial Clarifications"
            title={`${category.title} Supply FAQs`}
            align="center"
          />

          <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-10">
            <Accordion>
              {category.faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  id={`mat-faq-${idx}`}
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

      {/* Related Categories */}
      {relatedCategories.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <SectionHeading
            eyebrow="Complementary Supply"
            title="Related Material Lines"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCategories.map((rc) => (
              <MaterialCategoryCard key={rc.slug} category={rc} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
