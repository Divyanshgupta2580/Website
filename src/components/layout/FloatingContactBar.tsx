"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Calculator } from "lucide-react";
import { companyData } from "@/data/company";

export default function FloatingContactBar() {
  return (
    <aside
      aria-label="Quick contact and estimation actions"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#D5D4D0] py-2.5 px-3 safe-area-bottom shadow-sm rounded-none"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={`tel:${companyData.contact.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-none border border-[#D5D4D0] bg-[#F4F2EE] text-[#18324A] active:bg-[#E8E6E1] transition-colors"
          aria-label={`Call GG Construction Co. at ${companyData.contact.phoneFormatted}`}
        >
          <Phone className="w-4 h-4 text-[#D96B27] mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">
            Call
          </span>
        </a>

        {/* Email Action */}
        <a
          href={`mailto:${companyData.contact.email}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-none border border-[#D5D4D0] bg-[#F4F2EE] text-[#18324A] active:bg-[#E8E6E1] transition-colors"
          aria-label={`Email GG Construction Co. at ${companyData.contact.email}`}
        >
          <Mail className="w-4 h-4 text-[#D96B27] mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">
            Email
          </span>
        </a>

        {/* Get Quote Action */}
        <Link
          href="/get-a-quote"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-none bg-[#D96B27] text-white font-bold active:bg-[#B9551D] transition-colors"
          aria-label="Get a Project Quote"
        >
          <Calculator className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">
            Get Quote
          </span>
        </Link>
      </div>
    </aside>
  );
}
