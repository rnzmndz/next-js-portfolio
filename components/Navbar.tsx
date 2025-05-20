'use client';
import { aleo, kleeOne } from '@/app/fonts';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const linkStyles = 'transition-colors duration-200';

  const hoverStyles = 'hover:font-extrabold hover:underline';
  const activeStyles = 'active:text-gray-600 active:font-bold';

  return (
    <header className="pt-5 lg:pt-20">
      <nav className="relative flex items-center lg:justify-between lg:text-2xl">
        <button
          className="lg:hidden absolute left-0 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            // X icon (close)
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon (menu)
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div className="w-full lg:w-auto flex justify-center">
          <Link
            className={`${aleo.className} font-extrabold text-4xl`}
            href="/"
          >
            Mendoza
          </Link>
        </div>

        <div className={`hidden lg:flex gap-10 ${kleeOne.className}`}>
          <Link href="/about" className={`${linkStyles} ${hoverStyles} ${activeStyles}`}>
            About
          </Link>
          <Link href="/services" className={`${linkStyles} ${hoverStyles} ${activeStyles}`}>Services</Link>
          <Link href="/portfolio" className={`${linkStyles} ${hoverStyles} ${activeStyles}`}>Portfolio</Link>
          <Link href="/contact" className={`${linkStyles} ${hoverStyles} ${activeStyles}`}>Contact</Link>
        </div>
        {isOpen && (
          <div
            className={`lg:hidden absolute top-full left-0 right-0 mt-4 space-x-5 space-y-3 text-center ${kleeOne.className} bg-white p-4 shadow-md`}
          >
            <Link href="/about" className={`${linkStyles} ${hoverStyles} ${activeStyles}`}>About</Link>
            <Link href="/services" className={`${linkStyles} ${hoverStyles} ${activeStyles}`}>Services</Link>
            <Link href="/portfolio" className={`${linkStyles} ${hoverStyles} ${activeStyles}`}>Portfolio</Link>
            <Link href="/contact" className={`${linkStyles} ${hoverStyles} ${activeStyles}`}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
