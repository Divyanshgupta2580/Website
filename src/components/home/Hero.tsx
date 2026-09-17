import React from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, HardHat, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#F4F2EE] border-b border-[#D5D4D0] overflow-hidden">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (52% on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Technical Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-extrabold uppercase tracking-[0.2em] text-[#D96B27]">
                01 //
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18324A]">
                BUILDING CONSTRUCTION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold tracking-tight text-[#18324A] leading-[1.15] mb-5">
              BUILDING HOMES AND LOW-RISE SPACES WITH PRACTICAL EXPERIENCE.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#66717A] leading-relaxed mb-8 max-w-2xl">
              GG Construction Co. carries out residential and low-rise commercial construction across Rohini, Pitampura and nearby areas of Delhi.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Button
                href="/get-a-quote"
                variant="primary"
                size="lg"
                className="group bg-[#D96B27] hover:bg-[#B9551D] text-white border-0 shadow-xs"
              >
                <span>GET A QUOTE</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <Button
                href="/projects"
                variant="outline"
                size="lg"
                className="border-2 border-[#18324A] text-[#18324A] bg-white hover:bg-[#18324A] hover:text-white transition-colors"
              >
                VIEW PROJECTS
              </Button>
            </div>

            {/* 3 Practical Grounded Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#D5D4D0]">
              <div className="bg-white p-3.5 border border-[#D5D4D0] rounded-xl shadow-xs">
                <div className="flex items-center gap-2 text-[#18324A] font-bold text-xs mb-1">
                  <HardHat className="w-4 h-4 text-[#D96B27] flex-shrink-0" />
                  <span>Low-Rise Focus</span>
                </div>
                <p className="text-[11px] text-[#66717A] leading-snug">
                  Residential &amp; commercial buildings up to 4–5 floors.
                </p>
              </div>

              <div className="bg-white p-3.5 border border-[#D5D4D0] rounded-xl shadow-xs">
                <div className="flex items-center gap-2 text-[#18324A] font-bold text-xs mb-1">
                  <MapPin className="w-4 h-4 text-[#D96B27] flex-shrink-0" />
                  <span>Local Experience</span>
                </div>
                <p className="text-[11px] text-[#66717A] leading-snug">
                  Work in Rohini, Pitampura, and nearby Delhi areas.
                </p>
              </div>

              <div className="bg-white p-3.5 border border-[#D5D4D0] rounded-xl shadow-xs">
                <div className="flex items-center gap-2 text-[#18324A] font-bold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#D96B27] flex-shrink-0" />
                  <span>Site Supervision</span>
                </div>
                <p className="text-[11px] text-[#66717A] leading-snug">
                  Daily on-site oversight of rebar tying, casting, and curing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Construction Photography (48% on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] w-full rounded-xl overflow-hidden border border-[#D5D4D0] shadow-sm bg-[#E8E6E1]">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=85"
                alt="Low-rise residential building under construction with RCC framework and masonry in Delhi NCR [Representative Example]"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              {/* Technical Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-[#D5D4D0] p-3.5 rounded-lg shadow-xs backdrop-blur-xs">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#D96B27] block">
                      LOW-RISE CONSTRUCTION
                    </span>
                    <span className="text-xs font-extrabold text-[#18324A] block">
                      ROHINI / PITAMPURA / DELHI
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#E8E6E1] text-[#66717A] text-[9px] font-bold uppercase tracking-wider rounded border border-[#D5D4D0]">
                    Representative Visual
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
