"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyData } from "@/data/company";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-[#D5D4D0] ${
        isScrolled ? "py-3 shadow-sm" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#D96B27] rounded-sm"
            aria-label="GG Construction Co. Home"
          >
            {/* Monogram Brand Mark */}
            <div className="w-9 h-9 rounded-sm bg-[#18324A] flex items-center justify-center text-white font-extrabold text-sm tracking-tighter shadow-xs">
              GG
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-[#18324A] group-hover:text-[#D96B27] transition-colors leading-tight">
                GG Construction Co.
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D96B27]">
                Building Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-bold transition-colors relative rounded-sm ${
                    isActive
                      ? "text-[#D96B27]"
                      : "text-[#20272D] hover:text-[#D96B27]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D96B27]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/get-a-quote" size="sm" variant="primary">
              GET A QUOTE
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Button
              href="/get-a-quote"
              size="sm"
              variant="primary"
              className="py-1.5 px-3 text-[11px]"
            >
              QUOTE
            </Button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-9 h-9 border border-[#D5D4D0] bg-[#F4F2EE] rounded-sm flex items-center justify-center text-[#18324A] hover:border-[#18324A] focus-visible:ring-2 focus-visible:ring-[#D96B27]"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D96B27]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-white/98 backdrop-blur-xl border-t border-[#D5D4D0] z-50 lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
          id="mobile-nav"
        >
          <div className="space-y-1">
            <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#66717A] mb-3 pb-2 border-b border-[#D5D4D0]">
              Menu
            </div>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between py-3 px-2 text-base tracking-wider uppercase border-b border-[#D5D4D0]/60 font-bold ${
                    isActive
                      ? "text-[#D96B27]"
                      : "text-[#18324A] hover:text-[#D96B27]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}
            <Link
              href="/faqs"
              className="flex items-center justify-between py-3 px-2 text-base tracking-wider uppercase border-b border-[#D5D4D0]/60 font-bold text-[#66717A] hover:text-[#18324A]"
            >
              <span>FAQs</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </Link>
            <Link
              href="/blog"
              className="flex items-center justify-between py-3 px-2 text-base tracking-wider uppercase border-b border-[#D5D4D0]/60 font-bold text-[#66717A] hover:text-[#18324A]"
            >
              <span>Construction Guidance</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-[#D5D4D0] space-y-4">
            <Button
              href="/get-a-quote"
              variant="primary"
              size="lg"
              className="w-full"
            >
              GET A QUOTE
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${companyData.contact.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-3 text-xs uppercase tracking-wider text-[#18324A] font-bold border border-[#D5D4D0] bg-[#F4F2EE] hover:border-[#18324A] rounded-sm transition-colors"
                aria-label={`Call GG Construction Co. at ${companyData.contact.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>Call Us</span>
              </a>
              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center justify-center gap-2 py-3 px-3 text-xs uppercase tracking-wider text-[#18324A] font-bold border border-[#D5D4D0] bg-[#F4F2EE] hover:border-[#18324A] rounded-sm transition-colors"
                aria-label={`Email GG Construction Co. at ${companyData.contact.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
