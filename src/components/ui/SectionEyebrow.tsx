import React from "react";

export interface SectionEyebrowProps {
  number?: string;
  label: string;
  className?: string;
}

export default function SectionEyebrow({
  number,
  label,
  className = "",
}: SectionEyebrowProps) {
  let parsedNumber = number;
  let parsedLabel = label;

  if (!parsedNumber && label.includes("//")) {
    const parts = label.split("//").map((s) => s.trim());
    if (parts.length >= 2) {
      parsedNumber = parts[0];
      parsedLabel = parts.slice(1).join(" // ");
    }
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {parsedNumber ? (
        <span className="text-xs font-mono font-extrabold uppercase tracking-[0.2em] text-[#D96B27]">
          {parsedNumber} <span className="text-[#D96B27]">{"//"}</span>
        </span>
      ) : (
        <span className="w-4 h-[2px] bg-[#D96B27]" aria-hidden="true" />
      )}
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18324A]">
        {parsedLabel}
      </span>
    </div>
  );
}
