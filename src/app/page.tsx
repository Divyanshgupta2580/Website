import React from "react";
import Hero from "@/components/home/Hero";
import DivisionsSection from "@/components/home/DivisionsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TrustProposition from "@/components/home/TrustProposition";
import MetricsSection from "@/components/home/MetricsSection";
import ProcessSection from "@/components/home/ProcessSection";
import MaterialsPreview from "@/components/home/MaterialsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import ConversionCTA from "@/components/home/ConversionCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Three Business Divisions */}
      <DivisionsSection />

      {/* 3. Services Overview */}
      <ServicesPreview />

      {/* 4. Featured Projects */}
      <FeaturedProjects />

      {/* 5. Trust & Value Proposition */}
      <TrustProposition />

      {/* 6. Company Metrics with Replaceable Placeholders */}
      <MetricsSection />

      {/* 7. Construction Process */}
      <ProcessSection />

      {/* 8. Building Material Categories */}
      <MaterialsPreview />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. FAQ Section */}
      <HomeFaqSection />

      {/* 11. Final High-Conversion CTA */}
      <ConversionCTA />
    </>
  );
}
