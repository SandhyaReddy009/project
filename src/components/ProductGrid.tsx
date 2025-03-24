import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    description: "Minimalist design meets comfort",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Shoes"
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    price: 129.99,
    description: "Elegant everyday companion",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 79.99,
    description: "Timeless style statement",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Clothing"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    description: "Tech meets fashion",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  },
  {
    id: 5,
    name: "Designer Sunglasses",
    price: 159.99,
    description: "Protect your eyes in style",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories"
  },
  {
    id: 6,
    name: "Premium Headphones",
    price: 249.99,
    description: "Immersive sound experience",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: 49.99,
    description: "Sleek and functional",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories"
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 129.99,
    description: "Performance meets style",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Shoes"
  }
];

export default function ProductGrid() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors duration-200">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-700 transform group-hover:translate-y-0 translate-y-2">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}