import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed w-full bg-transparent z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          {/* Login Icon in the Center */}
          <Link 
            to="/login" 
            className="flex items-center text-white hover:text-[#D4C4A8] transition-colors duration-200"
          >
            <Lock className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;