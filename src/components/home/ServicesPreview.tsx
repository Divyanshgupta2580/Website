import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const servicesList = [
  {
    number: "01",
    title: "RESIDENTIAL CONSTRUCTION",
    slug: "residential-construction",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Low-rise residential building and independent floors under construction [Representative Example]",
    description:
      "Complete construction of independent family houses, builder floors (G+3 and G+4 floors), and residential duplexes with durable RCC structural framing, solid brick masonry, and dedicated site supervision.",
    badge: "Homes & Builder Floors",
  },
  {
    number: "02",
    title: "LOW-RISE COMMERCIAL CONSTRUCTION",
    slug: "commercial-construction",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Low-rise commercial complex and office building construction [Representative Example]",
    description:
      "Construction of low-rise commercial complexes, shop rows, and office premises up to 4–5 floors with wide column spans, open floor layouts, and commercial-grade utility infrastructure.",
    badge: "Up to 4–5 Floors",
  },
  {
    number: "03",
    title: "SHOP & OFFICE CONSTRUCTION",
    slug: "shop-office-construction",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Retail shopfront and workplace commercial construction [Representative Example]",
    description:
      "Dedicated construction of neighborhood retail shops, showroom storefronts, and workplace office suites designed for durability, clear customer access, and dependable electrical and plumbing lines.",
    badge: "Retail & Offices",
  },
  {
    number: "04",
    title: "RENOVATION & STRUCTURAL IMPROVEMENT",
    slug: "renovation-remodeling",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Residential structural renovation and floor addition construction [Representative Example]",
    description:
      "Vertical floor additions, RCC column and beam strengthening, lightweight AAC block masonry, and multi-layer terrace waterproofing to expand and modernize existing buildings safely.",
    badge: "Floor Additions",
  },
  {
    number: "05",
    title: "CONSTRUCTION PLANNING & EXECUTION",
    slug: "construction-planning",
    image:
      "/images/construction-planning.jpg",
    imageAlt: "Construction site planning, rebar supervision, and project coordination [Representative Example]",
    description:
      "End-to-end project coordination, trade sequencing, daily on-site supervision of steel rebar and concrete pours, and stage-wise milestone billing from foundation excavation to final handover.",
    badge: "Site Supervision",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="CONSTRUCTION, FROM STRUCTURE TO COMPLETION."
          description="We provide dependable civil construction for residential and low-rise commercial projects across Rohini, Pitampura, and nearby areas of Delhi. Each service is carried out with attentive on-site supervision and disciplined structural standards."
        />

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => {
            return (
              <div
                key={service.slug}
                className="bg-white border border-[#D5D4D0] rounded-none overflow-hidden hover:border-[#18324A] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Contextual Construction Image */}
                  <div className="relative aspect-[16/10] w-full bg-[#E8E6E1] overflow-hidden border-b border-[#D5D4D0]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-0.5 rounded-none border border-[#D5D4D0] text-[10px] font-bold text-[#18324A] uppercase tracking-wider">
                      {service.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-[#18324A] group-hover:text-[#D96B27] transition-colors mb-3 leading-snug">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-[#66717A] leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Link Action */}
                <div className="px-6 pb-6 pt-3 border-t border-[#D5D4D0] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18324A] group-hover:text-[#D96B27] uppercase tracking-wider transition-colors"
                    aria-label={`View details for ${service.title}`}
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <span className="text-[10px] font-bold text-[#66717A] uppercase tracking-wider">
                    Delhi NCR
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
