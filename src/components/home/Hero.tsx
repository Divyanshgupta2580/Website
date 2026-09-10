import React from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Truck, Home } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0D0F]">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0B0D0F]">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2200&q=85"
          alt="Building construction and materials supply"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 object-center"
        />
        {/* Editorial Gradients & Scrim for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F] via-[#0B0D0F]/65 to-transparent" />
        <div className="absolute inset-0 bg-architectural-grid opacity-30" />
      </div>

      <Container size="default" className="relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-3 p-1.5 pr-4 mb-6 bg-[#15191D]/80 border border-[#2A3035] backdrop-blur-md">
            <span className="w-2 h-2 rounded-none bg-[#B89A63]" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#F3F1EC]">
              Building Materials &bull; Construction &bull; Real Estate
            </span>
          </div>

          {/* Exact Required Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F3F1EC] leading-[1.08] mb-6 font-display">
            Building Materials.{" "}
            <span className="text-[#B89A63] font-normal block sm:inline">
              Construction. Real Estate.
            </span>
          </h1>

          {/* Exact Required Support Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#A7ADB3] leading-relaxed max-w-2xl mb-10 font-light">
            Reliable building materials, practical construction services and property sales assistance under one trusted name.
          </p>

          {/* Exact Required Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="group"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <Button
              href="/materials"
              variant="outline"
              size="lg"
            >
              Explore Materials
            </Button>
          </div>

          {/* Bottom Trust Indicators Grid */}
          <div className="pt-8 border-t border-[#2A3035]/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#A7ADB3]">
            <div className="flex items-start gap-3">
              <Truck className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[#F3F1EC] font-semibold block uppercase tracking-wider text-[11px]">
                  Building Materials
                </span>
                <span className="text-[11px] leading-snug block mt-0.5">
                  Direct site supply of cement, TMT steel, red bricks, sand, and aggregates.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Home className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[#F3F1EC] font-semibold block uppercase tracking-wider text-[11px]">
                  Practical Construction
                </span>
                <span className="text-[11px] leading-snug block mt-0.5">
                  Quality civil construction for residential & commercial buildings up to 4–5 floors.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#B89A63] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[#F3F1EC] font-semibold block uppercase tracking-wider text-[11px]">
                  Property Assistance
                </span>
                <span className="text-[11px] leading-snug block mt-0.5">
                  Transparent buyer-seller coordination and verified property marketing.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
