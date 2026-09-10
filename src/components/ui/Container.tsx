import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide" | "full";
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  size = "default",
  className = "",
  as: Component = "div",
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
    default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    wide: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8",
    full: "w-full px-4 sm:px-6 lg:px-8",
  };

  return (
    <Component className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}
