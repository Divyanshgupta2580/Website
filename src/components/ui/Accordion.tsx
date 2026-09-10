"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  id,
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#2A3035] last:border-b-0">
      <button
        type="button"
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-1 flex items-center justify-between text-left group transition-colors focus-visible:ring-1 focus-visible:ring-[#B89A63]"
      >
        <span className="text-base sm:text-lg font-normal text-[#F3F1EC] group-hover:text-[#B89A63] transition-colors pr-4">
          {title}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-none border border-[#2A3035] flex items-center justify-center text-[#A7ADB3] group-hover:border-[#B89A63] group-hover:text-[#B89A63] transition-colors">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-btn-${id}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[800px] pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm md:text-base text-[#A7ADB3] leading-relaxed pt-1 pr-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({ children, className = "" }: AccordionProps) {
  return (
    <div className={`divide-y divide-[#2A3035] border-t border-[#2A3035] ${className}`}>
      {children}
    </div>
  );
}
