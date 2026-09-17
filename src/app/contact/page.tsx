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
    <div className="pt-24 pb-20 bg-[#F4F2EE]">
      {/* 1. Main Architectural Editorial Contact Section */}
      <ContactSection isPageHeader={true} />

      {/* 2. Direct Digital Enquiry Desk (Form) */}
      <section
        id="enquiry-form"
        aria-labelledby="enquiry-form-heading"
        className="pt-8 pb-16 bg-[#F4F2EE] relative"
      >
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#D96B27]" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#18324A]">
                  Direct Enquiry Desk
                </span>
              </div>
              <h2
                id="enquiry-form-heading"
                className="text-2xl sm:text-3xl font-bold text-[#18324A] tracking-tight"
              >
                Send a Construction Enquiry
              </h2>
              <p className="text-sm text-[#66717A] mt-1.5 leading-relaxed">
                Submit your construction requirements, residential build plans, or renovation scope directly to our team. Reviewed promptly with practical advice and pricing guidance.
              </p>
            </div>

            <Suspense
              fallback={
                <div className="p-8 bg-white border border-[#D5D4D0] rounded-none text-xs text-[#66717A]">
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
