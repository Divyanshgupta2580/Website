import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { companyData } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0D0F] border-t border-[#2A3035] text-[#A7ADB3] pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Corporate Identification & Value Tag */}
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
                  Construction. Engineering. Materials.
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#A7ADB3] leading-relaxed max-w-md">
              A vertically integrated entity combining large-scale civil contracting, precision real-estate development, and direct building material supply under one trusted name.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-xs">
                <div className="w-8 h-8 border border-[#2A3035] bg-[#15191D] flex items-center justify-center text-[#B89A63] flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#667582] block">Phone</span>
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
                  <span className="text-[10px] uppercase tracking-wider text-[#667582] block">Email</span>
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

          {/* Three Divisions Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Division 1: Construction */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                1. Construction
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/services/turnkey-construction" className="hover:text-[#B89A63] transition-colors">
                    Turnkey Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-construction" className="hover:text-[#B89A63] transition-colors">
                    Commercial Towers
                  </Link>
                </li>
                <li>
                  <Link href="/services/industrial-construction" className="hover:text-[#B89A63] transition-colors">
                    Industrial &amp; PEB
                  </Link>
                </li>
                <li>
                  <Link href="/services/residential-construction" className="hover:text-[#B89A63] transition-colors">
                    Residential Estates
                  </Link>
                </li>
                <li>
                  <Link href="/services/renovation-remodeling" className="hover:text-[#B89A63] transition-colors">
                    Adaptive Renovation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-[#B89A63] inline-flex items-center gap-1 pt-1 font-medium">
                    All Services <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Division 2: Real Estate */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                2. Real Estate
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/real-estate" className="hover:text-[#B89A63] transition-colors">
                    Current Developments
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="hover:text-[#B89A63] transition-colors">
                    Commercial Suites
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="hover:text-[#B89A63] transition-colors">
                    Gated Enclaves
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="hover:text-[#B89A63] transition-colors">
                    Joint Development (JDA)
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="hover:text-[#B89A63] transition-colors">
                    RERA Governance
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="text-[#B89A63] inline-flex items-center gap-1 pt-1 font-medium">
                    Property Portfolio <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Division 3: Building Materials */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                3. Materials
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/materials/cement" className="hover:text-[#B89A63] transition-colors">
                    Cement (OPC / PPC)
                  </Link>
                </li>
                <li>
                  <Link href="/materials/bricks-blocks" className="hover:text-[#B89A63] transition-colors">
                    Bricks &amp; AAC Blocks
                  </Link>
                </li>
                <li>
                  <Link href="/materials/sand-aggregates" className="hover:text-[#B89A63] transition-colors">
                    Sand &amp; Aggregates
                  </Link>
                </li>
                <li>
                  <Link href="/materials/shuttering-plywood" className="hover:text-[#B89A63] transition-colors">
                    Shuttering Plywood
                  </Link>
                </li>
                <li>
                  <Link href="/materials/hardware" className="hover:text-[#B89A63] transition-colors">
                    Hardware &amp; Fasteners
                  </Link>
                </li>
                <li>
                  <Link href="/materials/cover-blocks" className="hover:text-[#B89A63] transition-colors">
                    Concrete Cover Blocks
                  </Link>
                </li>
                <li>
                  <Link href="/materials/tarpaulins-site-essentials" className="hover:text-[#B89A63] transition-colors">
                    Tarpaulins &amp; Essentials
                  </Link>
                </li>
                <li>
                  <Link href="/materials" className="text-[#B89A63] inline-flex items-center gap-1 pt-1 font-medium">
                    All Materials <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#667582]">
          <div>
            &copy; {currentYear} {companyData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#A7ADB3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#A7ADB3] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/faqs" className="hover:text-[#A7ADB3] transition-colors">
              Regulatory FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
