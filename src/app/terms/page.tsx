import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | GG Construction Co. — Building Construction",
  description:
    "Terms and conditions governing website usage, preliminary construction estimates, and project communications with GG Construction Co.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#F4F2EE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#66717A] hover:text-[#D96B27] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#D5D4D0] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <Scale className="w-4 h-4 text-[#D96B27]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D96B27]">
              Website Terms of Use
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18324A] mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-[#66717A]">
            Governing Law: Republic of India &bull; Last Revised: {new Date().getFullYear()}
          </p>
        </div>

        <div className="max-w-none text-sm text-[#66717A] leading-relaxed space-y-8">
          <section className="bg-white p-6 sm:p-8 border border-[#D5D4D0] shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-[#18324A] mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#20272D]">
              By accessing, browsing, or submitting construction enquiries via this website operated by {companyData.name}, you agree to be bound by these Terms and Conditions. Our business is strictly building construction focused on low-rise residential and commercial projects up to approximately 4–5 floors.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 border border-[#D5D4D0] shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-[#18324A] mb-2">
              2. Nature of Preliminary Online Estimates
            </h2>
            <p className="text-[#20272D]">
              All cost indications, stage schedules, and estimates generated through the &ldquo;Get a Quote&rdquo; form or preliminary correspondence represent indicative estimates for planning purposes. They do not constitute a binding construction contract until verified by:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-[#20272D]">
              <li>Physical plot inspection and measurement verification.</li>
              <li>Verification of sanctioned architectural floor plans and structural drawings.</li>
              <li>Execution of a mutually agreed, written construction agreement detailing stage-wise payment milestones and project scope.</li>
            </ul>
          </section>

          <section className="bg-white p-6 sm:p-8 border border-[#D5D4D0] shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-[#18324A] mb-2">
              3. Structural Standards &amp; Site Supervision
            </h2>
            <p className="text-[#20272D]">
              All building construction work executed by GG Construction Co. follows standard building safety norms (IS 456 for concrete and masonry standards) with scheduled on-site supervision. Stage completion certificates and milestone sign-offs are conducted jointly with the client before advancing to subsequent structural stages.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 border border-[#D5D4D0] shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-[#18324A] mb-2">
              4. Intellectual Property
            </h2>
            <p className="text-[#20272D]">
              All content, photography, branding, and text displayed on this website remain the property of {companyData.name}. Unauthorized scraping or reproduction for commercial purposes is prohibited.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 border border-[#D5D4D0] shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-[#18324A] mb-2">
              5. Dispute Resolution &amp; Jurisdiction
            </h2>
            <p className="text-[#20272D]">
              Any disputes or matters arising out of web communications or construction agreements shall be subject to the jurisdiction of the competent courts in Delhi, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
