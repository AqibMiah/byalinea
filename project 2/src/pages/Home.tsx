import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Alinea.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for tint */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        {/* Logo Image */}
        <img
          src="/AlineaLogo.png"
          alt="Alinea Logo"
          className="w-[300px] h-[65px] sm:w-[400px] sm:h-[87px] lg:w-[500px] lg:h-[108px] object-contain mt-12"
        />

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-base sm:text-lg font-light text-gray-300 mt-2 text-center">
          <Link to="/about" className="hover:text-white transition-all duration-200">
            About Us
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/shop" className="hover:text-white transition-all duration-200">
            Shop
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/rewards" className="hover:text-white transition-all duration-200">
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;