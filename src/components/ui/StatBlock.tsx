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
      className={`bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B89A63]/50 transition-colors ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#667582]">
            {index !== undefined ? `RECORD // 0${index + 1}` : "COMPANY METRIC"}
          </span>
          <span className="w-1.5 h-1.5 bg-[#B89A63]" aria-hidden="true" />
        </div>

        <div className="text-xl sm:text-2xl lg:text-3xl font-light text-[#B89A63] font-mono tracking-tight mb-2 break-words">
          {value}
        </div>

        <h3 className="text-sm font-medium text-[#F3F1EC] tracking-normal">
          {label}
        </h3>
      </div>

      {helper && (
        <p className="text-xs text-[#A7ADB3] mt-3 pt-3 border-t border-[#2A3035]/60 leading-relaxed">
          {helper}
        </p>
      )}
    </div>
  );
}
