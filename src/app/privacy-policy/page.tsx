import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Governance",
  description:
    "Privacy Policy and data protection standards governing communications, project tenders, and estimation requests submitted to GG Construction Co.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-4 h-4 text-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Corporate Data Governance
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light text-[#F3F1EC] mb-2">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-xs font-mono text-[#667582]">
            Effective Date: October 2024 &bull; Last Reviewed: {new Date().getFullYear()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#A7ADB3] leading-relaxed space-y-8 font-light">
          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              1. Corporate Entity & Scope
            </h2>
            <p>
              This Privacy Policy governs the collection, processing, and protection of information by {companyData.name} (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;), operating across our three integrated business verticals: Construction & Engineering, Real Estate & Property Development, and Building Materials Supply.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect information strictly necessary to evaluate civil engineering scopes, process real estate inquiries, generate material supply quotations, and fulfill statutory compliance mandates:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-[#F3F1EC]">
              <li>Contact details: Name, business email, telephone number, corporate entity affiliation.</li>
              <li>Project scope data: Construction location, approximate floorplate / site area, structural drawings (if uploaded), and target completion schedules.</li>
              <li>Procurement specifications: Required steel rebar grades, cement types, and dispatch destinations.</li>
              <li>Technical telemetries: Standard server access logs, IP addresses, and user-agent data used solely for abuse prevention and rate-limiting.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              3. Use of Information
            </h2>
            <p>
              Collected information is utilized exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-[#F3F1EC]">
              <li>Formulating preliminary Bill of Quantities (BOQ) and structural feasibility assessments.</li>
              <li>Fulfilling customer service inquiries regarding real estate developments and RERA disclosures.</li>
              <li>Dispatching material consignments and tracking freight transit.</li>
              <li>Complying with statutory reporting mandates under Indian corporate and tax legislation.</li>
            </ul>
            <p className="mt-2">
              We do NOT sell, lease, or monetize customer contact records or project specifications to third-party marketing brokers under any circumstance.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              4. Commercial Confidentiality & Architectural Plans
            </h2>
            <p>
              Architectural blueprints, CAD models, structural calculations, and commercial budgets submitted through our contact or quote forms are treated as proprietary trade secrets under strict internal confidentiality controls. Access is restricted strictly to licensed quantity surveyors and designated project directors.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              5. Data Security & Server Protections
            </h2>
            <p>
              We implement comprehensive technological safeguards including TLS 1.3 cryptographic transit protocols, rigorous Content Security Policies (CSP), input sanitization, automated rate-limiting against automated scraping, and strict server-side validation.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              6. Grievance Redressal & Contact
            </h2>
            <p>
              For any questions regarding this policy or to request deletion of non-statutory commercial inquiries, please contact our Legal & Compliance Officer:
            </p>
            <div className="p-4 bg-[#15191D] border border-[#2A3035] mt-2 font-mono text-xs">
              <span className="block text-[#F3F1EC] font-semibold">Legal & Compliance Cell</span>
              <span className="block text-[#A7ADB3] mt-0.5">{companyData.name}</span>
              <span className="block text-[#A7ADB3]">{companyData.contact.address.full}</span>
              <span className="block text-[#B89A63] mt-1">Email: {companyData.contact.email}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
