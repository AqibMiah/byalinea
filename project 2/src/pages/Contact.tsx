import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-[#8B7355] mb-8">Get in Touch</h1>
            <p className="text-lg text-[#8B7355] mb-12">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-[#8B7355] mr-4" />
                <span className="text-[#8B7355]">contact@alinea.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-[#8B7355] mr-4" />
                <span className="text-[#8B7355]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-[#8B7355] mr-4" />
                <span className="text-[#8B7355]">123 Design Street, New York, NY 10001</span>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-[#F5F5DC] p-8 rounded-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#8B7355] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-[#D4C4A8] focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#8B7355] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-[#D4C4A8] focus:outline-none focus:border-[#8B7355]"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#8B7355] mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-[#D4C4A8] focus:outline-none focus:border-[#8B7355]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#D4C4A8] text-white py-3 rounded-lg hover:bg-[#8B7355] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact