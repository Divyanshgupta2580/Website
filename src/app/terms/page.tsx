import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Contractual Framework",
  description:
    "Terms and conditions governing web portal usage, preliminary quotations, engineering estimates, and commercial communications with GG Construction Co.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7ADB3] hover:text-[#B89A63] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#2A3035] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <Scale className="w-4 h-4 text-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Contractual & Legal Governance
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light text-[#F3F1EC] mb-2">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs font-mono text-[#667582]">
            Governing Law: Republic of India &bull; Last Revised: {new Date().getFullYear()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#A7ADB3] leading-relaxed space-y-8 font-light">
          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or submitting project parameters via this website operated by {companyData.name}, you agree to be bound by these Terms and Conditions. These terms apply across all three operating verticals: Construction & Engineering, Real Estate & Property Development, and Building Materials Supply.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              2. Nature of Preliminary Online Estimates
            </h2>
            <p>
              All cost indications, Bill of Quantities (BOQ) figures, and schedules generated through the &ldquo;Get a Quote&rdquo; tool or initial correspondence represent preliminary indicative calculations. They do NOT constitute binding construction contracts or irrevocable legal tenders until confirmed by:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-[#F3F1EC]">
              <li>Physical geotechnical site soil bore verification.</li>
              <li>Verification of signed architectural blueprints and structural engineering calculations.</li>
              <li>Execution of formal written EPC / Turnkey / Supply Agreements signed by authorized corporate signatories.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              3. Material Specifications & Mill Tolerances
            </h2>
            <p>
              All building materials (including TMT steel rebars, cements, manufactured sand, and coarse aggregates) are supplied subject to standard Bureau of Indian Standards (BIS) manufacturing tolerances (e.g., IS 1786 weight-per-meter tolerances for rebars). Invoices and dispatches are settled strictly based on certified weighbridge gross and tare readouts.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              4. Real Estate Disclosures & Statutory Compliance
            </h2>
            <p>
              Information regarding real estate developments is published in compliance with the Real Estate (Regulation and Development) Act (RERA). Visual renderings, mock-ups, and architectural representations are artistic impressions intended to convey general design direction. Sanctioned master plans, apartment carpet areas, and statutory RERA registration numbers supersede website visual assets.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              5. Intellectual Property & Digital Rights
            </h2>
            <p>
              All blueprints, case study documentation, photography, custom code, technical articles, and brand marks displayed on this domain remain the exclusive intellectual property of {companyData.name}. Unauthorized extraction, automated scraping, or unauthorized commercial reproduction is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              6. Dispute Resolution & Jurisdiction
            </h2>
            <p>
              Any disputes arising out of web inquiries or commercial transactions shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent civil courts of the company&apos;s registered corporate seat.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
