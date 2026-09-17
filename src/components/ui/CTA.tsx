import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import { companyData } from "@/data/company";

export interface CTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showContacts?: boolean;
  className?: string;
}

export default function CTA({
  eyebrow = "GET IN TOUCH",
  title = "Planning a Construction Project?",
  description = "Tell us about your building requirement and we'll get in touch.",
  primaryCtaText = "GET A QUOTE",
  primaryCtaHref = "/get-a-quote",
  secondaryCtaText = "VIEW PROJECTS",
  secondaryCtaHref = "/projects",
  showContacts = true,
  className = "",
}: CTAProps) {
  // Strip any legacy number or slashes
  const cleanEyebrow = eyebrow
    ? eyebrow
        .replace(/^(\d+\s*\/\/\s*)+/, "")
        .replace(/\/\//g, "")
        .trim()
    : undefined;

  return (
    <section className={`py-12 md:py-16 bg-[#F4F2EE] border-t border-[#D5D4D0] relative ${className}`}>
      <Container size="default">
        <div className="bg-[#18324A] text-white p-8 sm:p-12 lg:p-16 rounded-none relative overflow-hidden border border-[#102232]">
          {/* Subtle Orange Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D96B27]" />

          <div className="max-w-3xl">
            {cleanEyebrow && (
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-[#D96B27]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F3D8C7]">
                  {cleanEyebrow}
                </span>
              </div>
            )}

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              {title}
            </h2>

            {description && (
              <p className="text-base sm:text-lg text-[#E8E6E1] leading-relaxed mb-8">
                {description}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {primaryCtaText && (
                <Link
                  href={primaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 bg-[#D96B27] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#B9551D] rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{primaryCtaText}</span>
                  <span aria-hidden="true" className="text-base font-normal">↗</span>
                </Link>
              )}

              {secondaryCtaText && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 border border-[#18324A] bg-white px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#18324A] transition-colors hover:bg-[#18324A] hover:text-white rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{secondaryCtaText}</span>
                  <span aria-hidden="true" className="text-base font-normal">→</span>
                </Link>
              )}
            </div>

            {/* Direct Contact Links */}
            {showContacts && (
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-sm text-[#E8E6E1]">
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors font-medium"
                  aria-label={`Call ${companyData.contact.phoneFormatted}`}
                >
                  <Phone className="w-4 h-4 text-[#D96B27]" />
                  <span>{companyData.contact.phoneFormatted}</span>
                </a>

                <span className="text-white/30 hidden sm:inline">&bull;</span>

                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors font-medium"
                  aria-label={`Email ${companyData.contact.email}`}
                >
                  <Mail className="w-4 h-4 text-[#D96B27]" />
                  <span>{companyData.contact.email}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
