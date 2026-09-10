import React from "react";
import CTA from "@/components/ui/CTA";

export default function ConversionCTA() {
  return (
    <CTA
      eyebrow="Initiate Engagement"
      title="Planning Your Next Project?"
      description="Whether you are an enterprise developer scoping a commercial tower, an industrial operator establishing a warehouse, or a builder procuring bulk TMT steel and cement, connect directly with our engineering division."
      primaryCtaText="Start a Project"
      primaryCtaHref="/get-a-quote"
      secondaryCtaText="Contact Our Engineers"
      secondaryCtaHref="/contact"
      showContacts={true}
    />
  );
}
