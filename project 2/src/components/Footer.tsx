import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Customer Service & Connect Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center">
          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-black hover:text-gray-600 transition">Shipping Policy</a></li>
              <li><a href="#" className="text-black hover:text-gray-600 transition">Returns & Exchanges</a></li>
              <li><a href="#" className="text-black hover:text-gray-600 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Connect</h4>
            <ul className="space-y-3">
              <li><a href="https://www.instagram.com/byalineaa/" className="text-black hover:text-gray-600 transition">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@byalineaa?lang=en" className="text-black hover:text-gray-600 transition">Tiktok</a></li>
              <li>
                <a href="mailto:byalineaa@gmail.com" className="text-black hover:text-gray-600 transition">
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-black text-sm">
          <p>&copy; {new Date().getFullYear()} Alinea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;