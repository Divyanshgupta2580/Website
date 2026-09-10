import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "bronze" | "slate" | "surface" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "bronze",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    bronze: "bg-[#B89A63]/10 text-[#B89A63] border border-[#B89A63]/30",
    slate: "bg-[#667582]/15 text-[#A7ADB3] border border-[#667582]/30",
    surface: "bg-[#15191D] text-[#F3F1EC] border border-[#2A3035]",
    outline: "bg-transparent text-[#A7ADB3] border border-[#2A3035]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
