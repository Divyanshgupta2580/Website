import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { companyData } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#18324A] text-[#E8E6E1] pt-16 pb-24 lg:pb-12 border-t border-[#102232]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Identification & Value Tag */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-sm bg-white text-[#18324A] flex items-center justify-center font-extrabold text-base shadow-xs">
                GG
              </div>
              <div>
                <span className="text-lg font-extrabold text-white block leading-tight">
                  GG Construction Co.
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#F3D8C7] font-bold block mt-0.5">
                  Building Construction
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#E8E6E1]/90 leading-relaxed max-w-md">
              Specialized in low-rise residential and commercial building construction up to 4–5 floors. GG Construction Co. has carried out construction work across Rohini, Pitampura and nearby areas of Delhi with disciplined site supervision and transparent milestone billing.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-xs">
                <div className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center text-[#D96B27] flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A0AEC0] block font-bold">
                    Phone
                  </span>
                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="text-sm font-semibold text-white hover:text-[#F3D8C7] transition-colors"
                    aria-label={`Call GG Construction Co. at ${companyData.contact.phoneFormatted}`}
                  >
                    {companyData.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <div className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center text-[#D96B27] flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A0AEC0] block font-bold">
                    Email
                  </span>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-sm font-semibold text-white hover:text-[#F3D8C7] transition-colors break-all"
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
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4 pb-2 border-b border-white/10">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Construction Services */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4 pb-2 border-b border-white/10">
                Construction Services
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <Link href="/services/residential-construction" className="hover:text-white transition-colors">
                    Residential Building Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-construction" className="hover:text-white transition-colors">
                    Low-Rise Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/shop-office-construction" className="hover:text-white transition-colors">
                    Shop &amp; Office Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/renovation-remodeling" className="hover:text-white transition-colors">
                    Renovation &amp; Structural Improvement
                  </Link>
                </li>
                <li>
                  <Link href="/services/construction-planning" className="hover:text-white transition-colors">
                    Construction Planning &amp; Execution
                  </Link>
                </li>
                <li className="pt-2">
                  <Link href="/get-a-quote" className="text-[#F3D8C7] hover:text-[#D96B27] inline-flex items-center gap-1 font-bold">
                    Get a Quote <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Standards & Operational Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A0AEC0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D96B27]" aria-hidden="true" />
            <span>&copy; {currentYear} GG Construction Co. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/faqs" className="hover:text-white transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
