import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-[#0B0D0F] px-4">
      <div className="max-w-md w-full text-center bg-[#15191D] border border-[#2A3035] p-8 sm:p-12">
        <div className="w-14 h-14 mx-auto mb-6 bg-[#1D2227] border border-[#2A3035] flex items-center justify-center text-[#B89A63]">
          <Compass className="w-7 h-7" />
        </div>

        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B89A63] block mb-2">
          ERROR // 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-3">
          Blueprint Not Found
        </h1>

        <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-8">
          The project coordinate, service specification, or page you requested does not exist or has been relocated to another division.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="sm" className="w-full sm:w-auto">
            <span>Return to Home</span>
          </Button>
          <Button href="/services" variant="outline" size="sm" className="w-full sm:w-auto">
            <span>Explore Services</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
