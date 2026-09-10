import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "tech";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A63] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D0F] disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider text-xs";

  const sizeStyles = {
    sm: "px-3 py-2 text-xs",
    md: "px-5 py-2.5 text-xs font-semibold",
    lg: "px-7 py-3.5 text-sm font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#B89A63] text-[#0B0D0F] hover:bg-[#D0B47A] border border-[#B89A63] active:bg-[#a68853]",
    outline:
      "bg-transparent text-[#F3F1EC] border border-[#2A3035] hover:border-[#B89A63] hover:text-[#B89A63] active:bg-[#15191D]",
    ghost:
      "bg-transparent text-[#A7ADB3] hover:text-[#F3F1EC] hover:bg-[#15191D] border border-transparent",
    tech:
      "bg-[#1D2227] text-[#F3F1EC] border border-[#2A3035] hover:border-[#667582] hover:bg-[#22282E]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
