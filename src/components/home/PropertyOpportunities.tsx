import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Building2, CheckCircle2, PhoneCall } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { propertiesData } from "@/data/properties";

export default function PropertyOpportunities() {
  const featuredProperties = propertiesData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#15191D]/35 border-t border-[#2A3035]">
      <Container size="default">
        <SectionHeading
          eyebrow="Secondary Business // Real Estate"
          title="Property Opportunities & Sales Assistance"
          description="GG Construction Co. assists customers with finding properties, property marketing, and buyer-seller coordination. Each property clearly identifies its source and ownership nature."
          action={
            <Button href="/real-estate" variant="outline" size="sm">
              <span>View All Opportunities</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          }
        />

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProperties.map((property) => (
            <div
              key={property.slug}
              className="bg-[#15191D] border border-[#2A3035] overflow-hidden group hover:border-[#B89A63]/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-[#1D2227] overflow-hidden">
                  <Image
                    src={property.heroImage}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider bg-[#0B0D0F]/90 text-[#B89A63] border border-[#2A3035] line-clamp-1">
                      {property.listingNature}
                    </span>
                    <Badge variant="slate">{property.status}</Badge>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-[#F3F1EC]">
                    <div className="flex items-center gap-1.5 drop-shadow">
                      <MapPin className="w-3.5 h-3.5 text-[#B89A63]" />
                      <span className="text-[11px] font-medium">{property.location}</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#B89A63] bg-[#0B0D0F]/90 px-2 py-0.5 border border-[#2A3035]">
                      {property.sizeRange}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#667582] block mb-1">
                    {property.propertyType}
                  </span>

                  <h3 className="text-xl font-light text-[#F3F1EC] mb-2 group-hover:text-[#B89A63] transition-colors">
                    <Link href="/real-estate">
                      {property.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#A7ADB3] leading-relaxed mb-4">
                    {property.tagline}
                  </p>

                  <div className="pt-4 border-t border-[#2A3035]/60 mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-[#667582] block mb-2 font-semibold">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#A7ADB3]">
                      {property.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A63] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#2A3035] pt-4">
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-widest font-semibold text-[#F3F1EC] group-hover:text-[#B89A63] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Enquire for Property</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B89A63]" />
                </Link>
                <span className="text-[10px] font-mono text-[#667582]">SALES DESK</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Transparency Box */}
        <div className="p-4 bg-[#15191D] border border-[#2A3035] text-xs text-[#A7ADB3] flex items-center justify-between flex-wrap gap-4">
          <p>
            <strong className="text-[#F3F1EC]">Transparency Note:</strong> Properties displayed are opportunities marketed on behalf of property owners or developers. GG Construction Co. provides buyer assistance, site visits, and sales coordination.
          </p>
          <Button href="/contact" variant="outline" size="sm">
            Contact Sales Desk
          </Button>
        </div>
      </Container>
    </section>
  );
}
