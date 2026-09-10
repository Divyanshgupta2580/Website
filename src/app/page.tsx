import React from "react";
import Hero from "@/components/home/Hero";
import DivisionsSection from "@/components/home/DivisionsSection";
import MaterialsPreview from "@/components/home/MaterialsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import PropertyOpportunities from "@/components/home/PropertyOpportunities";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import ConversionCTA from "@/components/home/ConversionCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Three Business Areas: Building Materials (1), Construction (2), Real Estate (3) */}
      <DivisionsSection />

      {/* 3. Featured Materials (Primary Business Emphasis) */}
      <MaterialsPreview />

      {/* 4. Construction Services (Secondary Business: Small to Medium Buildings) */}
      <ServicesPreview />

      {/* 5. Selected Building Projects (Up to 4-5 Floors) */}
      <FeaturedProjects />

      {/* 6. Property Opportunities (Sales Assistance & Marketing) */}
      <PropertyOpportunities />

      {/* 7. Why Choose GG Construction Co. */}
      <WhyChooseUs />

      {/* 8. How We Work (5-Step Lifecycle) */}
      <ProcessSection />

      {/* 9. Customer Testimonials */}
      <TestimonialsSection />

      {/* 10. FAQ */}
      <HomeFaqSection />

      {/* 11. Contact / Enquiry CTA */}
      <ConversionCTA />
    </>
  );
}
