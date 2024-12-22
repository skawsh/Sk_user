import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { OfferSlideshow } from './components/offers/OfferSlideshow';
import { ServicesSection } from './components/ServicesSection';
import { ShopsSection } from './components/shops/ShopsSection';
import { ShopProfile } from './components/shops/ShopProfile';
import { WashAndFoldPage } from './components/services/WashAndFoldPage';
import { SearchProvider } from './contexts/SearchContext';

export default function App() {
  return (
    <Router>
      <SearchProvider>
        <Routes>
          <Route path="/" element={
            <Layout>
              <OfferSlideshow />
              <ServicesSection />
              <ShopsSection />
            </Layout>
          } />
          <Route path="/shop/:shopId" element={<ShopProfile />} />
          <Route path="/services/wash-and-fold" element={<WashAndFoldPage />} />
        </Routes>
      </SearchProvider>
    </Router>
  );
}