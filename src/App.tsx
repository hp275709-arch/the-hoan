import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductGrid } from './components/ProductGrid';
import { BraceletBuilder } from './components/BraceletBuilder';
import { Collections } from './components/Collections';
import { Story } from './components/Story';
import { HowToSteps } from './components/HowToSteps';
import { Faq } from './components/Faq';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CheckoutModal, OrderData } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { Toast } from './components/Toast';
import { Product } from './data/products';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [successOrder, setSuccessOrder] = useState<OrderData | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCollection = (catKey: string) => {
    setSelectedCategory(catKey);
    scrollToSection('products');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#292322]">
      {/* Header with sticky navigation, search, cart counter */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenStudio={() => scrollToSection('studio')}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('products')}
          onOpenStudio={() => scrollToSection('studio')}
        />

        {/* 2. Benefits 4-Pillar Strip */}
        <Benefits />

        {/* 3. Best Sellers / Products Section */}
        <ProductGrid
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onOpenQuickView={p => setQuickViewProduct(p)}
          onExploreCollections={() => scrollToSection('collections')}
        />

        {/* 4. Interactive Mix & Match Bracelet Studio */}
        <BraceletBuilder />

        {/* 5. Collections */}
        <Collections onSelectCategory={handleSelectCollection} />

        {/* 6. Brand Story */}
        <Story onStoryAction={() => scrollToSection('studio')} />

        {/* 7. How To Mix & Match (4 Steps & Size Guide) */}
        <HowToSteps />

        {/* 8. Frequently Asked Questions */}
        <Faq />

        {/* 9. Newsletter Email Signup */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer onOpenCheckout={() => setIsCheckoutOpen(true)} />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderSuccess={order => setSuccessOrder(order)}
      />

      {/* Order Success Confirmation Modal */}
      <OrderSuccessModal
        order={successOrder}
        onClose={() => setSuccessOrder(null)}
      />

      {/* Floating Action / Toast Feedback */}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
