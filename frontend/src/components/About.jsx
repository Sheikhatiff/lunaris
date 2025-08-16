import React, { useState } from "react";
import { Search } from "lucide-react";

export default function About() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <div className="bg-gray-50">
      {/* About Us Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Header with decorative line */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-blue-500"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                  About Us
                </h2>
              </div>

              {/* Content paragraphs */}
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus
                  sodales vulputate arcu. Erat mi dolor vitae in. Consequat
                  pellentesque sed vitae purus erat id in pretium. Sed cras
                  fringilla lacinia tortor diam pretium. Ipsum amet faucibus
                  tortor vulputate elementum tortor et dis pharetra. Rutrum amet
                  diam pretium imperdiet elit sit.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus
                  sodales vulputate arcu. Erat mi dolor vitae in. Consequat
                  pellentesque sed vitae purus erat id in pretium. Sed cras
                  fringilla lacinia tortor diam pretium. Ipsum amet faucibus
                  tortor vulputate elementum tortor et dis pharetra. Rutrum amet
                  diam pretium imperdiet elit sit.Lorem ipsum dolor sit amet
                  consectetur.
                </p>
              </div>

              {/* Know More Button */}
              <div className="pt-4">
                <button className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold py-3 px-6 sm:px-8 rounded-lg border-2 border-blue-300 transition-colors duration-200 text-sm sm:text-base">
                  Know More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern luxury interior showroom with contemporary furniture and lighting"
                  className="w-full h-64 sm:h-80 lg:h-[400px] xl:h-[500px] object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-purple-400 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - House Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-1">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Modern two-story house with contemporary architecture"
                    className="w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                  />
                </div>
              </div>

              {/* Property Search Card */}
              <div className="absolute -bottom-8 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 sm:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                  {/* Location */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full text-xs sm:text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
                    />
                  </div>

                  {/* Check in */}
                  <div className="border-l border-gray-200 pl-2 sm:pl-4">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      Check in
                    </label>
                    <input
                      type="text"
                      placeholder="Add dates"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-xs sm:text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
                    />
                  </div>

                  {/* Check out */}
                  <div className="border-l border-gray-200 pl-2 sm:pl-4">
                    <label className="block text-xs font-semibold text-gray-900 mb-1">
                      Check out
                    </label>
                    <input
                      type="text"
                      placeholder="Add dates"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-xs sm:text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
                    />
                  </div>

                  {/* Guests */}
                  <div className="border-l border-gray-200 pl-2 sm:pl-4 flex items-end">
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-900 mb-1">
                        Guests
                      </label>
                      <input
                        type="text"
                        placeholder="Add guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full text-xs sm:text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
                      />
                    </div>
                    <button className="ml-2 bg-slate-800 hover:bg-slate-700 text-white p-2 sm:p-3 rounded-full transition-colors duration-200">
                      <Search size={16} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 mt-12 lg:mt-0">
              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight">
                  BE A CO-LANDLORD
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight">
                  BRICK BY BRICK
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-2xl">
                Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus
                sodales vulputate arcu. Erat mi dolor vitae in. Consequat
                pellentesque sed vitae purus erat id in pretium. Sed cras
                fringilla lacinia tortor diam pretium. Ipsum amet faucibus
                tortor vulputate elementum tortor et dis pharetra. Rutrum amet
                diam pretium imperdiet elit sit.Lorem ipsum dolor sit amet
                consectetur.
              </p>

              {/* Stats */}
              <div className="pt-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-none">
                  250+ LISTED
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-none mt-2">
                  PROPERTIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
