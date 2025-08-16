import React, { useState } from "react";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className="relative w-screen bg-gray-50">
      <header className="absolute inset-x-0 ">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 sm:h-20 lg:h-26 w-auto drop-shadow-lg"
          />
          <nav className="hidden sm:flex space-x-6">
            <a
              href="#home"
              className=" py-2 text-white hover:text-gray-400 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className=" py-2 text-white hover:text-gray-400 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className=" py-2 text-white hover:text-gray-400 transition-colors font-medium"
            >
              Contact Us
            </a>
            <button className="ml-2 hover:bg-gray-500 text-white px-10 py-2 border-2 rounded-2xl font-semibold transition-colors">
              Get Started
            </button>
          </nav>
        </div>
      </header>
      <div className="absolute inset-0 h-70 mx-7 my-40 w-70 ">
        <h1 className="font-extrabold text-4xl w-55 my-2 text-gray-700 sm:text-white">
          FIND YOUR PLACE OF DREAM
        </h1>
        <h2 className="font-bold my-2 w-70 text-gray-700 sm:text-gray-200">
          We are glad to have you around. Feel free to browse our website.
        </h2>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Find a location..."
          className="block w-full pl-10 pr-3 py-2 rounded-4xl leading-5 bg-gray-700 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-white sm:text-gray-700 sm:bg-white"
        />
      </div>
      <div className="flex flex-shrink-0 ">
        <img
          className="object-cover w-full h-full min-h-150"
          src="/logo.svg"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;
