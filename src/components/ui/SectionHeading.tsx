import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  sectionNumber?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  sectionNumber,
  title,
  description,
  align = "left",
  action,
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  // Parse section number and label if formatted as "01 // APPROACH"
  let parsedNumber = sectionNumber;
  let parsedLabel = eyebrow;

  if (!parsedNumber && eyebrow && eyebrow.includes("//")) {
    const parts = eyebrow.split("//").map((s) => s.trim());
    if (parts.length >= 2) {
      parsedNumber = parts[0];
      parsedLabel = parts.slice(1).join(" // ");
    }
  }

  return (
    <div
      className={`mb-10 md:mb-14 ${
        isCentered ? "text-center max-w-3xl mx-auto" : "flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      } ${className}`}
    >
      <div className={isCentered ? "" : "max-w-3xl"}>
        {parsedLabel && (
          <div
            className={`inline-flex items-center gap-2 mb-2.5 ${
              isCentered ? "justify-center" : ""
            }`}
          >
            {parsedNumber ? (
              <span className="text-xs font-mono font-extrabold uppercase tracking-[0.2em] text-[#D96B27]">
                {parsedNumber} <span className="text-[#D96B27]">{"//"}</span>
              </span>
            ) : (
              <span className="w-5 h-[2px] bg-[#D96B27]" aria-hidden="true" />
            )}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#18324A]">
              {parsedLabel}
            </span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#18324A] leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-[#66717A] text-sm sm:text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {action && !isCentered && (
        <div className="flex-shrink-0">{action}</div>
      )}
    </div>
  );
}
