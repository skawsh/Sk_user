import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  image: string;
  link: string;
}

export function ServiceCard({ title, image, link }: ServiceCardProps) {
  return (
    <Link to={link} className="block">
      <div className="relative bg-white rounded-xl shadow-md overflow-hidden group">
        <div className="h-32 sm:h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm sm:text-base text-center">{title}</h3>
        </div>
      </div>
    </Link>
  );
}