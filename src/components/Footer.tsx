import React from 'react';
import { Home, ShoppingBag, Heart, User } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around items-center p-3 max-w-4xl mx-auto">
        <button className="flex flex-col items-center text-sky-500">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-sky-500">
          <ShoppingBag size={24} />
          <span className="text-xs mt-1">Orders</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-sky-500">
          <Heart size={24} />
          <span className="text-xs mt-1">Favorites</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-sky-500">
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </footer>
  );
}