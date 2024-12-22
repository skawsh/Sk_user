import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="max-w-4xl mx-auto px-4 pt-48 pb-24 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}