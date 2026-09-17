import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
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
      icon: (
        <svg
          className="w-8 h-8 text-[#B89A63]"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 14L16 5L27 14" />
          <path d="M8 12V27H24V12" />
          <path d="M13 27V18H19V27" />
        </svg>
      ),
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
      icon: (
        <svg
          className="w-8 h-8 text-[#B89A63]"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="3" y1="28" x2="29" y2="28" />
          <rect x="7" y="6" width="18" height="22" rx="0.5" />
          <line x1="7" y1="12" x2="25" y2="12" />
          <line x1="7" y1="17" x2="25" y2="17" />
          <line x1="7" y1="22" x2="25" y2="22" />
          <line x1="13" y1="6" x2="13" y2="28" />
          <line x1="19" y1="6" x2="19" y2="28" />
          <path d="M13 28V23H19V28" />
        </svg>
      ),
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
      icon: (
        <svg
          className="w-8 h-8 text-[#B89A63]"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 4L18 8L7 19L3 19L3 15L14 4Z" />
          <path d="M16 6L20 10" />
          <line x1="10" y1="28" x2="28" y2="28" />
          <line x1="18" y1="20" x2="26" y2="28" />
        </svg>
      ),
    },
  ];

  const HeadingTag = isPageHeader ? "h1" : "h2";

  return (
    <section
      id={id}
      aria-labelledby="contact-heading"
      className={`py-12 sm:py-16 md:py-20 bg-[#0B0D0F] border-t border-[#2A3035] relative overflow-hidden ${className}`}
    >
      <Container size="default" className="relative z-10">
        {/* Top Contact Composition: Editorial Two-Column with Low-Rise Architectural Accent */}
        <div className="relative">
          {/* Architectural Background Image on Right Side */}
          <div
            className="absolute right-0 top-0 bottom-0 w-full sm:w-[50%] lg:w-[46%] xl:w-[42%] overflow-hidden pointer-events-none select-none opacity-40 sm:opacity-50 lg:opacity-75 transition-opacity"
            aria-hidden="true"
          >
            <Image
              src="/images/contact-architecture.jpg"
              alt="GG Construction Co. Architectural Structure"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-right"
              priority
            />
            {/* Dark gradient overlays */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F] via-[#0B0D0F]/85 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/30 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0B0D0F]/70 via-transparent to-transparent"
              aria-hidden="true"
            />

            {/* Architectural Typography on the Wall */}
            <div
              className="absolute right-6 top-10 hidden 2xl:flex flex-col items-end text-right space-y-1 opacity-65 pointer-events-none"
              aria-hidden="true"
            >
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8A95A0]">BUILDING</span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8A95A0]">CONSTRUCTION</span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8A95A0]">SUPERVISION</span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8A95A0]">DELHI NCR</span>
            </div>
            <div
              className="absolute right-6 bottom-4 hidden 2xl:block text-right opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#8A95A0] block">PRACTICAL CONSTRUCTION.</span>
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#8A95A0] block">HONEST SUPERVISION.</span>
            </div>
          </div>

          {/* Two-Column Editorial Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-6 lg:pr-10 xl:pr-14 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#B89A63]" aria-hidden="true" />
                <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#B89A63] uppercase">
                  LET&apos;S TALK
                </span>
              </div>

              <HeadingTag
                id="contact-heading"
                className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-light text-[#F3F1EC] leading-[1.14] tracking-tight font-serif"
              >
                Let’s Build
                <br />
                Together.
              </HeadingTag>

              <p className="text-sm sm:text-[15px] text-[#A7ADB3] leading-relaxed max-w-lg font-light">
                Planning a residential home, builder floor, shop, or commercial building? Get in touch with GG Construction Co. We have carried out construction work across Rohini, Pitampura and nearby areas of Delhi.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#B89A63] text-[#0B0D0F] font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#D0B47A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A63]"
                >
                  <span>GET A QUOTE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>

                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#15191D]/80 border border-[#2A3035] hover:border-[#B89A63]/70 text-[#F3F1EC] hover:text-[#B89A63] font-mono text-xs uppercase tracking-[0.18em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A63]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B89A63]" aria-hidden="true" />
                  <span>EMAIL US</span>
                </a>
              </div>

              {/* Desktop Direct Phone Link */}
              <div className="pt-2 hidden lg:block">
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="group inline-flex items-center gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A63]"
                  aria-label={`Call ${companyData.contact.phoneFormatted}`}
                >
                  <div className="w-10 h-10 rounded-full border border-[#B89A63]/60 bg-[#15191D] flex items-center justify-center text-[#B89A63] group-hover:border-[#B89A63] group-hover:scale-105 transition-all flex-shrink-0">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#B89A63] font-medium">
                      CALL US DIRECTLY
                    </span>
                    <span className="block text-sm font-mono text-[#F3F1EC] group-hover:text-[#D0B47A] transition-colors">
                      {companyData.contact.phoneFormatted}
                    </span>
                    <span className="block text-[11px] text-[#A7ADB3]">
                      Direct project discussion with our construction team.
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Vertical Divider */}
            <div
              className="hidden lg:block lg:col-span-1 lg:w-[1px] h-full min-h-[300px] bg-[#2A3035] justify-self-center"
              aria-hidden="true"
            />

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5 lg:pl-6 xl:pl-10 space-y-8 sm:space-y-10">
              {/* PHONE */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#B89A63]/60 bg-[#15191D]/90 flex items-center justify-center text-[#B89A63] group-hover:border-[#B89A63] group-hover:scale-105 transition-all flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B89A63] block mb-1 font-medium">
                      PHONE
                    </span>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="inline-flex items-center gap-2 group/link focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A63]"
                      aria-label={`Call ${companyData.contact.phoneFormatted}`}
                    >
                      <span className="text-2xl sm:text-3xl lg:text-[30px] font-light font-mono text-[#F3F1EC] group-hover/link:text-[#D0B47A] transition-colors tracking-tight">
                        {companyData.contact.phoneFormatted}
                      </span>
                      <ArrowUpRight
                        className="w-5 h-5 text-[#667582] group-hover/link:text-[#B89A63] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
                        aria-hidden="true"
                      />
                    </a>
                    <p className="text-xs text-[#A7ADB3] mt-1.5 font-light">
                      Speak directly regarding ongoing or planned construction projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#B89A63]/60 bg-[#15191D]/90 flex items-center justify-center text-[#B89A63] group-hover:border-[#B89A63] group-hover:scale-105 transition-all flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B89A63] block mb-1 font-medium">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="inline-flex items-center gap-2 group/link focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A63]"
                      aria-label={`Email ${companyData.contact.email}`}
                    >
                      <span className="text-xl sm:text-2xl lg:text-[26px] font-light font-mono text-[#F3F1EC] group-hover/link:text-[#D0B47A] transition-colors tracking-tight break-all sm:break-normal">
                        {companyData.contact.email}
                      </span>
                      <ArrowUpRight
                        className="w-5 h-5 text-[#667582] group-hover/link:text-[#B89A63] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
                        aria-hidden="true"
                      />
                    </a>
                    <p className="text-xs text-[#A7ADB3] mt-1.5 font-light">
                      Send drawings or project specifications directly to our desk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Divider */}
        <div
          className="w-full h-[1px] bg-[#2A3035] my-12 sm:my-16 lg:my-18"
          aria-hidden="true"
        />

        {/* Secondary Enquiry Options */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-10">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#B89A63]">01</span>
              <span className="text-[#667582]">/</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#F3F1EC]">
                HOW CAN WE HELP?
              </span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#667582] pb-0.5 border-b border-[#2A3035] self-start sm:self-auto">
              CONSTRUCTION ENQUIRY PATHS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2A3035]">
            {enquiryChoices.map((item) => (
              <Link
                key={item.index}
                href={item.href}
                className={`group block py-8 md:py-5 px-0 md:px-7 lg:px-9 first:pl-0 last:pr-0 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A63] ${
                  item.isPrimary ? "bg-[#15191D]/30 md:bg-transparent rounded-sm md:rounded-none p-4 md:p-0" : ""
                }`}
                aria-label={`${item.title}: ${item.description}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-xs font-mono tracking-widest font-medium ${
                      item.isPrimary ? "text-[#B89A63]" : "text-[#8A95A0]"
                    }`}
                  >
                    {item.index}
                  </span>
                  {item.isPrimary ? (
                    <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#B89A63] bg-[#B89A63]/15 border border-[#B89A63]/40 px-2 py-0.5 rounded-sm font-medium">
                      {item.badge}
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#667582]">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex-shrink-0 transition-transform group-hover:scale-105 ${
                        item.isPrimary ? "text-[#B89A63]" : "text-[#B89A63]/85"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <h3
                      className={`text-xs sm:text-sm font-medium tracking-[0.18em] uppercase transition-colors font-serif ${
                        item.isPrimary
                          ? "text-[#F3F1EC] group-hover:text-[#B89A63]"
                          : "text-[#F3F1EC]/90 group-hover:text-[#B89A63]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${
                      item.isPrimary
                        ? "border-[#B89A63]/50 text-[#B89A63] group-hover:border-[#D0B47A] group-hover:translate-x-0.5"
                        : "border-[#2A3035] text-[#667582] group-hover:border-[#B89A63] group-hover:text-[#B89A63] group-hover:translate-x-0.5"
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-6 font-light group-hover:text-[#F3F1EC]/90 transition-colors">
                  {item.description}
                </p>

                <div
                  className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-mono pb-0.5 transition-colors ${
                    item.isPrimary
                      ? "text-[#B89A63] border-b border-[#B89A63] group-hover:text-[#D0B47A] group-hover:border-[#D0B47A]"
                      : "text-[#A7ADB3] border-b border-[#2A3035] group-hover:text-[#B89A63] group-hover:border-[#B89A63]/70"
                  }`}
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
