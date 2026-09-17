import React from "react";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import ConversionCTA from "@/components/home/ConversionCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Construction Positioning & Dual CTAs */}
      <Hero />

      {/* 2. Core Construction Services (Residential, Commercial, Shops/Offices, Renovation) */}
      <ServicesPreview />

      {/* 3. Selected Low-Rise Building Projects (Rohini & Pitampura Experience) */}
      <FeaturedProjects />

      {/* 4. Why Choose GG Construction Co. (5 Construction Pillars) */}
      <WhyChooseUs />

      {/* 5. How We Build (5-Stage Construction Process) */}
      <ProcessSection />

      {/* 6. Client Testimonials (Verified Sample Feedback) */}
      <TestimonialsSection />

      {/* 7. Frequently Asked Construction Questions */}
      <HomeFaqSection />

      {/* 8. Conversion Contact / Quote Consultation */}
      <ConversionCTA />
    </>
  );
}
