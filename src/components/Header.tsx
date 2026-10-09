import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenStudio?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenStudio
}) => {
  const { totalItems, setIsCartOpen, isFreeShipping, freeShippingRemaining } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <aside aria-label="Thông báo khuyến mãi" className="bg-[#b72e3d] text-white text-center py-2.5 px-4 text-[11px] font-medium tracking-[1.4px] flex items-center justify-center gap-2">
        <span>FREE SHIPPING CHO ĐƠN HÀNG TỪ 499K</span>
        <span className="opacity-70">✦</span>
        <span>YOUR STORY, YOUR STYLE</span>
        {isFreeShipping && (
          <span className="hidden sm:inline bg-white/20 px-2 py-0.5 rounded text-[10px] ml-1">
            Đơn của bạn đã đủ điều kiện Freeship!
          </span>
        )}
      </aside>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#eee8e5] transition-all">
        <div className="max-w-[1240px] mx-auto min-h-[76px] px-6 flex items-center justify-between gap-6">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 -ml-2 text-[#292322] hover:text-[#b72e3d] transition-colors"
            aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <a
            href="#home"
            className="font-serif text-[28px] sm:text-[32px] font-bold tracking-[5px] text-[#292322] hover:text-[#b72e3d] transition-colors"
          >
            HIDDEN
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[12px] font-semibold tracking-wider uppercase text-[#292322]">
            <a
              href="#products"
              className="hover:text-[#b72e3d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#b72e3d] hover:after:w-full after:transition-all"
            >
              Sản phẩm
            </a>
            <a
              href="#collections"
              className="hover:text-[#b72e3d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#b72e3d] hover:after:w-full after:transition-all"
            >
              Bộ sưu tập
            </a>
            <a
              href="#studio"
              onClick={onOpenStudio}
              className="text-[#b72e3d] flex items-center gap-1.5 py-1 font-bold hover:opacity-85 transition-opacity"
            >
              <Sparkles size={13} />
              Studio Mix Vòng
            </a>
            <a
              href="#story"
              className="hover:text-[#b72e3d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#b72e3d] hover:after:w-full after:transition-all"
            >
              Về Hidden
            </a>
            <a
              href="#how-to"
              className="hover:text-[#b72e3d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#b72e3d] hover:after:w-full after:transition-all"
            >
              Cách mix vòng
            </a>
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleSearch}
              className="flex items-center gap-1.5 text-[13px] text-[#292322] hover:text-[#b72e3d] px-2 py-1.5 rounded transition-colors"
              aria-label="Tìm kiếm sản phẩm"
            >
              <Search size={16} />
              <span className="hidden sm:inline">Tìm kiếm</span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 text-[13px] text-[#292322] hover:text-[#b72e3d] px-2 py-1.5 rounded transition-colors group"
              aria-label={`Giỏ hàng: ${totalItems} món`}
            >
              <ShoppingBag size={16} className="group-hover:scale-105 transition-transform" />
              <span>Túi</span>
              <span
                id="cart-count"
                className="bg-[#b72e3d] text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1.5 tabular-nums transition-transform group-hover:scale-110"
              >
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Collapsible Search Area */}
        {isSearchOpen && (
          <div className="border-t border-[#eee8e5] bg-[#fffaf6] px-6 py-4 animate-fadeIn">
            <div className="max-w-[640px] mx-auto flex items-center gap-3">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#857c78]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Tìm vòng tay, charm chữ, charm in ảnh, gift set..."
                  autoFocus
                  className="w-full pl-10 pr-10 py-2.5 text-[13px] bg-white border border-[#e2d9d5] rounded-none focus:outline-none focus:border-[#b72e3d] text-[#292322]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                    aria-label="Xóa nội dung tìm kiếm"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
              <button
                onClick={toggleSearch}
                className="text-[12px] text-[#857c78] hover:text-[#292322] uppercase tracking-wider font-semibold whitespace-nowrap"
              >
                Đóng
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#eee8e5] px-6 py-5 flex flex-col gap-4 text-[13px] font-semibold uppercase tracking-wider animate-fadeIn">
            <a
              href="#products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#f4efec] hover:text-[#b72e3d]"
            >
              Sản phẩm
            </a>
            <a
              href="#collections"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#f4efec] hover:text-[#b72e3d]"
            >
              Bộ sưu tập
            </a>
            <a
              href="#studio"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenStudio?.();
              }}
              className="py-2 border-b border-[#f4efec] text-[#b72e3d] flex items-center justify-between"
            >
              <span>Studio Mix Vòng</span>
              <Sparkles size={15} />
            </a>
            <a
              href="#story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#f4efec] hover:text-[#b72e3d]"
            >
              Về Hidden
            </a>
            <a
              href="#how-to"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#f4efec] hover:text-[#b72e3d]"
            >
              Cách mix vòng
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 hover:text-[#b72e3d]"
            >
              Hỏi đáp (FAQ)
            </a>
          </div>
        )}
      </header>
    </>
  );
};
