import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { useSearch } from '../contexts/SearchContext';
import { useServicePagination } from '../hooks/useServicePagination';

const serviceLinks = {
  'Wash & Fold': '/services/wash-and-fold',
  'Dry Cleaning': '/services/dry-cleaning',
  'Shoe Cleaning': '/services/shoe-cleaning',
  'Steam Cleaning': '/services/steam-cleaning',
  'Wash & Iron': '/services/wash-and-iron',
  'Stain Removal': '/services/stain-removal',
  'Premium Dry Cleaning': '/services/premium-dry-cleaning',
  'Express Service': '/services/express-service'
};

const ITEMS_PER_PAGE = 4;

export function ServicesSection() {
  const { filteredServices } = useSearch();
  const { 
    currentItems: currentServices, 
    hasNext, 
    hasPrevious, 
    next, 
    previous 
  } = useServicePagination(filteredServices, ITEMS_PER_PAGE);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Our Services</h2>
        <div className="flex gap-2">
          {hasPrevious && (
            <button 
              onClick={previous}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {hasNext && (
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {currentServices.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            link={serviceLinks[service.title as keyof typeof serviceLinks] || '#'}
          />
        ))}
      </div>
    </section>
  );
}