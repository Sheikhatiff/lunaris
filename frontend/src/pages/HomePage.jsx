import React, { useState } from "react";
import { Search } from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const backgroundSvgPath = "/logo.svg";
  const logoImagePath = "/logo.png";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <img
          src={backgroundSvgPath}
          alt="Background"
          className="w-full h-full object-fill absolute inset-0"
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
          }}
        />
      </div>

      {/* Clean Custom Header */}
      <div className="relative z-10">
        <nav className="flex justify-between items-center px-4 sm:px-8 pt-6 pb-2">
          {/* Logo (left, larger, less padding) */}
          <div className="flex items-center">
            <img
              src={logoImagePath}
              alt="Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-lg"
              style={{ paddingTop: 0, paddingBottom: 0 }}
            />
          </div>
          {/* Links & Button (right, normal size, more vertical padding) */}
          <div className="hidden md:flex space-x-6 mt-2">
            <a
              href="#home"
              className="text-white hover:text-blue-500 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-blue-500 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-500 transition-colors font-medium"
            >
              Contact Us
            </a>
            <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 mb-12 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mb-12 rounded-lg font-semibold transition-colors text-sm">
              Menu
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content - Left Mid */}
      <main className="flex items-center min-h-[calc(100vh-120px)] px-3">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Welcome to Our Platform
          </h1>
          {/* Sub Heading */}
          <p className="text-lg sm:text-xl ml-2 text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Discover amazing solutions <br />
            and transform your business with our innovative tools and services
          </p>
          {/* Search Box */}
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for anything..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
