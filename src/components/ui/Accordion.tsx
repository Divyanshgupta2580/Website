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
    <div className="border-b border-[#D5D4D0] last:border-b-0">
      <button
        type="button"
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-5 px-1 flex items-center justify-between text-left group transition-colors focus-visible:ring-2 focus-visible:ring-[#D96B27] rounded-sm"
      >
        <span className="text-base sm:text-lg font-bold text-[#18324A] group-hover:text-[#D96B27] transition-colors pr-4">
          {title}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-sm border border-[#D5D4D0] flex items-center justify-center text-[#18324A] group-hover:border-[#D96B27] group-hover:text-[#D96B27] group-hover:bg-[#F3D8C7]/30 transition-colors">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-btn-${id}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[800px] pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm md:text-base text-[#66717A] leading-relaxed pt-1 pr-6">
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
    <div className={`divide-y divide-[#D5D4D0] border-t border-[#D5D4D0] ${className}`}>
      {children}
    </div>
  );
}
