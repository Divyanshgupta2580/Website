import React from "react";
import Hero from "@/components/home/Hero";
import ApproachSection from "@/components/home/ApproachSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import LocalExperienceSection from "@/components/home/LocalExperienceSection";
import ProcessSection from "@/components/home/ProcessSection";
import ConversionCTA from "@/components/home/ConversionCTA";

export default function HomePage() {
  return (
    <>
      {/* Hero: Building Construction & Dual CTAs */}
      <Hero />

      {/* Approach: Built Around Practical Construction */}
      <ApproachSection />

      {/* Services: Construction, From Structure to Completion */}
      <ServicesPreview />

      {/* Projects: Selected Construction Work */}
      <FeaturedProjects />

      {/* Local Experience: Construction Experience in North-West Delhi */}
      <LocalExperienceSection />

      {/* Process: A Simple Way to Get Started */}
      <ProcessSection />

      {/* Contact: Planning a Construction Project? */}
      <ConversionCTA />
    </>
  );
}
