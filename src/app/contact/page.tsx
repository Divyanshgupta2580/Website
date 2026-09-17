import React, { Suspense } from "react";
import { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";
import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact Us | GG Construction Co. — Building Construction",
  description:
    "Get in touch with GG Construction Co. for residential and commercial building construction, builder floor execution, and renovations across Rohini, Pitampura, and Delhi.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0B0D0F]">
      {/* 1. Main Architectural Editorial Contact Section */}
      <ContactSection isPageHeader={true} />

      {/* 2. Direct Digital Enquiry Desk (Form) */}
      <section
        id="enquiry-form"
        aria-labelledby="enquiry-form-heading"
        className="pt-8 pb-16 bg-[#0B0D0F] relative"
      >
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono text-[#B89A63]">02</span>
                <span className="text-[#667582]">/</span>
                <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#A7ADB3]">
                  DIRECT ENQUIRY DESK
                </span>
              </div>
              <h2
                id="enquiry-form-heading"
                className="text-2xl sm:text-3xl font-light text-[#F3F1EC] tracking-tight"
              >
                Send a Construction Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB3] mt-1.5 leading-relaxed">
                Submit your construction requirements, residential build plans, or renovation scope directly to our team. Reviewed promptly with practical advice and pricing guidance.
              </p>
            </div>

            <Suspense
              fallback={
                <div className="p-8 bg-[#15191D] border border-[#2A3035] text-xs font-mono text-[#A7ADB3]">
                  Loading enquiry form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </div>
  );
}
