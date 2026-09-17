import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Home, Building2, Store, Hammer, ClipboardCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { servicesData } from "@/data/services";

const serviceIcons: Record<string, React.ElementType> = {
  "residential-construction": Home,
  "commercial-construction": Building2,
  "shop-office-construction": Store,
  "renovation-remodeling": Hammer,
  "construction-planning": ClipboardCheck,
};

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          eyebrow="Core Construction Services"
          title="Practical Building Construction"
          description="We construct low-rise buildings across Rohini, Pitampura, and nearby areas of Delhi: residential homes, builder floors, commercial shops, and small offices (up to approximately 4–5 floors maximum), backed by attentive on-site supervision and disciplined civil execution."
          action={
            <Button href="/services" variant="outline" size="sm">
              <span>All Construction Services</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          }
        />

        {/* Clean, Simple Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[service.slug] || Home;
            const isFeatured = idx === 0;

            return (
              <div
                key={service.slug}
                className={`bg-white border border-[#D5D4D0] p-6 sm:p-7 flex flex-col justify-between hover:border-[#18324A] hover:shadow-md transition-all rounded-2xl sm:rounded-[22px] shadow-xs ${
                  isFeatured ? "md:col-span-2 lg:col-span-1 border-t-2 border-t-[#D96B27]" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F2EE] border border-[#D5D4D0] flex items-center justify-center text-[#18324A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant={isFeatured ? "orange" : "slate"}>
                      {service.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-[#18324A] hover:text-[#D96B27] transition-colors mb-2.5">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#66717A] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-[#D5D4D0] mb-6">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#18324A] block mb-2.5">
                      Scope Highlights
                    </span>
                    <ul className="space-y-2 text-xs text-[#20272D]">
                      {service.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D96B27] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D5D4D0] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs uppercase tracking-wider font-bold text-[#18324A] hover:text-[#D96B27] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Scope Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-bold text-[#66717A] uppercase">
                    Up to 4–5 Floors
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
