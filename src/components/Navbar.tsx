"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 w-full z-50 bg-[#032230]/90 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center px-6 py-4 md:px-12 md:py-6 max-w-7xl mx-auto w-full">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent tracking-wide">
          Elodie Langlet
        </div>

        <div className="hidden md:flex gap-8 ml-auto pr-2">
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative text-sm font-medium text-gray-100 hover:text-white transition-colors duration-300 tracking-wide uppercase group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-100 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
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
              <svg
                className="w-6 h-6"
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

      {isOpen && (
        <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-6 py-8 px-8 bg-white/95 backdrop-blur-md rounded-b-2xl mx-4 shadow-xl border border-gray-200">
            {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 tracking-wide uppercase text-right py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
