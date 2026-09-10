import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services";

export default function ServicesPreview() {
  // Showcase top 4 featured services on homepage
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Division 01 // Civil Engineering"
          title="Engineered Construction Capabilities"
          description="From complex multi-acre logistics parks and commercial high-rises to turnkey EPC mandates, we deploy certified engineering teams and modern formwork to guarantee schedule adherence."
          action={
            <Button href="/services" variant="outline" size="sm">
              <span>View All 9 Services</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center lg:hidden">
          <Button href="/services" variant="outline" size="md">
            <span>View All 9 Construction Services</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
