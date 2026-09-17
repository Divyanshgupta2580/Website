import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | GG Construction Co. — Building Construction",
  description:
    "Privacy Policy and data protection standards governing communications, project enquiries, and quotation requests submitted to GG Construction Co.",
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
              Data Protection &amp; Confidentiality
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light text-[#F3F1EC] mb-2">
            Privacy Policy &amp; Data Protection
          </h1>
          <p className="text-xs font-mono text-[#667582]">
            Effective Date: October 2024 &bull; Last Reviewed: {new Date().getFullYear()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#A7ADB3] leading-relaxed space-y-8 font-light">
          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              1. Business Entity &amp; Scope
            </h2>
            <p>
              This Privacy Policy governs the collection, processing, and protection of information submitted to {companyData.name} (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;), a building construction contractor specializing in low-rise residential and commercial construction up to 4–5 floors.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect information strictly necessary to evaluate construction projects, provide itemized estimates, and coordinate on-site execution:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-[#F3F1EC]">
              <li>Contact details: Name, email address, and telephone number.</li>
              <li>Project scope details: Plot or site location, approximate floor area, required room/floor count, and timeline expectations.</li>
              <li>Technical records: Server access logs and IP addresses used solely for abuse prevention and rate-limiting.</li>
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
              <li>Preparing construction feasibility assessments and stage-wise quotation estimates.</li>
              <li>Communicating directly with project owners regarding project scopes and schedules.</li>
              <li>Complying with statutory reporting mandates under Indian tax and commercial legislation.</li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or lease customer contact details or project specifications to third-party marketing services under any circumstance.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              4. Commercial Confidentiality
            </h2>
            <p>
              Architectural blueprints, layout drawings, and project notes submitted through our contact or quote forms are treated as private and confidential between the client and GG Construction Co.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              5. Data Security Protections
            </h2>
            <p>
              We implement industry-standard technological safeguards including TLS encryption in transit, strict Content Security Policies (CSP), input sanitization, automated rate-limiting against spam, and secure server-side validation.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-[#F3F1EC] mb-2">
              6. Contact &amp; Enquiries
            </h2>
            <p>
              For any questions regarding this policy or your project enquiry data, please contact:
            </p>
            <div className="p-4 bg-[#15191D] border border-[#2A3035] mt-2 font-mono text-xs">
              <span className="block text-[#F3F1EC] font-semibold">GG Construction Co.</span>
              <span className="block text-[#A7ADB3] mt-0.5">Phone: {companyData.contact.phoneFormatted}</span>
              <span className="block text-[#B89A63] mt-1">Email: {companyData.contact.email}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
