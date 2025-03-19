// app/components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  
  return (
    <nav className="bg-sky-400 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">
              <span className="inline-block mr-1">🏢</span>
              Property.
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/buy" className="text-white hover:text-sky-100">
              Buy
            </Link>
            <Link href="/rent" className="text-white hover:text-sky-100">
              Rent
            </Link>
            <Link href="/sell" className="text-white hover:text-sky-100">
              Sell
            </Link>
            <Link href="/mortgage" className="text-white hover:text-sky-100">
              Mortgage
            </Link>
            <Link href="/agent-finder" className="text-white hover:text-sky-100">
              Agent Finder
            </Link>
            <Link href="/articles" className="text-white hover:text-sky-100">
              Articles
            </Link>
            <Link href="/about" className="text-white hover:text-sky-100">
              About
            </Link>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Country Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center text-white"
              >
                <span>USA</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isCountryOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">USA</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Canada</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">United Kingdom</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Australia</a>
                </div>
              )}
            </div>
            
            {/* Sign Up Button */}
            <Link href="/signup" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}