import React from 'react';
import { Product } from '../data/products';
import { formatMoney, useCart } from '../context/CartContext';
import { Eye, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenQuickView
}) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    // If product has complex customization, open quick view, else add directly
    if (product.customizable && product.category === 'charm-photo') {
      onOpenQuickView(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <article
      onClick={() => onOpenQuickView(product)}
      className="group cursor-pointer min-w-0 flex flex-col transition-all duration-300"
    >
      {/* Product Image Frame */}
      <div className="relative overflow-hidden bg-[#f4efec] aspect-[4/4.8] border border-[#f0eae6]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Tag Badge */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-white/95 text-[#292322] px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase shadow-xs">
            {product.tag}
          </span>
        )}

        {/* Quick View Pill / Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenQuickView(product);
          }}
          className="absolute top-3 right-3 bg-white/90 hover:bg-[#b72e3d] hover:text-white text-[#292322] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm"
          title="Xem chi tiết"
          aria-label="Xem chi tiết sản phẩm"
        >
          <Eye size={14} />
        </button>

        {/* Quick Add Button */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 py-3 px-2 bg-white/95 hover:bg-[#b72e3d] hover:text-white text-[#292322] text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm opacity-90 group-hover:opacity-100"
        >
          <Plus size={14} />
          <span>+ Thêm vào giỏ</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="pt-3.5 pb-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[#c49a50] text-[11px] mb-1">
            <span>★★★★★</span>
            <span className="text-[10px] text-[#857c78] tabular-nums">({product.reviewsCount})</span>
          </div>

          <h3 className="text-[13px] font-medium text-[#292322] group-hover:text-[#b72e3d] transition-colors line-clamp-1 mb-1.5">
            {product.name}
          </h3>
        </div>

        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-[14px] font-bold text-[#292322] tabular-nums">
            {formatMoney(product.price)}
          </span>
          {product.oldPrice && product.oldPrice > 0 ? (
            <span className="text-[12px] text-[#aaa] line-through tabular-nums">
              {formatMoney(product.oldPrice)}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
};
