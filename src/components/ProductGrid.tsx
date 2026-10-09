import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

interface ProductGridProps {
  searchQuery: string;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onOpenQuickView: (product: Product) => void;
  onExploreCollections: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  searchQuery,
  selectedCategory,
  setSelectedCategory,
  onOpenQuickView,
  onExploreCollections
}) => {
  const categories = [
    { key: 'all', label: 'Tất cả' },
    { key: 'charm-text', label: 'Charm Chữ / Khắc Tên' },
    { key: 'charm-photo', label: 'Charm In Ảnh' },
    { key: 'charm-plain', label: 'Charm Trơn & Biểu Tượng' },
    { key: 'bracelet', label: 'Vòng Tay' },
    { key: 'gift-set', label: 'Gift Sets' }
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.tag && p.tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' ||
      p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="max-w-[1240px] mx-auto py-16 md:py-24 px-6">
      {/* Section Heading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#b72e3d]">
            The favorites
          </span>
          <h2 className="font-serif text-[32px] sm:text-[44px] text-[#292322] mt-1 mb-1 font-normal">
            Best Sellers
          </h2>
          <p className="text-[13px] text-[#857c78]">
            Những món đồ được yêu thích nhất nhà Xich Cho.
          </p>
        </div>

        <button
          onClick={onExploreCollections}
          className="text-[11px] font-bold uppercase tracking-[1px] text-[#292322] hover:text-[#b72e3d] pb-1 border-b border-[#292322] hover:border-[#b72e3d] transition-colors self-start sm:self-auto flex items-center gap-1"
        >
          <span>Khám phá bộ sưu tập</span>
          <ArrowUpRight size={13} />
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar border-b border-[#f0eae6]">
        {categories.map(c => {
          const isActive = selectedCategory === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setSelectedCategory(c.key)}
              className={`px-4 py-2 text-[12px] font-semibold whitespace-nowrap transition-colors uppercase tracking-wider ${
                isActive
                  ? 'bg-[#292322] text-white shadow-xs'
                  : 'bg-[#f7f5f4] text-[#655653] hover:bg-[#eee8e5] hover:text-[#292322]'
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Active Search Notice if Searching */}
      {searchQuery && (
        <div className="mb-6 text-[13px] text-[#857c78] flex items-center justify-between bg-[#fffaf6] p-3 border border-[#eee8e5]">
          <span>
            Kết quả tìm kiếm cho: &ldquo;<strong className="text-[#292322]">{searchQuery}</strong>&rdquo; ({filteredProducts.length} sản phẩm)
          </span>
          <button
            onClick={() => setSelectedCategory('all')}
            className="text-[11px] text-[#b72e3d] hover:underline uppercase font-bold"
          >
            Hiện tất cả
          </button>
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#fffaf6] border border-[#eee8e5] p-8">
          <p className="text-[15px] font-medium text-[#292322] mb-2">
            Không tìm thấy sản phẩm phù hợp.
          </p>
          <p className="text-[12px] text-[#857c78] mb-4">
            Hãy thử tìm bằng từ khóa khác hoặc xóa bộ lọc để xem toàn bộ danh mục sản phẩm.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
            }}
            className="px-6 py-2.5 bg-[#292322] text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#b72e3d] transition-colors"
          >
            Xem tất cả sản phẩm
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenQuickView={onOpenQuickView}
            />
          ))}
        </div>
      )}
    </section>
  );
};
