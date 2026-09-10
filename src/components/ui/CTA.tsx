import React from "react";
import { ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { companyData } from "@/data/company";

export interface CTAProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showContacts?: boolean;
  className?: string;
}

export default function CTA({
  eyebrow = "Initiate Engagement",
  title = "Planning Your Next Project?",
  description = "Connect directly with our engineering directors to discuss structural feasibility, site requirements, and material supply frameworks.",
  primaryCtaText = "Start a Project",
  primaryCtaHref = "/get-a-quote",
  secondaryCtaText = "Speak with Engineering",
  secondaryCtaHref = "/contact",
  showContacts = true,
  className = "",
}: CTAProps) {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello%20GG%20Construction%20Co.,%20I%20would%20like%20to%20discuss%20a%20project.`;

  return (
    <section className={`py-20 md:py-28 bg-[#0B0D0F] border-t border-[#2A3035] relative overflow-hidden ${className}`}>
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25" />

      <Container size="default" className="relative z-10">
        <div className="bg-[#15191D] border border-[#2A3035] p-8 sm:p-12 lg:p-16 relative">
          {/* Subtle Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B89A63] to-transparent" />

          <div className="max-w-3xl">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-[#B89A63]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
                  {eyebrow}
                </span>
              </div>
            )}

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#F3F1EC] leading-tight mb-5">
              {title}
            </h2>

            {description && (
              <p className="text-sm sm:text-base text-[#A7ADB3] leading-relaxed mb-8">
                {description}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {primaryCtaText && (
                <Button href={primaryCtaHref} variant="primary" size="lg" className="group">
                  <span>{primaryCtaText}</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              )}

              {secondaryCtaText && (
                <Button href={secondaryCtaHref} variant="outline" size="lg">
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            {/* Direct Contact Bar */}
            {showContacts && (
              <div className="pt-8 border-t border-[#2A3035] flex flex-wrap items-center gap-6 text-xs text-[#A7ADB3]">
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="flex items-center gap-2 hover:text-[#F3F1EC] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B89A63]" />
                  <span>Call: {companyData.contact.phoneFormatted}</span>
                </a>

                <span className="text-[#2A3035] hidden sm:inline">&bull;</span>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F3F1EC] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#B89A63]" />
                  <span>WhatsApp Desk</span>
                </a>

                <span className="text-[#2A3035] hidden sm:inline">&bull;</span>

                <span className="text-[#667582] text-[11px] font-mono">
                  {companyData.contact.officeHours}
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
