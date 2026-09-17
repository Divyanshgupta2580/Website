import React from "react";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
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
  secondaryCtaText = "CONTACT US",
  secondaryCtaHref = "/contact",
  showContacts = true,
  className = "",
}: CTAProps) {
  return (
    <section className={`py-16 md:py-24 bg-[#F4F2EE] border-t border-[#D5D4D0] relative ${className}`}>
      <Container size="default">
        <div className="bg-[#18324A] text-white p-8 sm:p-12 lg:p-16 rounded-sm shadow-md relative overflow-hidden">
          {/* Subtle Orange Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D96B27]" />

          <div className="max-w-3xl">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#D96B27]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F3D8C7]">
                  {eyebrow}
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              {primaryCtaText && (
                <Button href={primaryCtaHref} variant="primary" size="lg" className="group">
                  <span>{primaryCtaText}</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              )}

              {secondaryCtaText && (
                <Button
                  href={secondaryCtaHref}
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
                >
                  {secondaryCtaText}
                </Button>
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
