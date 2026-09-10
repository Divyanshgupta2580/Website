import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Compass, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyData } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0D0F]">
      {/* Cinematic Background Architectural Image */}
      <div className="absolute inset-0 z-0 bg-[#0B0D0F]">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
          alt="Monolithic architectural commercial high-rise tower"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 object-center"
        />
        {/* Gradient Scrim for Editorial Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F] via-[#0B0D0F]/60 to-transparent" />
        <div className="absolute inset-0 bg-architectural-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Division Synergy Eyebrow Badge */}
          <div className="inline-flex items-center gap-3 p-1.5 pr-4 mb-6 bg-[#15191D]/80 border border-[#2A3035] backdrop-blur-md">
            <span className="w-2 h-2 rounded-none bg-[#B89A63]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#F3F1EC]">
              Three Integrated Divisions &bull; One Accountable Partner
            </span>
          </div>

          {/* Main Architectural Display Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F3F1EC] leading-[1.1] mb-6">
            Building Strong Foundations.{" "}
            <span className="text-[#B89A63] font-normal block sm:inline">
              Creating Better Futures.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#A7ADB3] leading-relaxed max-w-2xl mb-10">
            {companyData.heroSupportingText}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <Button
              href="/get-a-quote"
              variant="primary"
              size="lg"
              className="group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <Button
              href="/projects"
              variant="outline"
              size="lg"
            >
              Explore Our Projects
            </Button>
          </div>

          {/* Bottom Trust Indicators Grid */}
          <div className="pt-8 border-t border-[#2A3035]/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#A7ADB3]">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[#F3F1EC] font-semibold block uppercase tracking-wider text-[11px]">
                  Turnkey Certainty
                </span>
                <span className="text-[11px] leading-snug block mt-0.5">
                  Single-point contract risk from soil testing through occupancy.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Compass className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[#F3F1EC] font-semibold block uppercase tracking-wider text-[11px]">
                  Code Compliance
                </span>
                <span className="text-[11px] leading-snug block mt-0.5">
                  Seismic Zone IV/V engineering adhering to IS 456 & NBC 2016.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Layers className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[#F3F1EC] font-semibold block uppercase tracking-wider text-[11px]">
                  In-House Materials
                </span>
                <span className="text-[11px] leading-snug block mt-0.5">
                  Direct primary steel & cement supply eliminating site delays.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
