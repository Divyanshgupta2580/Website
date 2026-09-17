import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "navy" | "slate" | "surface" | "outline" | "bronze";
  className?: string;
}

export default function Badge({
  children,
  variant = "orange",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    orange: "bg-[#F3D8C7] text-[#B9551D] border border-[#D96B27]/40 font-bold",
    bronze: "bg-[#F3D8C7] text-[#B9551D] border border-[#D96B27]/40 font-bold", // backward-compatibility
    navy: "bg-[#18324A] text-white border border-[#18324A] font-semibold",
    slate: "bg-[#E8E6E1] text-[#20272D] border border-[#D5D4D0] font-medium",
    surface: "bg-white text-[#20272D] border border-[#D5D4D0] font-medium shadow-xs",
    outline: "bg-transparent text-[#66717A] border border-[#D5D4D0] font-medium",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] uppercase tracking-wider rounded-sm ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
