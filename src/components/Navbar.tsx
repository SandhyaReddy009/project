import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">ShopStyle</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Shop</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Categories</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-600">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-indigo-600 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </button>
            <button className="md:hidden text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}