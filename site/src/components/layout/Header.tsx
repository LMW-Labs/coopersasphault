"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with phone */}
      <div className="bg-[#1a1a1a] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="hidden sm:block">{COMPANY.tagline}</span>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <a
              href={`tel:${COMPANY.phone.mainRaw}`}
              className="flex items-center gap-2 hover:text-[#ebf725] transition-colors font-semibold"
            >
              <PhoneIcon />
              {COMPANY.phone.main}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Cooper Generations Asphalt Company"
              width={120}
              height={120}
              className="w-24 h-24 md:w-28 md:h-28"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group">
                {'children' in link && link.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#616d6d] transition-colors font-medium"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.label}
                      <ChevronDownIcon />
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 transition-all ${
                        servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-[#1a1a1a] hover:bg-[#f5f5f5] hover:text-[#616d6d] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[#1a1a1a] hover:text-[#616d6d] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#ebf725] text-[#1a1a1a] px-6 py-3 rounded-full font-semibold hover:bg-[#d4e020] transition-colors"
          >
            Free Estimate
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                {'children' in link && link.children ? (
                  <div className="py-2">
                    <div className="font-medium text-[#1a1a1a] py-2">{link.label}</div>
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-[#616d6d] hover:text-[#1a1a1a]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 font-medium text-[#1a1a1a] hover:text-[#616d6d]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#ebf725] text-[#1a1a1a] px-6 py-3 rounded-full font-semibold mt-4 hover:bg-[#d4e020] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Estimate
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

// Icons
function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
