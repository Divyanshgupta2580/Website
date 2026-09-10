import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyData } from "@/data/company";

export interface ContactSectionProps {
  className?: string;
  id?: string;
}

export default function ContactSection({
  className = "",
  id = "contact",
}: ContactSectionProps) {
  const enquiryPaths = [
    {
      title: "Building Materials Supply",
      description:
        "For cement, TMT steel, red bricks, AAC blocks, sand, aggregates, plumbing, and electrical material enquiries.",
      href: "/contact?division=materials",
      label: "Materials Enquiry",
    },
    {
      title: "Building Construction",
      description:
        "For residential homes, 3–4 floor apartments, shops, offices, and renovation enquiries.",
      href: "/contact?division=construction",
      label: "Construction Enquiry",
    },
    {
      title: "Real Estate Sales & Assistance",
      description:
        "For property marketing, buying opportunities, and buyer-seller coordination enquiries.",
      href: "/contact?division=real-estate",
      label: "Real Estate Enquiry",
    },
  ];

  return (
    <section
      id={id}
      aria-labelledby="contact-heading"
      className={`py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035] relative overflow-hidden ${className}`}
    >
      {/* Subtle Architectural Grid Texture */}
      <div
        className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        {/* Main Editorial Canvas */}
        <div className="bg-[#15191D] border border-[#2A3035] p-8 sm:p-12 lg:p-16 relative">
          {/* Refined Top Bronze Accent Line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B89A63] to-transparent"
            aria-hidden="true"
          />

          {/* Two-Column Desktop Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Eyebrow, Large Heading, Supporting Text, Action CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B89A63]" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B89A63]">
                  CONTACT GG CONSTRUCTION CO.
                </span>
              </div>

              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3F1EC] leading-[1.15] tracking-tight"
              >
                Let’s Build Something Great Together.
              </h2>

              <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed max-w-xl">
                Have a construction requirement, real-estate enquiry, or building-material requirement? Get in touch with the GG Construction Co. team.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  href="/get-a-quote"
                  variant="primary"
                  size="lg"
                  className="group flex items-center justify-center gap-2"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>

                <Button
                  href={`mailto:${companyData.contact.email}`}
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#B89A63]" />
                  <span>Email Us</span>
                </Button>
              </div>

              {/* Secondary Direct-Call Action */}
              <div className="pt-2">
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#A7ADB3] hover:text-[#B89A63] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A63]"
                  aria-label={`Call ${companyData.contact.phoneFormatted}`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#B89A63]" />
                  <span>Call {companyData.contact.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Two Prominent Interactive Contact Actions */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              {/* Phone Action Card */}
              <a
                href={`tel:${companyData.contact.phone}`}
                className="group block p-6 sm:p-7 bg-[#1D2227] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A63]"
                aria-label={`Call GG Construction Co. at ${companyData.contact.phoneFormatted}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#2A3035] bg-[#15191D] group-hover:border-[#B89A63] flex items-center justify-center text-[#B89A63] transition-colors">
                      <Phone className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#A7ADB3] group-hover:text-[#F3F1EC] transition-colors">
                      Phone
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#667582] group-hover:text-[#B89A63] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-light font-mono text-[#F3F1EC] group-hover:text-[#D0B47A] transition-colors tracking-tight">
                  {companyData.contact.phoneFormatted}
                </div>
              </a>

              {/* Email Action Card */}
              <a
                href={`mailto:${companyData.contact.email}`}
                className="group block p-6 sm:p-7 bg-[#1D2227] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A63]"
                aria-label={`Send email to GG Construction Co. at ${companyData.contact.email}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#2A3035] bg-[#15191D] group-hover:border-[#B89A63] flex items-center justify-center text-[#B89A63] transition-colors">
                      <Mail className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#A7ADB3] group-hover:text-[#F3F1EC] transition-colors">
                      Email
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#667582] group-hover:text-[#B89A63] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-light font-mono text-[#F3F1EC] group-hover:text-[#D0B47A] transition-colors tracking-tight break-all">
                  {companyData.contact.email}
                </div>
              </a>
            </div>
          </div>

          {/* THREE DEDICATED ENQUIRY OPTIONS */}
          <div className="mt-12 sm:mt-14 pt-10 sm:pt-12 border-t border-[#2A3035]">
            <div className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#B89A63] mb-5">
              Dedicated Enquiry Options
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {enquiryPaths.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group p-5 sm:p-6 bg-[#1D2227]/60 border border-[#2A3035] hover:border-[#B89A63]/60 hover:bg-[#1D2227] transition-all duration-200 block focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A63]"
                  aria-label={`${item.title}: ${item.description}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs uppercase tracking-[0.16em] font-medium text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowRight className="w-3.5 h-3.5 text-[#667582] group-hover:text-[#B89A63] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
