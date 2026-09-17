import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import { companyData } from "@/data/company";

export default function ConversionCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE]">
      <Container size="default">
        <div className="bg-[#18324A] text-white p-8 sm:p-12 lg:p-16 rounded-none relative overflow-hidden border border-[#102232]">
          {/* Subtle Top Orange Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D96B27]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-[#D96B27]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F3D8C7]">
                  CONTACT US
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                PLANNING A CONSTRUCTION PROJECT?
              </h2>

              <p className="text-base sm:text-lg text-[#E8E6E1] leading-relaxed mb-8 max-w-2xl">
                Tell us about your building requirement and we&apos;ll get in touch. We build low-rise residential homes, builder floors, shops, and offices across Rohini, Pitampura, and nearby areas of Delhi.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#D96B27] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#B9551D] rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>GET A QUOTE</span>
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 border border-[#18324A] bg-white px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#18324A] transition-colors hover:bg-[#18324A] hover:text-white rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>VIEW PROJECTS</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Direct Contact Row */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-sm text-[#E8E6E1]">
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors font-medium text-xs sm:text-sm"
                  aria-label={`Email ${companyData.contact.email}`}
                >
                  <Mail className="w-4 h-4 text-[#D96B27]" />
                  <span>gunjan29gupta@gmail.com</span>
                </a>

                <span className="text-white/30 hidden sm:inline">&bull;</span>

                <span className="text-xs text-[#E8E6E1]/80">
                  Rohini &bull; Pitampura &bull; Delhi NCR
                </span>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="lg:col-span-4 bg-white/5 border border-white/15 p-6 rounded-none">
              <span className="text-xs font-mono uppercase tracking-wider font-extrabold text-[#D96B27] block mb-2">
                DIRECT CONSULTATION
              </span>
              <p className="text-xs text-[#E8E6E1] leading-relaxed mb-4">
                Speak directly with our team regarding plot dimensions, structural requirements, and milestone-based civil estimates.
              </p>
              <div className="text-xs text-white/80 font-medium space-y-2 border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D96B27]" />
                  <span>Low-rise structures up to 4–5 floors</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D96B27]" />
                  <span>Rohini, Pitampura &amp; Delhi NCR</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D96B27]" />
                  <span>Daily on-site supervision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
