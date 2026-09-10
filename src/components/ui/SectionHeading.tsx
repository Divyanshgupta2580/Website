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
      className={`mb-12 md:mb-16 ${
        isCentered ? "text-center max-w-3xl mx-auto" : "flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      } ${className}`}
    >
      <div className={isCentered ? "" : "max-w-3xl"}>
        {eyebrow && (
          <div
            className={`inline-flex items-center gap-2 mb-3 ${
              isCentered ? "justify-center" : ""
            }`}
          >
            <span className="w-6 h-[1px] bg-[#B89A63]" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B89A63]">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F3F1EC]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-[#A7ADB3] text-sm md:text-base leading-relaxed">
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
