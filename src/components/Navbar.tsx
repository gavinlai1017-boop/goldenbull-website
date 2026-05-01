"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center text-[#1A1A2E] font-bold text-xl">
                🐂
              </div>
            </div>
            <span className="text-xl font-bold text-gradient-gold">GoldenBull</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#performance" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              Performance
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              How It Works
            </Link>
            <Link href="#faq" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              FAQ
            </Link>
            <a
              href="https://t.me/GoldenBull_Official_UK_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Start Copying
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link href="#performance" className="text-gray-300 hover:text-[#D4AF37]">
                Performance
              </Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-[#D4AF37]">
                How It Works
              </Link>
              <Link href="#faq" className="text-gray-300 hover:text-[#D4AF37]">
                FAQ
              </Link>
              <a
                href="https://t.me/GoldenBull_Official_UK_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Start Copying
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}