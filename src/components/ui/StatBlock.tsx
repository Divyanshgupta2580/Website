import React from "react";

export interface StatBlockProps {
  label: string;
  value: string;
  helper?: string;
  index?: number;
  className?: string;
}

export default function StatBlock({
  label,
  value,
  helper,
  index,
  className = "",
}: StatBlockProps) {
  return (
    <div
      className={`bg-white border border-[#D5D4D0] p-6 sm:p-7 flex flex-col justify-between hover:border-[#18324A] transition-colors rounded-2xl shadow-xs ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#66717A]">
            {index !== undefined ? `STANDARDS // 0${index + 1}` : "CONSTRUCTION FACT"}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#D96B27]" aria-hidden="true" />
        </div>

        <div className="text-xl sm:text-2xl font-bold text-[#18324A] tracking-tight mb-1.5 break-words">
          {value}
        </div>

        <h3 className="text-sm font-semibold text-[#20272D]">
          {label}
        </h3>
      </div>

      {helper && (
        <p className="text-xs text-[#66717A] mt-3 pt-3 border-t border-[#D5D4D0] leading-relaxed">
          {helper}
        </p>
      )}
    </div>
  );
}
