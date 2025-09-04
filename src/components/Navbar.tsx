"use client";

import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-1/2 transform -translate-x-1/2 w-full z-50 bg-[#032230]/90 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center px-6 py-4 md:px-12 md:py-6 max-w-7xl mx-auto w-full">
          <div className="text-xl md:text-2xl font-bold text-gray-100 tracking-wide">
            Elodie Langlet
          </div>

          <div className="hidden md:flex gap-8 ml-auto pr-2">
            {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#hero" : `#${item.toLowerCase()}`}
                className="relative text-sm font-medium text-gray-100 hover:text-white transition-colors duration-300 tracking-wide uppercase group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-100 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-lg"
              aria-label="Toggle menu"
            >
              {!isOpen && <i className="fa-solid fa-bars text-2xl"></i>}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 z-[70] bg-[#032230]/95 backdrop-blur-md animate-in fade-in duration-300"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-3 text-gray-100 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-lg z-10"
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>

          <div className="flex flex-col items-center justify-center h-screen w-screen gap-8 px-6">
            {["Home", "About", "Skills", "Portfolio", "Contact"].map(
              (item, index) => (
                <a
                  key={item}
                  href={item === "Home" ? "#hero" : `#${item.toLowerCase()}`}
                  className="relative text-xl font-medium text-gray-100 hover:text-white transition-all  tracking-wide uppercase text-center py-6 px-12 rounded-lg hover:bg-white/10 group animate-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};
