"use client";

import { useState } from "react";
import Link from "next/link";

import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 lg:px-12 lg:py-6 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl uppercase tracking-[7px]">
          Talal Portfolio
        </Link>

        <div className="hidden lg:flex items-center space-x-12">
          <Link
            href="/"
            className="text-lg uppercase tracking-super-wide hover:text-gray-400 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-lg uppercase tracking-super-wide hover:text-gray-400 transition-colors"
          >
            About
          </Link>
        </div>

        <div className="lg:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="h-8 w-8 text-foreground" />
            ) : (
              <FiMenu className="h-8 w-8 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-4 bg-black/80 rounded-lg p-6 flex flex-col items-center space-y-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg uppercase tracking-super-wide"
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-lg uppercase tracking-super-wide"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
