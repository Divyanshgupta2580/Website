import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, ArrowRight, Home, Building2, Hammer } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyData } from "@/data/company";

export interface ContactSectionProps {
  className?: string;
  id?: string;
  isPageHeader?: boolean;
}

export default function ContactSection({
  className = "",
  id = "contact",
  isPageHeader = false,
}: ContactSectionProps) {
  const enquiryChoices = [
    {
      index: "01",
      title: "RESIDENTIAL CONSTRUCTION",
      isPrimary: true,
      badge: "CORE FOCUS",
      description:
        "Independent homes, builder floors (G+3 and G+4 floors), and residential duplexes with sound RCC structural framing.",
      cta: "DISCUSS A RESIDENTIAL PROJECT",
      href: "/contact?type=residential#enquiry-form",
      icon: Home,
    },
    {
      index: "02",
      title: "COMMERCIAL & SHOPS",
      isPrimary: false,
      badge: "COMMERCIAL",
      description:
        "Low-rise commercial complexes, retail shop fronts, and small office premises up to 4–5 floors.",
      cta: "DISCUSS A COMMERCIAL PROJECT",
      href: "/contact?type=commercial#enquiry-form",
      icon: Building2,
    },
    {
      index: "03",
      title: "RENOVATION & ADDITIONS",
      isPrimary: false,
      badge: "RENOVATION",
      description:
        "Vertical floor additions, structural strengthening, AAC block masonry, and building modernization.",
      cta: "DISCUSS A RENOVATION",
      href: "/contact?type=renovation#enquiry-form",
      icon: Hammer,
    },
  ];

  const HeadingTag = isPageHeader ? "h1" : "h2";

  return (
    <section
      id={id}
      aria-labelledby="contact-heading"
      className={`py-12 sm:py-16 md:py-20 bg-[#F4F2EE] border-b border-[#D5D4D0] relative ${className}`}
    >
      <Container size="default">
        {/* Main Contact Card */}
        <div className="bg-white border border-[#D5D4D0] p-8 sm:p-12 lg:p-14 rounded-3xl sm:rounded-[28px] shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#D96B27]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96B27]">
                  GET IN TOUCH
                </span>
              </div>

              <HeadingTag
                id="contact-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18324A] leading-tight"
              >
                Planning a Construction Project?
              </HeadingTag>

              <p className="text-base sm:text-lg text-[#66717A] leading-relaxed max-w-xl">
                Tell us about your building requirement and we&apos;ll get in touch. We build homes, builder floors, shops, and low-rise commercial structures across Rohini, Pitampura, and nearby areas of Delhi.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button href="/get-a-quote" variant="primary" size="lg" className="group">
                  <span>GET A QUOTE</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>

                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D5D4D0] hover:border-[#18324A] text-[#18324A] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D96B27]" />
                  <span>EMAIL US</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Contact Details */}
            <div className="lg:col-span-5 bg-[#F4F2EE] border border-[#D5D4D0] p-6 sm:p-8 rounded-2xl space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#D96B27] block mb-1">
                  CALL US DIRECTLY
                </span>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="text-2xl sm:text-3xl font-extrabold text-[#18324A] hover:text-[#D96B27] transition-colors block"
                >
                  {companyData.contact.phoneFormatted}
                </a>
                <p className="text-xs text-[#66717A] mt-1">
                  Speak directly with our construction team regarding plot site visits and planning.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D5D4D0]">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#D96B27] block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-lg sm:text-xl font-bold text-[#18324A] hover:text-[#D96B27] transition-colors break-all block"
                >
                  {companyData.contact.email}
                </a>
                <p className="text-xs text-[#66717A] mt-1">
                  Send plot dimensions, layouts, or drawings directly for civil estimation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Clear Enquiry Pathways */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D96B27] block mb-1">
              CONSTRUCTION ENQUIRY PATHS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#18324A]">
              How Can We Help You?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enquiryChoices.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.index}
                  href={item.href}
                  className="group bg-white border border-[#D5D4D0] p-6 sm:p-7 rounded-2xl sm:rounded-[22px] flex flex-col justify-between hover:border-[#18324A] hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F4F2EE] border border-[#D5D4D0] flex items-center justify-center text-[#18324A]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D96B27] bg-[#F3D8C7] px-2 py-0.5 rounded-md">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#18324A] group-hover:text-[#D96B27] transition-colors mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#66717A] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D5D4D0] flex items-center justify-between text-xs font-bold text-[#18324A] group-hover:text-[#D96B27]">
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
