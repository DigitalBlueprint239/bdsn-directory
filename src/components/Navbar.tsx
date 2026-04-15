"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Directory", href: "/directory" },
  { label: "Trainers", href: "/directory/trainers" },
  { label: "Events", href: "/directory/recruiting-events" },
  { label: "7v7 Teams", href: "/directory/7v7-teams" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-brand-navy">
            BDSN<span className="text-brand-accent">.</span>
          </span>
          <span className="hidden text-sm font-medium text-gray-500 sm:inline">
            Directory
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-navy"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link href="#waitlist" className="btn-primary hidden sm:inline-flex">
            Get Listed
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 w-full text-center"
              >
                Get Listed
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
