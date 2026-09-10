import React from "react";
import Hero from "@/components/home/Hero";
import DivisionsSection from "@/components/home/DivisionsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MetricsSection from "@/components/home/MetricsSection";
import ProcessSection from "@/components/home/ProcessSection";
import MaterialsPreview from "@/components/home/MaterialsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import ConversionCTA from "@/components/home/ConversionCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Full-Width Cinematic Hero */}
      <Hero />

      {/* 2. Three Business Divisions (Integrated) */}
      <DivisionsSection />

      {/* 3. Services Section (Core Capabilities) */}
      <ServicesPreview />

      {/* 4. Featured Projects (Landmark Editorial Cards) */}
      <FeaturedProjects />

      {/* 5. Why GG Construction Co. (5 Core Pillars) */}
      <WhyChooseUs />

      {/* 6. Statistics (Replaceable Placeholders) */}
      <MetricsSection />

      {/* 7. Our Process (6-Step Lifecycle) */}
      <ProcessSection />

      {/* 8. Building Materials (8 Categories & Bulk Quote CTA) */}
      <MaterialsPreview />

      {/* 9. Testimonials (Marked Source Placeholders) */}
      <TestimonialsSection />

      {/* 10. FAQ Preview */}
      <HomeFaqSection />

      {/* 11. Final Conversion CTA: Planning Your Next Project? */}
      <ConversionCTA />
    </>
  );
}
