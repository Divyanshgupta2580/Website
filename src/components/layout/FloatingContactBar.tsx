"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Calculator } from "lucide-react";
import { companyData } from "@/data/company";

export default function FloatingContactBar() {
  return (
    <aside
      aria-label="Quick contact and estimation actions"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#0B0D0F]/95 backdrop-blur-md border-t border-[#2A3035] py-2 px-3 safe-area-bottom shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={`tel:${companyData.contact.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-none border border-[#2A3035] bg-[#15191D] text-[#F3F1EC] active:bg-[#22282E]"
          aria-label={`Call GG Construction Co. at ${companyData.contact.phoneFormatted}`}
        >
          <Phone className="w-4 h-4 text-[#B89A63] mb-0.5" />
          <span className="text-[10px] font-medium tracking-wider uppercase">
            Call
          </span>
        </a>

        {/* Email Action */}
        <a
          href={`mailto:${companyData.contact.email}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-none border border-[#2A3035] bg-[#15191D] text-[#F3F1EC] active:bg-[#22282E]"
          aria-label={`Email GG Construction Co. at ${companyData.contact.email}`}
        >
          <Mail className="w-4 h-4 text-[#B89A63] mb-0.5" />
          <span className="text-[10px] font-medium tracking-wider uppercase">
            Email
          </span>
        </a>

        {/* Get Quote Action */}
        <Link
          href="/get-a-quote"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-none bg-[#B89A63] text-[#0B0D0F] font-semibold active:bg-[#D0B47A]"
          aria-label="Get a Project Quote"
        >
          <Calculator className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase">
            Get Quote
          </span>
        </Link>
      </div>
    </aside>
  );
}
