import React from 'react';

function About() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#8B7355] mb-8 text-center">About Us</h1>
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80"
            alt="Our Workshop"
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-[#8B7355] mb-6">
            At Alinea, we believe that every home tells a story. Founded in 2020, we've made it our mission to help you write yours through carefully curated furniture and decor pieces that speak to both style and substance.
          </p>
          <p className="text-lg text-[#8B7355] mb-6">
            Our team of passionate designers and craftspeople work tirelessly to bring you pieces that combine traditional craftsmanship with contemporary design. We source sustainable materials and partner with ethical manufacturers to ensure that every item in our collection meets our high standards for quality and responsibility.
          </p>
          <p className="text-lg text-[#8B7355] mb-6">
            We understand that your home is more than just a space—it's a reflection of who you are. That's why we offer personalized design consultations and a curated selection of pieces that can be customized to your specific needs and preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About