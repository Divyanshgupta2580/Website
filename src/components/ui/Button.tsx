import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "navy" | "outline" | "ghost" | "tech";
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
    "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F2EE] disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider text-xs rounded-sm";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-xs",
    lg: "px-7 py-3.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-[#D96B27] text-white hover:bg-[#B9551D] border border-[#D96B27] active:bg-[#A34A17] shadow-sm",
    navy:
      "bg-[#18324A] text-white hover:bg-[#102232] border border-[#18324A] active:bg-[#0C1A27] shadow-sm",
    outline:
      "bg-white text-[#18324A] border border-[#D5D4D0] hover:border-[#18324A] hover:bg-[#E8E6E1]/30 active:bg-[#E8E6E1] shadow-sm",
    ghost:
      "bg-transparent text-[#18324A] hover:text-[#D96B27] hover:bg-[#E8E6E1]/40 border border-transparent",
    tech:
      "bg-[#E8E6E1] text-[#20272D] border border-[#D5D4D0] hover:border-[#18324A] hover:bg-[#D5D4D0]/50",
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
