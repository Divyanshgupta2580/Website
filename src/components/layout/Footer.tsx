import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { companyData } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0D0F] border-t border-[#2A3035] text-[#A7ADB3] pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Identification & Value Tag */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A3035]">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 border border-[#B89A63] bg-[#15191D] flex items-center justify-center text-[#B89A63] font-serif font-bold text-base">
                GG
              </div>
              <div>
                <span className="text-lg font-medium text-[#F3F1EC] block">
                  GG Construction Co.
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89A63] font-medium block mt-0.5">
                  Building Construction
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#A7ADB3] leading-relaxed max-w-md">
              Specialized in low-rise residential and commercial building construction up to 4–5 floors. GG Construction Co. has carried out construction work across Rohini, Pitampura and nearby areas of Delhi with disciplined site supervision and transparent milestone billing.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-xs">
                <div className="w-8 h-8 border border-[#2A3035] bg-[#15191D] flex items-center justify-center text-[#B89A63] flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#667582] block">
                    Phone
                  </span>
                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="text-sm font-medium text-[#F3F1EC] hover:text-[#B89A63] transition-colors font-mono"
                    aria-label={`Call GG Construction Co. at ${companyData.contact.phoneFormatted}`}
                  >
                    {companyData.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <div className="w-8 h-8 border border-[#2A3035] bg-[#15191D] flex items-center justify-center text-[#B89A63] flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#667582] block">
                    Email
                  </span>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-sm font-medium text-[#F3F1EC] hover:text-[#B89A63] transition-colors font-mono break-all"
                    aria-label={`Email GG Construction Co. at ${companyData.contact.email}`}
                  >
                    {companyData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Useful Links */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                Useful Links
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/" className="hover:text-[#B89A63] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#B89A63] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#B89A63] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#B89A63] transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#B89A63] transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-[#B89A63] transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#B89A63] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#B89A63] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#B89A63] transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Construction Services */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                Construction Services
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/services/residential-construction" className="hover:text-[#B89A63] transition-colors">
                    Residential Building Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-construction" className="hover:text-[#B89A63] transition-colors">
                    Low-Rise Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/shop-office-construction" className="hover:text-[#B89A63] transition-colors">
                    Shop &amp; Office Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/renovation-remodeling" className="hover:text-[#B89A63] transition-colors">
                    Renovation &amp; Structural Improvement
                  </Link>
                </li>
                <li>
                  <Link href="/services/construction-planning" className="hover:text-[#B89A63] transition-colors">
                    Construction Planning &amp; Execution
                  </Link>
                </li>
                <li>
                  <Link href="/get-a-quote" className="text-[#B89A63] inline-flex items-center gap-1 pt-2 font-medium">
                    Get a Quote <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Standards & Operational Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#667582]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-none bg-[#B89A63]" aria-hidden="true" />
            <span>&copy; {currentYear} GG Construction Co. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#A7ADB3] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-[#A7ADB3] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/faqs" className="hover:text-[#A7ADB3] transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
