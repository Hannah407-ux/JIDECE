"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg sm:text-2xl font-bold">
          Jidece International Academy
        </Link>

        {/* Mobile button */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/contact">Contact Us</Link>

          <Link
            href="/apply"
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400"
          >
            Apply Now
          </Link>

          <Link
            href="/admin/login"
            className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-900"
          >
            Admin Login
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-blue-900 px-4 pb-4 space-y-3">
          <Link onClick={() => setOpen(false)} href="/" className="block">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} href="/about" className="block">
            About Us
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/academics"
            className="block"
          >
            Academics
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="block"
          >
            Contact Us
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/apply"
            className="block bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium"
          >
            Apply Now
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/admin/login"
            className="block border border-white px-4 py-2 rounded-lg"
          >
            Admin Login
          </Link>
        </div>
      )}
    </nav>
  );
}
