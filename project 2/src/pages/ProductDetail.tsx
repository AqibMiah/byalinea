import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#8B7355]">Product not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-[#8B7355] mb-4">{product.name}</h1>
            <p className="text-2xl text-[#8B7355] mb-8">${product.price}</p>
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-[#8B7355]">{product.description}</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#8B7355] mb-4">Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-[#8B7355]">{detail}</li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-[#D4C4A8] text-white py-3 rounded-lg hover:bg-[#8B7355] transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail