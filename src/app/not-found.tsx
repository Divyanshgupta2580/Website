import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 bg-[#F4F2EE] px-4">
      <div className="max-w-md w-full text-center bg-white border border-[#D5D4D0] p-8 sm:p-12 shadow-sm">
        <div className="w-14 h-14 mx-auto mb-6 bg-[#F3D8C7]/50 border border-[#D96B27]/30 flex items-center justify-center text-[#D96B27]">
          <Compass className="w-7 h-7" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#D96B27] block mb-2">
          Page Not Found (404)
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#18324A] mb-3">
          Page Not Located
        </h1>

        <p className="text-sm text-[#66717A] leading-relaxed mb-8">
          The page or project details you requested could not be found. You can return to our homepage or view our construction services.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="sm" className="w-full sm:w-auto">
            <span>Return to Homepage</span>
          </Button>
          <Button href="/services" variant="outline" size="sm" className="w-full sm:w-auto">
            <span>View Services</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
