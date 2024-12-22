import React, { createContext, useContext, useState } from 'react';
import { services } from '../data/services';

type FilterType = 'nearby' | 'topRated' | 'offers' | 'quick' | 'budget' | null;

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  filteredServices: typeof services;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>(null);

  const filteredServices = services.filter(service => {
    const matchesQuery = service.title.toLowerCase().includes(query.toLowerCase()) ||
                        service.description.toLowerCase().includes(query.toLowerCase());
    
    if (!matchesQuery) return false;
    
    if (!activeFilter) return true;
    
    // Apply filters
    switch (activeFilter) {
      case 'nearby':
        return service.distance && service.distance <= 5; // Within 5km
      case 'topRated':
        return service.rating && service.rating >= 4.5;
      case 'offers':
        return service.discount;
      case 'quick':
        return service.deliveryTime && service.deliveryTime <= 24;
      case 'budget':
        return service.priceRange === 'low';
      default:
        return true;
    }
  });

  return (
    <SearchContext.Provider value={{ 
      query, 
      setQuery, 
      activeFilter, 
      setActiveFilter, 
      filteredServices 
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}