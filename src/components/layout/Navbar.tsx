'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-blue-600 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image src="/titlelogo.png" alt="Logo" width={40} height={40} />
            <div className="leading-tight">
              <span className="block font-bold text-lg text-gray-900">CRTD Technologies</span>
              <span className="block text-xs text-gray-500 -mt-1">Connecting Freshers</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link href="/" className="text-blue-700 font-medium hover:text-blue-900">Home</Link>
            <Link href="/jobs" className="text-gray-700 font-medium hover:text-blue-900">Fresher Jobs</Link>
            <Link href="/services" className="text-gray-700 font-medium hover:text-blue-900">Services</Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login" className="px-4 py-1.5 border border-gray-400 rounded-md text-gray-900 font-medium hover:bg-gray-100">LOGIN</Link>
            <Link href="/register" className="px-4 py-1.5 text-white rounded-md font-medium transition shadow-md" style={{background: 'linear-gradient(90deg,#2196F3 0%,#1976D2 100%)'}}>Register Now</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-blue-700 font-medium">Home</Link>
            <Link href="/jobs" className="block px-3 py-2 text-gray-700 font-medium">Fresher Jobs</Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 font-medium">Services</Link>
            <Link href="/login" className="block px-3 py-2 border border-gray-400 rounded-md text-gray-900 font-medium mt-2">LOGIN</Link>
            <Link href="/register" className="block px-3 py-2 bg-blue-600 text-white rounded-md font-medium mt-2">Register Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 