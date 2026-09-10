import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ShieldCheck, AlertCircle } from "lucide-react";
import { companyData } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0D0F] border-t border-[#2A3035] text-[#A7ADB3] pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Corporate Identification & Value Tag */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A3035]">
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 border border-[#B89A63] bg-[#15191D] flex items-center justify-center text-[#B89A63] font-serif font-bold text-base">
                GG
              </div>
              <div>
                <span className="text-lg font-medium text-[#F3F1EC] block">
                  GG Construction Co.
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A7ADB3]">
                  {companyData.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#A7ADB3] leading-relaxed max-w-md">
              A vertically integrated engineering entity combining large-scale civil contracting, precision real-estate development, and direct-from-mill building material supply under certified engineering standards.
            </p>

            {/* Corporate Compliance Note */}
            <div className="p-3.5 bg-[#15191D] border border-[#2A3035] flex items-start gap-3 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[#F3F1EC] font-medium block mb-0.5">
                  Statutory & Standards Compliance
                </span>
                <span className="text-[11px] text-[#A7ADB3] leading-snug block">
                  Operated in strict adherence to Indian Standards (IS), NBC 2016 fire safety codes, and state RERA regulations.
                </span>
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
                    Industrial & PEB
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
                    All 9 Services <ArrowUpRight className="w-3 h-3" />
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
                    Upcoming Enclaves
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="hover:text-[#B89A63] transition-colors">
                    Completed Residences
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="hover:text-[#B89A63] transition-colors">
                    Industrial Land Parcels
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#B89A63] transition-colors">
                    Land Joint Ventures
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="text-[#B89A63] inline-flex items-center gap-1 pt-1 font-medium">
                    Browse Properties <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Division 3: Materials */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                3. Materials Supply
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/materials/cement" className="hover:text-[#B89A63] transition-colors">
                    OPC & PPC Cement
                  </Link>
                </li>
                <li>
                  <Link href="/materials/tmt-steel" className="hover:text-[#B89A63] transition-colors">
                    Fe 500D Primary TMT
                  </Link>
                </li>
                <li>
                  <Link href="/materials/bricks-blocks" className="hover:text-[#B89A63] transition-colors">
                    AAC Blocks & Bricks
                  </Link>
                </li>
                <li>
                  <Link href="/materials/sand" className="hover:text-[#B89A63] transition-colors">
                    VSI M-Sand & P-Sand
                  </Link>
                </li>
                <li>
                  <Link href="/materials/aggregates" className="hover:text-[#B89A63] transition-colors">
                    Coarse Aggregates
                  </Link>
                </li>
                <li>
                  <Link href="/materials" className="text-[#B89A63] inline-flex items-center gap-1 pt-1 font-medium">
                    All 9 Categories <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Information Bar: Contacts & Office */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-[#2A3035] text-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[#F3F1EC] font-medium block">Head Office</span>
              <span className="text-[#A7ADB3] leading-relaxed block mt-1">
                {companyData.contact.address.full}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[#F3F1EC] font-medium block">Direct Inquiries</span>
              <a
                href={`tel:${companyData.contact.phone}`}
                className="text-[#A7ADB3] hover:text-[#B89A63] block mt-1"
              >
                {companyData.contact.phoneFormatted}
              </a>
              <span className="text-[11px] text-[#667582] block">
                {companyData.contact.officeHours}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[#F3F1EC] font-medium block">Electronic Mail</span>
              <a
                href={`mailto:${companyData.contact.enquiryEmail}`}
                className="text-[#A7ADB3] hover:text-[#B89A63] block mt-1"
              >
                {companyData.contact.enquiryEmail}
              </a>
              <span className="text-[11px] text-[#667582] block">
                Response within 24 business hours
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[#F3F1EC] font-medium block">Knowledge & FAQs</span>
              <div className="mt-1 space-x-3">
                <Link href="/blog" className="text-[#A7ADB3] hover:text-[#B89A63]">
                  Insights
                </Link>
                <span>&bull;</span>
                <Link href="/faqs" className="text-[#A7ADB3] hover:text-[#B89A63]">
                  FAQs
                </Link>
                <span>&bull;</span>
                <Link href="/testimonials" className="text-[#A7ADB3] hover:text-[#B89A63]">
                  Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Disclosure Alert */}
        <div className="my-8 p-4 bg-[#15191D]/60 border border-[#2A3035] flex items-start gap-3 text-xs">
          <AlertCircle className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
          <p className="text-[#A7ADB3] leading-relaxed text-[11px]">
            <strong className="text-[#F3F1EC] font-medium">Data Integrity Notice:</strong> Unverified company metrics, partner dealership claims, and specific project contract values on this website are represented with explicit placeholders (e.g. <span className="text-[#B89A63]">[VERIFY COMPANY EXPERIENCE]</span>). All placeholders are isolated in centralized data models for client verification prior to official release.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#667582]">
          <div>
            &copy; {currentYear} {companyData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#A7ADB3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#A7ADB3] transition-colors">
              Terms & Conditions
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
