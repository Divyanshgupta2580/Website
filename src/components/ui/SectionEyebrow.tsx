import React from "react";

export interface SectionEyebrowProps {
  number?: string; // Kept for backward compatibility, intentionally ignored
  label: string;
  className?: string;
}

export default function SectionEyebrow({
  label,
  className = "",
}: SectionEyebrowProps) {
  // Strip any legacy number or slashes
  const cleanLabel = label
    .replace(/^(\d+\s*\/\/\s*)+/, "")
    .replace(/\/\//g, "")
    .trim();

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="w-3.5 h-[2px] bg-[#D96B27]" aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D96B27]">
        {cleanLabel}
      </span>
    </div>
  );
}
