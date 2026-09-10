"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyData } from "@/data/company";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Materials", href: "/materials" },
  { label: "Gallery", href: "/gallery" },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0D0F]/95 backdrop-blur-md border-b border-[#2A3035] py-3.5"
          : "bg-gradient-to-b from-[#0B0D0F]/90 to-transparent border-b border-[#2A3035]/30 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-1 focus-visible:ring-[#B89A63]"
            aria-label="GG Construction Co. Home"
          >
            {/* Monogram Brand Mark */}
            <div className="w-9 h-9 border border-[#B89A63] bg-[#15191D] flex items-center justify-center text-[#B89A63] font-serif font-bold text-sm tracking-tighter group-hover:border-[#D0B47A] group-hover:text-[#D0B47A] transition-colors">
              GG
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium tracking-tight text-[#F3F1EC] group-hover:text-white transition-colors">
                GG Construction Co.
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A7ADB3]">
                Engineering &bull; Development &bull; Supply
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
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs uppercase tracking-widest font-medium transition-colors relative ${
                    isActive
                      ? "text-[#B89A63]"
                      : "text-[#A7ADB3] hover:text-[#F3F1EC]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#B89A63]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/get-a-quote" size="sm" variant="primary">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              href="/get-a-quote"
              size="sm"
              variant="primary"
              className="py-1.5 px-3 text-[11px]"
            >
              Quote
            </Button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-10 h-10 border border-[#2A3035] bg-[#15191D] flex items-center justify-center text-[#F3F1EC] hover:border-[#B89A63] focus-visible:ring-1 focus-visible:ring-[#B89A63]"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#B89A63]" />
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
          className="fixed inset-0 top-[65px] bg-[#0B0D0F]/95 backdrop-blur-xl border-t border-[#2A3035] z-50 lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
          id="mobile-nav"
        >
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#A7ADB3] mb-4 pb-2 border-b border-[#2A3035]">
              Navigation
            </div>
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between py-3 px-2 text-base tracking-wider uppercase border-b border-[#2A3035]/50 ${
                    isActive
                      ? "text-[#B89A63] font-medium"
                      : "text-[#F3F1EC] hover:text-[#B89A63]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
            <Link
              href="/blog"
              className="flex items-center justify-between py-3 px-2 text-base tracking-wider uppercase border-b border-[#2A3035]/50 text-[#A7ADB3]"
            >
              <span>Knowledge Centre</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              href="/faqs"
              className="flex items-center justify-between py-3 px-2 text-base tracking-wider uppercase border-b border-[#2A3035]/50 text-[#A7ADB3]"
            >
              <span>FAQs</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-[#2A3035] space-y-4">
            <Button
              href="/get-a-quote"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Request a Project Quote
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${companyData.contact.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-3 text-xs uppercase tracking-wider text-[#F3F1EC] border border-[#2A3035] bg-[#15191D] hover:border-[#B89A63]/60 transition-colors"
                aria-label={`Call GG Construction Co. at ${companyData.contact.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#B89A63]" />
                <span>Call Us</span>
              </a>
              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center justify-center gap-2 py-3 px-3 text-xs uppercase tracking-wider text-[#F3F1EC] border border-[#2A3035] bg-[#15191D] hover:border-[#B89A63]/60 transition-colors"
                aria-label={`Email GG Construction Co. at ${companyData.contact.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-[#B89A63]" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
