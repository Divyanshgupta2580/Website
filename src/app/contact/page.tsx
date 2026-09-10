import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import Button from "@/components/ui/Button";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | GG Construction Co.",
  description:
    "Get in touch with GG Construction Co. Dedicated enquiry paths for building materials supply, building construction, and real estate sales assistance.",
};

const enquiryOptions = [
  {
    title: "Building Materials Supply",
    description: "For cement, TMT steel, bricks, blocks, sand, aggregates, plumbing, electrical, and construction supplies.",
    query: "materials",
  },
  {
    title: "Building Construction",
    description: "For residential buildings, small offices, shops, low-rise buildings (up to 4–5 floors), and renovation work.",
    query: "construction",
  },
  {
    title: "Real Estate Sales & Assistance",
    description: "For property sales assistance, marketing opportunities, and buyer-seller coordination.",
    query: "real-estate",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B89A63]">
              CONTACT GG CONSTRUCTION CO.
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Let’s Build Something Great Together.
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Have a building material requirement, construction project, or real-estate enquiry? Get in touch with the GG Construction Co. team.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid: Form + Direct Contact Actions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 relative">
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B89A63] to-transparent"
                aria-hidden="true"
              />
              <div className="mb-6 pb-4 border-b border-[#2A3035]">
                <h2 className="text-lg font-medium text-[#F3F1EC]">
                  Send an Enquiry
                </h2>
                <p className="text-xs text-[#A7ADB3] mt-1">
                  Submissions are reviewed by our team within 24 business hours.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="p-8 bg-[#15191D] border border-[#2A3035] text-xs text-[#A7ADB3]">
                    Loading enquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>

          {/* Right Column: Prominent Contact Actions & Dedicated Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Action Card */}
            <a
              href={`tel:${companyData.contact.phone}`}
              className="group block p-6 sm:p-7 bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A63]"
              aria-label={`Call Phone: ${companyData.contact.phoneFormatted}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#2A3035] bg-[#1D2227] group-hover:border-[#B89A63] flex items-center justify-center text-[#B89A63] transition-colors">
                    <Phone className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#A7ADB3] group-hover:text-[#F3F1EC] transition-colors block">
                      Phone
                    </span>
                    <span className="text-[10px] text-[#667582] block">
                      Direct Helpline
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#667582] group-hover:text-[#B89A63] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="text-xl sm:text-2xl font-light font-mono text-[#F3F1EC] group-hover:text-[#D0B47A] transition-colors tracking-tight">
                {companyData.contact.phoneFormatted}
              </div>
            </a>

            {/* Email Action Card */}
            <a
              href={`mailto:${companyData.contact.email}`}
              className="group block p-6 sm:p-7 bg-[#15191D] border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A63]"
              aria-label={`Send Email: ${companyData.contact.email}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#2A3035] bg-[#1D2227] group-hover:border-[#B89A63] flex items-center justify-center text-[#B89A63] transition-colors">
                    <Mail className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#A7ADB3] group-hover:text-[#F3F1EC] transition-colors block">
                      Email
                    </span>
                    <span className="text-[10px] text-[#667582] block">
                      Direct Inquiries &amp; Orders
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#667582] group-hover:text-[#B89A63] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="text-lg sm:text-xl font-light font-mono text-[#F3F1EC] group-hover:text-[#D0B47A] transition-colors tracking-tight break-all">
                {companyData.contact.email}
              </div>
            </a>

            {/* Estimation Desk Banner */}
            <div className="p-6 bg-[#15191D] border border-[#2A3035] space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#B89A63] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-[#F3F1EC]">
                    Need Material or Construction Estimates?
                  </h3>
                  <p className="text-xs text-[#A7ADB3] leading-relaxed mt-1">
                    Use our structured estimation desk to configure material orders, project scale, and delivery parameters.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/get-a-quote"
                  variant="primary"
                  size="sm"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
                <Button
                  href={`mailto:${companyData.contact.email}`}
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <span>Email Us</span>
                </Button>
              </div>
            </div>

            {/* Dedicated Enquiry Paths */}
            <div className="bg-[#15191D] border border-[#2A3035] p-6 space-y-4">
              <div className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#B89A63]">
                Dedicated Enquiry Channels
              </div>

              <div className="space-y-3">
                {enquiryOptions.map((opt) => (
                  <Link
                    key={opt.title}
                    href={`/contact?division=${opt.query}`}
                    className="group block p-3.5 bg-[#1D2227]/70 border border-[#2A3035] hover:border-[#B89A63]/60 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors">
                        {opt.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#667582] group-hover:text-[#B89A63] transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                    <p className="text-[11px] text-[#A7ADB3] leading-normal mt-1">
                      {opt.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
