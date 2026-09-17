import React from "react";
import Image from "next/image";
import { MapPin, Truck, Layers, HardHat } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default function LocalExperienceSection() {
  const localStrengths = [
    {
      icon: Truck,
      title: "Neighborhood Delivery Logistics",
      description:
        "Staging cement, sand, and steel drop-offs to prevent neighborhood street blockage in compact residential and commercial colonies.",
    },
    {
      icon: Layers,
      title: "Foundation & Soil Conditions",
      description:
        "Proper footing depths, anti-termite soil preparation, and plinth damp-proof courses (DPC) suitable for North-West Delhi ground conditions.",
    },
    {
      icon: MapPin,
      title: "Low-Rise Building Norms",
      description:
        "Civil structural execution aligned with typical Delhi low-rise layouts (independent builder floors up to 4–5 floors maximum).",
    },
    {
      icon: HardHat,
      title: "Daily Jobsite Oversight",
      description:
        "Direct supervision of reinforcement binding, column formwork staging, and disciplined 14–21 day water curing on active local sites.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4F2EE] border-b border-[#D5D4D0]">
      <Container size="default">
        <SectionHeading
          eyebrow="LOCAL CONSTRUCTION EXPERIENCE"
          title="CONSTRUCTION EXPERIENCE IN NORTH-WEST DELHI."
          description="GG Construction Co. has carried out construction work across Rohini, Pitampura and nearby areas of Delhi. Our focus is on practical, dependable building construction tailored to local plot sizes and neighborhood access."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 4 Practical Local Strengths */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {localStrengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#D5D4D0] p-5 sm:p-6 rounded-none hover:border-[#18324A] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-none bg-[#F4F2EE] border border-[#D5D4D0] flex items-center justify-center text-[#D96B27] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[#18324A] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#66717A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Grounded Contextual Visual */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#D5D4D0] rounded-none overflow-hidden">
              <div className="relative aspect-[16/11] w-full bg-[#E8E6E1] overflow-hidden border-b border-[#D5D4D0]">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1000&q=80"
                  alt="Low-rise building civil construction site in Delhi NCR [Representative Example]"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 border border-[#D5D4D0] rounded-none text-xs font-bold text-[#18324A]">
                  <MapPin className="w-3.5 h-3.5 text-[#D96B27] inline mr-1" />
                  Rohini &bull; Pitampura &bull; Delhi
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#D96B27] block mb-1">
                  GROUNDED LOCAL PRESENCE
                </span>
                <h4 className="text-lg font-extrabold text-[#18324A] mb-2">
                  Building Across Delhi Localities
                </h4>
                <p className="text-xs text-[#66717A] leading-relaxed mb-4">
                  From ground-floor excavation through RCC slab pours and brick masonry, we execute low-rise residential homes and commercial buildings with dependable civil workmanship.
                </p>
                <div className="pt-3 border-t border-[#D5D4D0] flex items-center justify-between text-xs font-bold text-[#18324A]">
                  <span>Residential &amp; Commercial</span>
                  <span className="text-[#D96B27] uppercase text-[11px]">Up to 4–5 Floors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
