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
      title: "BUILDING MATERIALS",
      isPrimary: true,
      badge: "PRIMARY BUSINESS",
      description:
        "Cement, bricks, blocks, sand, aggregates and other materials for building work.",
      cta: "EXPLORE MATERIALS",
      href: "/contact?division=materials#enquiry-form",
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
          {/* Top Cube */}
          <path d="M16 3L23 7V15L16 19L9 15V7L16 3Z" />
          <path d="M16 3V19" />
          <path d="M9 7L16 11L23 7" />
          {/* Bottom Left Cube */}
          <path d="M9 15L2 19V27L9 31L16 27V19L9 15Z" />
          <path d="M9 15V31" />
          <path d="M2 19L9 23L16 19" />
          {/* Bottom Right Cube */}
          <path d="M23 15L16 19V27L23 31L30 27V19L23 15Z" />
          <path d="M23 15V31" />
          <path d="M16 19L23 23L30 19" />
        </svg>
      ),
    },
    {
      index: "02",
      title: "BUILDING CONSTRUCTION",
      isPrimary: false,
      badge: "CONSTRUCTION",
      description:
        "Residential and low-rise commercial buildings, shops, offices and renovation work.",
      cta: "DISCUSS A PROJECT",
      href: "/contact?division=construction#enquiry-form",
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
          {/* Ground level line */}
          <line x1="3" y1="28" x2="29" y2="28" />
          {/* 4-Floor Low-Rise Building Frame */}
          <rect x="7" y="6" width="18" height="22" rx="0.5" />
          {/* Floor levels */}
          <line x1="7" y1="12" x2="25" y2="12" />
          <line x1="7" y1="17" x2="25" y2="17" />
          <line x1="7" y1="22" x2="25" y2="22" />
          {/* Vertical structural columns */}
          <line x1="13" y1="6" x2="13" y2="28" />
          <line x1="19" y1="6" x2="19" y2="28" />
          {/* Entrance opening */}
          <path d="M13 28V23H19V28" />
        </svg>
      ),
    },
    {
      index: "03",
      title: "REAL ESTATE SALES",
      isPrimary: false,
      badge: "PROPERTY SALES",
      description:
        "Property marketing, buying opportunities and buyer-seller coordination.",
      cta: "VIEW PROPERTY OPTIONS",
      href: "/contact?division=real-estate#enquiry-form",
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
          {/* Architectural House / Roof Outline */}
          <path d="M5 14L16 5L27 14" />
          <path d="M8 12V27H24V12" />
          <path d="M13 27V18H19V27" />
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
          {/* Tasteful Architectural Background Image on Right Side */}
          <div
            className="absolute right-0 top-0 bottom-0 w-full sm:w-[50%] lg:w-[46%] xl:w-[42%] overflow-hidden pointer-events-none select-none opacity-40 sm:opacity-50 lg:opacity-75 transition-opacity"
            aria-hidden="true"
          >
            <Image
              src="/images/contact-architecture.jpg"
              alt="GG Construction Co. Architectural Entrance"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-right"
              priority
            />
            {/* Dark gradient overlay blending seamlessly from left to right */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F] via-[#0B0D0F]/85 to-transparent"
              aria-hidden="true"
            />
            {/* Dark gradient overlay blending from bottom to top */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/30 to-transparent"
              aria-hidden="true"
            />
            {/* Subtle top shadow */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0B0D0F]/70 via-transparent to-transparent"
              aria-hidden="true"
            />

            {/* Architectural Typography on the Wall matching core business divisions */}
            <div
              className="absolute right-6 top-10 hidden 2xl:flex flex-col items-end text-right space-y-1 opacity-65 pointer-events-none"
              aria-hidden="true"
            >
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8A95A0]">BUILDING</span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8A95A0]">MATERIALS</span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8A95A0]">CONSTRUCTION</span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8A95A0]">REAL ESTATE</span>
            </div>
            <div
              className="absolute right-6 bottom-4 hidden 2xl:block text-right opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#8A95A0] block">PRACTICAL SOLUTIONS.</span>
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#8A95A0] block">STRONGER TOMORROWS.</span>
            </div>
          </div>

          {/* Two-Column Editorial Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
            {/* LEFT COLUMN: Eyebrow, Large Editorial Headline, Supporting Copy, Action CTAs, Desktop Call Link */}
            <div className="lg:col-span-6 lg:pr-10 xl:pr-14 space-y-6">
              {/* Editorial Eyebrow with Subtle Bronze Line */}
              <div className="inline-flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#B89A63]" aria-hidden="true" />
                <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#B89A63] uppercase">
                  LET&apos;S TALK
                </span>
              </div>

              {/* Main Headline with Intentional Editorial Line Break */}
              <HeadingTag
                id="contact-heading"
                className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-light text-[#F3F1EC] leading-[1.14] tracking-tight font-serif"
              >
                Let’s Build, Buy &amp;
                <br />
                Source Together.
              </HeadingTag>

              {/* Supporting Text Reflecting Three Core Activities */}
              <p className="text-sm sm:text-[15px] text-[#A7ADB3] leading-relaxed max-w-lg font-light">
                Looking for building materials, planning a low-rise building, or exploring a property opportunity? Get in touch with GG Construction Co.
              </p>

              {/* Action Buttons: Primary (GET A QUOTE) & Secondary (EMAIL US) */}
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

              {/* Desktop Direct Phone Quick Link */}
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
                      CALL US
                    </span>
                    <span className="block text-sm font-mono text-[#F3F1EC] group-hover:text-[#D0B47A] transition-colors">
                      {companyData.contact.phoneFormatted}
                    </span>
                    <span className="block text-[11px] text-[#A7ADB3]">
                      For enquiries about materials, construction or property.
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* VERTICAL DIVIDER between columns on desktop */}
            <div
              className="hidden lg:block lg:col-span-1 lg:w-[1px] h-full min-h-[300px] bg-[#2A3035] justify-self-center"
              aria-hidden="true"
            />

            {/* RIGHT COLUMN: Clean Editorial Contact-Information Panel */}
            <div className="lg:col-span-5 lg:pl-6 xl:pl-10 space-y-8 sm:space-y-10">
              {/* PHONE */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#B89A63]/60 bg-[#15191D]/90 flex items-center justify-center text-[#B89A63] group-hover:border-[#B89A63] group-hover:scale-105 transition-all flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B89A63] block mb-1 font-medium">
                      CALL US
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
                      For enquiries about materials, construction or property.
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
                      Send us an email and we&apos;ll get back to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Full-Width Architectural Divider */}
        <div
          className="w-full h-[1px] bg-[#2A3035] my-12 sm:my-16 lg:my-18"
          aria-hidden="true"
        />

        {/* Secondary Enquiry Section: Minimal 3-Column Layout with Building Materials Prominence */}
        <div>
          {/* Section Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-10">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#B89A63]">01</span>
              <span className="text-[#667582]">/</span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#F3F1EC]">
                HOW CAN WE HELP?
              </span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#667582] pb-0.5 border-b border-[#2A3035] self-start sm:self-auto">
              DEDICATED ENQUIRY OPTIONS
            </div>
          </div>

          {/* Three Horizontally Aligned Editorial Enquiry Items */}
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
                {/* Numbering and Priority Badge */}
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

                {/* Category Header Row: Icon + Title + Circle Arrow Button */}
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

                {/* Restrained Description */}
                <p className="text-xs text-[#A7ADB3] leading-relaxed mb-6 font-light group-hover:text-[#F3F1EC]/90 transition-colors">
                  {item.description}
                </p>

                {/* Bottom Underline Action with Exact Required CTA Label */}
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
