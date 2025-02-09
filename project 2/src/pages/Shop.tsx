import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Shop() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#8B7355] mb-12 text-center">Our Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="bg-[#F5F5DC] rounded-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#8B7355] mb-2">{product.name}</h3>
                  <p className="text-[#8B7355]">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop