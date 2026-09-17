import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { companyData } from "@/data/company";

export default function ConversionCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-t border-[#D5D4D0]">
      <Container size="default">
        <div className="bg-[#18324A] text-white p-8 sm:p-12 lg:p-16 rounded-3xl sm:rounded-[28px] shadow-md relative overflow-hidden">
          {/* Top Orange Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D96B27]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#D96B27]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F3D8C7]">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Planning a Construction Project?
              </h2>

              <p className="text-base sm:text-lg text-[#E8E6E1] leading-relaxed mb-6 max-w-2xl">
                Tell us about your building requirement and we&apos;ll get in touch. We build low-rise residential homes, builder floors, shops, and offices across Rohini, Pitampura, and nearby areas of Delhi.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                <Button
                  href="/get-a-quote"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  <span>GET A QUOTE</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>

                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
                >
                  SEND DIRECT ENQUIRY
                </Button>
              </div>

              {/* Direct Contact Info */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-sm text-[#E8E6E1]">
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors font-bold"
                  aria-label={`Call ${companyData.contact.phoneFormatted}`}
                >
                  <Phone className="w-4 h-4 text-[#D96B27]" />
                  <span>{companyData.contact.phoneFormatted}</span>
                </a>

                <span className="text-white/30 hidden sm:inline">&bull;</span>

                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors font-bold"
                  aria-label={`Email ${companyData.contact.email}`}
                >
                  <Mail className="w-4 h-4 text-[#D96B27]" />
                  <span>{companyData.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-4 bg-white/5 border border-white/15 p-6 rounded-2xl backdrop-blur-xs">
              <span className="text-xs uppercase tracking-wider font-extrabold text-[#F3D8C7] block mb-2">
                DIRECT CONSULTATION
              </span>
              <p className="text-xs text-[#E8E6E1] leading-relaxed mb-4">
                Speak directly with our team regarding plot dimensions, structural requirements, and milestone-based civil estimates.
              </p>
              <div className="text-xs text-white/80 font-medium space-y-1.5 border-t border-white/10 pt-3">
                <div>&bull; Low-rise structures up to 4–5 floors</div>
                <div>&bull; Rohini, Pitampura &amp; Delhi NCR</div>
                <div>&bull; Attentive on-site supervision</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
