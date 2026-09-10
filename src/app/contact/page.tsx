import React, { Suspense } from "react";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | Three Dedicated Enquiry Channels",
  description:
    "Get in touch with GG Construction Co. Dedicated enquiry paths for civil construction, real estate developments, and bulk building material supply.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello%20GG%20Construction%20Co.,%20I%20would%20like%20to%20inquire%20about%20your%20services.`;

  return (
    <div className="pt-28 pb-20 bg-[#0B0D0F]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B89A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              Direct Engagement Channels
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F3F1EC] leading-tight mb-6">
            Connect With Our Engineering Directorate
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB3] leading-relaxed">
            Select your specific operational division below to route your enquiry straight to the relevant civil engineers, real-estate specialists, or material dispatch team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-8 bg-[#15191D] border border-[#2A3035] text-xs text-[#A7ADB3]">Loading enquiry form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Right Column: Office Info & Quick Contacts */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-6 pb-2 border-b border-[#2A3035]">
                Immediate Direct Lines
              </h3>

              <div className="space-y-6 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#667582] uppercase text-[10px] tracking-wider block">
                      General & Engineering Helpline
                    </span>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-[#F3F1EC] hover:text-[#B89A63] font-mono text-sm font-medium mt-0.5 block"
                    >
                      {companyData.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63] flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#667582] uppercase text-[10px] tracking-wider block">
                      WhatsApp Technical Desk
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F3F1EC] hover:text-[#B89A63] font-mono text-sm font-medium mt-0.5 block"
                    >
                      {companyData.contact.whatsappFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#667582] uppercase text-[10px] tracking-wider block">
                      Tender & Drawing Submissions
                    </span>
                    <a
                      href={`mailto:${companyData.contact.enquiryEmail}`}
                      className="text-[#F3F1EC] hover:text-[#B89A63] text-xs font-mono mt-0.5 block break-all"
                    >
                      {companyData.contact.enquiryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#667582] uppercase text-[10px] tracking-wider block">
                      Operating Hours (IST)
                    </span>
                    <span className="text-[#F3F1EC] text-xs mt-0.5 block">
                      {companyData.contact.officeHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Address */}
            <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F3F1EC] mb-4 pb-2 border-b border-[#2A3035]">
                Corporate Headquarters
              </h3>
              <div className="flex items-start gap-3 text-xs text-[#A7ADB3]">
                <MapPin className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {companyData.contact.address.full}
                </p>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="mt-6 aspect-[16/9] bg-[#0B0D0F] border border-[#2A3035] flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-6 h-6 text-[#667582] mb-2" />
                <span className="text-xs font-mono text-[#F3F1EC]">
                  [VERIFY GIS MAP EMBED COORDINATES]
                </span>
                <span className="text-[10px] text-[#667582] mt-1">
                  Plot access available for heavy material trailers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
