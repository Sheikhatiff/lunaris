import React from "react";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Custom SVG Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 694"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M264.408 668.17C114.06 684.975 25.4911 584.482 0 532.135V13H1440V189.046C1440 269.067 1256.56 494.125 1047.64 474.62C838.709 455.115 915.682 787.201 697.258 668.17C478.834 549.139 452.343 647.165 264.408 668.17Z"
            fill="#1A252E"
            fillOpacity="0.59"
          />
          <path
            d="M264.408 651.17C114.06 667.975 25.4911 567.482 0 515.135V-4H1440V172.046C1440 252.067 1256.56 477.125 1047.64 457.62C838.709 438.115 915.682 770.201 697.258 651.17C478.834 532.139 452.343 630.165 264.408 651.17Z"
            fill="url(#paint0_linear_0_1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="1440"
              y1="-4.00005"
              x2="1.66967e-05"
              y2="517.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#153149" />
              <stop offset="1" stopColor="#1A252E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full px-6 py-6 lg:px-12">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-16 w-auto object-contain" // increased size from h-12 to h-16
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden h-16 w-16 bg-white rounded-lg items-center justify-center text-gray-800 font-bold text-xl"></div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                Contact Us
              </a>
              <button className=" text-white px-6 py-2.5 rounded-4xl border-1 font-medium hover:bg-gray-500 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center px-6 lg:px-12 py-0">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-3 space-y-6">
                <div className="space-y-3">
                  <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                    FIND YOUR PLACE OF DREAM
                  </h1>
                  <p className="text-sm lg:text-base text-gray-200">
                    We're glad to have you around, Feel free to browse our
                    website.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for anything..."
                      className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 p-1.5 rounded-md transition-colors">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-9 relative">
                <div className="relative z-10 overflow-hidden rounded-2xl">
                  <img
                    src="/house.png"
                    alt="Hero"
                    className="w-full h-full object-cover lg:max-h-[900px]"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)", // hides bottom under curve
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  {/* Placeholder */}
                  <div className="hidden w-full h-80 lg:h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg
                        className="w-20 h-20 mx-auto mb-4 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-lg opacity-75">
                        Hero Image Placeholder
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
