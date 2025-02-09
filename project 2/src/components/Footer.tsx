import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#F5F5DC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-[#8B7355]" />
              <span className="ml-2 text-xl font-bold text-[#8B7355]">Alinea</span>
            </div>
            <p className="text-[#8B7355]">
              Crafting beautiful spaces, one piece at a time.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#8B7355]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#8B7355] hover:text-[#6B5B45]">About Us</Link></li>
              <li><Link to="/shop" className="text-[#8B7355] hover:text-[#6B5B45]">Shop</Link></li>
              <li><Link to="/contact" className="text-[#8B7355] hover:text-[#6B5B45]">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#8B7355]">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8B7355] hover:text-[#6B5B45]">Shipping Policy</a></li>
              <li><a href="#" className="text-[#8B7355] hover:text-[#6B5B45]">Returns & Exchanges</a></li>
              <li><a href="#" className="text-[#8B7355] hover:text-[#6B5B45]">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#8B7355]">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8B7355] hover:text-[#6B5B45]">Instagram</a></li>
              <li><a href="#" className="text-[#8B7355] hover:text-[#6B5B45]">Pinterest</a></li>
              <li><a href="#" className="text-[#8B7355] hover:text-[#6B5B45]">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#D4C4A8] mt-12 pt-8 text-center text-[#8B7355]">
          <p>&copy; {new Date().getFullYear()} Alinea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer