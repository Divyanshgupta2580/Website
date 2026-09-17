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

      {/* 01 // APPROACH: Built Around Practical Construction */}
      <ApproachSection />

      {/* 02 // SERVICES: Construction, From Structure to Completion */}
      <ServicesPreview />

      {/* 03 // PROJECTS: Selected Construction Work */}
      <FeaturedProjects />

      {/* 04 // LOCAL EXPERIENCE: Construction Experience in North-West Delhi */}
      <LocalExperienceSection />

      {/* 05 // PROCESS: A Simple Way to Get Started */}
      <ProcessSection />

      {/* 06 // CONTACT: Planning a Construction Project? */}
      <ConversionCTA />
    </>
  );
}
