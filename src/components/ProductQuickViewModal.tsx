import React, { useState } from 'react';
import { Product } from '../data/products';
import { formatMoney, useCart } from '../context/CartContext';
import { X, Check, ShieldCheck, Sparkles, Heart } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose
}) => {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [customText, setCustomText] = useState('');
  const [selectedSize, setSelectedSize] = useState('17cm (Vừa vặn)');
  const [userNote, setUserNote] = useState('');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, {
      qty,
      customText: customText.trim() || undefined,
      size: product.category === 'bracelet' || product.category === 'gift-set' ? selectedSize : undefined,
      variantNote: userNote.trim() || undefined
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 700);
  };

  const isBraceletOrSet = product.category === 'bracelet' || product.category === 'gift-set';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-[850px] w-full max-h-[90vh] overflow-y-auto rounded-none border border-[#eee8e5] shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#857c78] hover:text-[#292322] bg-white/80 hover:bg-white rounded-full transition-colors"
          aria-label="Đóng"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="bg-[#f7e7e5]/40 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#eee8e5] relative">
            <div className="relative aspect-[4/4.8] w-full max-w-[340px] overflow-hidden bg-[#f4efec] shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-white text-[#292322] px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase">
                  {product.tag}
                </span>
              )}
            </div>
          </div>

          {/* Details & Customization */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[12px] text-[#857c78]">
                <span>{product.categoryLabel}</span>
                <span>•</span>
                <span className="text-[#c49a50]">★★★★★ {product.rating}</span>
                <span>({product.reviewsCount} đánh giá)</span>
              </div>

              <h2 id="product-modal-title" className="font-serif text-[28px] md:text-[32px] text-[#292322] leading-tight mb-2">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[20px] font-bold text-[#b72e3d] tabular-nums">
                  {formatMoney(product.price)}
                </span>
                {product.oldPrice && product.oldPrice > 0 ? (
                  <span className="text-[14px] text-[#aaa] line-through tabular-nums">
                    {formatMoney(product.oldPrice)}
                  </span>
                ) : null}
              </div>

              <p className="text-[13px] text-[#655653] leading-relaxed mb-4 border-b border-[#eee8e5] pb-4">
                {product.description}
              </p>

              <div className="text-[12px] text-[#292322] space-y-1 mb-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#b72e3d]" />
                  <span><strong>Chất liệu:</strong> {product.material}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#b72e3d]" />
                  <span><strong>Bảo hành:</strong> Đánh sáng và làm sạch trọn đời</span>
                </div>
              </div>

              {/* Customization Fields */}
              {product.customizable && (
                <div className="space-y-4 mb-6 bg-[#fffaf6] p-4 border border-[#eee8e5]">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#292322] mb-1.5">
                      {product.category === 'charm-photo' ? 'Ghi chú ảnh kỷ niệm muốn in:' : 'Nội dung khắc tên / chữ cái (tùy chọn):'}
                    </label>
                    <input
                      type="text"
                      value={customText}
                      onChange={e => setCustomText(e.target.value)}
                      placeholder={product.category === 'charm-photo' ? 'VD: Ảnh kỷ niệm ngày cưới, ảnh gửi qua Zalo/Email' : 'VD: M & H 2026 hoặc Tên "Linh"'}
                      className="w-full text-[12px] px-3 py-2 border border-[#d7c8c4] bg-white focus:outline-none focus:border-[#b72e3d]"
                    />
                  </div>

                  {isBraceletOrSet && (
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#292322] mb-1.5">
                        Chọn kích thước vòng tay:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['16cm (Cổ tay nhỏ)', '17cm (Vừa vặn)', '18cm (Thoải mái)'].map(sz => (
                          <button
                            type="button"
                            key={sz}
                            onClick={() => setSelectedSize(sz)}
                            className={`text-[11px] py-1.5 px-2 border transition-colors ${
                              selectedSize === sz
                                ? 'border-[#b72e3d] bg-[#f7e7e5] text-[#b72e3d] font-bold'
                                : 'border-[#d7c8c4] bg-white text-[#292322] hover:border-gray-400'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#292322] mb-1">
                      Yêu cầu đóng gói quà tặng:
                    </label>
                    <input
                      type="text"
                      value={userNote}
                      onChange={e => setUserNote(e.target.value)}
                      placeholder="VD: Kèm thiệp chúc mừng sinh nhật, thắt nơ đỏ..."
                      className="w-full text-[12px] px-3 py-1.5 border border-[#d7c8c4] bg-white focus:outline-none focus:border-[#b72e3d]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Quantity and Add to Cart Button */}
            <div className="pt-4 border-t border-[#eee8e5] flex items-center gap-3">
              <div className="flex items-center border border-[#d7c8c4]">
                <button
                  type="button"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-8 h-9 flex items-center justify-center hover:bg-gray-100 text-[14px]"
                >
                  −
                </button>
                <span className="w-9 text-center text-[13px] font-semibold tabular-nums">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty(q => q + 1)}
                  className="w-8 h-9 flex items-center justify-center hover:bg-gray-100 text-[14px]"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={added}
                className="flex-1 bg-[#292322] hover:bg-[#b72e3d] text-white text-[12px] font-semibold tracking-wider uppercase py-3 px-6 transition-colors flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check size={16} />
                    <span>Đã thêm vào giỏ!</span>
                  </>
                ) : (
                  <>
                    <span>Thêm vào túi • {formatMoney(product.price * qty)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
