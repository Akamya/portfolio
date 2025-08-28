"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 w-full z-50 bg-[#032230]/95">
      <div className="flex justify-between items-center px-6 py-4 md:px-12 md:py-6 max-w-6xl mx-auto w-full">
        <div className="text-xl md:text-2xl font-bold text-gray-100 tracking-wide">
          Elodie Langlet
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 ml-auto pr-2">
          <Link
            to="/"
            className="text-sm font-medium text-gray-100 hover:text-gray-400 transition-colors duration-300 tracking-wide uppercase"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-100 hover:text-gray-400 transition-colors duration-300 tracking-wide uppercase"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="text-sm font-medium text-gray-100 hover:text-gray-400 transition-colors duration-300 tracking-wide uppercase"
          >
            Skills
          </Link>
          <Link
            to="/portfolio"
            className="text-sm font-medium text-gray-100 hover:text-gray-400 transition-colors duration-300 tracking-wide uppercase"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-100 hover:text-gray-400 transition-colors duration-300 tracking-wide uppercase"
          >
            Contact
          </Link>
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Croix
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col items-end gap-6 py-8 px-8 bg-white/95 backdrop-blur-sm rounded-lg">
            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 tracking-wide uppercase"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 tracking-wide uppercase"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 tracking-wide uppercase"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 tracking-wide uppercase"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
