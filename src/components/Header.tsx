import React from 'react';
import { MapPin, User, Search as SearchIcon } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { FiltersBar } from './filters/FiltersBar';

export function Header() {
  const { query, setQuery } = useSearch();
  const isVisible = useScrollDirection();

  const handleLocationClick = () => {
    alert('Location feature clicked');
  };

  const handleProfileClick = () => {
    alert('Profile clicked');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Oval background */}
      <div className="absolute inset-x-0 top-0 h-32 bg-sky-500 rounded-b-[50%] shadow-lg" />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <button 
            onClick={handleLocationClick}
            className="p-2 hover:bg-sky-600 rounded-full transition-colors text-white"
          >
            <MapPin size={24} />
          </button>
          
          <h1 className="text-2xl font-bold text-white">Skawsh</h1>
          
          <button 
            onClick={handleProfileClick}
            className="p-2 hover:bg-sky-600 rounded-full transition-colors text-white"
          >
            <User size={24} />
          </button>
        </div>

        {/* Search bar */}
        <div className="relative mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for services..."
            className="w-full pl-12 pr-4 py-2.5 rounded-full border-none focus:ring-2 focus:ring-sky-600 outline-none text-sm"
          />
          <SearchIcon 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
            size={18} 
          />
        </div>

        {/* Filters */}
        <FiltersBar />
      </div>
    </header>
  );
}