import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-10 md:mb-14 ${
        isCentered ? "text-center max-w-3xl mx-auto" : "flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      } ${className}`}
    >
      <div className={isCentered ? "" : "max-w-3xl"}>
        {eyebrow && (
          <div
            className={`inline-flex items-center gap-2.5 mb-2.5 ${
              isCentered ? "justify-center" : ""
            }`}
          >
            <span className="w-5 h-[2px] bg-[#D96B27]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D96B27]">
              {eyebrow}
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
