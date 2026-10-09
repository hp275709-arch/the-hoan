import React from 'react';
import { useCart, formatMoney } from '../context/CartContext';
import { X, Trash2, ArrowUpRight, Sparkles, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOpenCheckout }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQty,
    removeItem,
    subtotal,
    freeShippingThreshold,
    freeShippingRemaining,
    isFreeShipping
  } = useCart();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs transition-opacity duration-300"
      onClick={() => setIsCartOpen(false)}
    >
      <aside
        className="w-full max-w-[430px] bg-white h-full shadow-2xl flex flex-col border-l border-[#eee8e5] animate-slideInRight"
        onClick={e => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#eee8e5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-[#b72e3d]" />
            <h2 id="cart-drawer-title" className="font-serif text-[24px] text-[#292322] font-normal">
              Giỏ hàng của bạn
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-gray-500 hover:text-[#292322] hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Đóng giỏ hàng"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="bg-[#fffaf6] px-5 py-3.5 border-b border-[#eee8e5]">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="font-semibold text-[#292322] flex items-center gap-1">
              <Sparkles size={12} className="text-[#b72e3d]" />
              {isFreeShipping ? (
                <span className="text-[#b72e3d] font-bold">Bạn đã đủ điều kiện Freeship toàn quốc! 🎉</span>
              ) : (
                <span>
                  Mua thêm <strong className="text-[#b72e3d]">{formatMoney(freeShippingRemaining)}</strong> để được Freeship
                </span>
              )}
            </span>
            <span className="text-[#857c78] font-mono tabular-nums">{progressPercent}%</span>
          </div>
          <div className="w-full bg-[#e8dfdb] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#b72e3d] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-[#f0eae6]">
          {cart.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-[#f7e7e5] rounded-full flex items-center justify-center text-[#b72e3d] mb-4">
                <ShoppingBag size={24} />
              </div>
              <p className="text-[14px] font-medium text-[#292322] mb-1">
                Túi xách của bạn đang trống
              </p>
              <p className="text-[12px] text-[#857c78] max-w-[240px]">
                Hãy khám phá những chiếc charm và vòng tay mang đậm dấu ấn riêng của bạn!
              </p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="py-4 flex gap-3.5 first:pt-0 last:pb-0">
                <div className="w-20 h-24 bg-[#f4efec] shrink-0 border border-[#eee8e5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#292322] leading-snug line-clamp-1">
                      {item.name}
                    </h4>

                    {item.customText && (
                      <p className="text-[11px] text-[#b72e3d] mt-0.5 line-clamp-1">
                        Khắc: &ldquo;{item.customText}&rdquo;
                      </p>
                    )}

                    {item.size && (
                      <p className="text-[11px] text-[#857c78] mt-0.5">
                        Cỡ vòng: {item.size}
                      </p>
                    )}

                    {item.variantNote && (
                      <p className="text-[10px] text-[#857c78] mt-0.5 italic line-clamp-1">
                        {item.variantNote}
                      </p>
                    )}

                    <div className="text-[13px] font-bold text-[#292322] mt-1 tabular-nums">
                      {formatMoney(item.price)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1">
                    <div className="flex items-center border border-[#d7c8c4] bg-white">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 text-[12px]"
                        aria-label="Giảm số lượng"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-[12px] font-semibold tabular-nums">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 text-[12px]"
                        aria-label="Tăng số lượng"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[11px] text-[#b72e3d] hover:underline flex items-center gap-1 p-1"
                    >
                      <Trash2 size={12} />
                      <span>Xóa</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#eee8e5] bg-white space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-[13px] text-[#655653]">Tạm tính:</span>
              <span className="text-[18px] font-bold font-serif text-[#292322] tabular-nums">
                {formatMoney(subtotal)}
              </span>
            </div>

            <div className="flex justify-between text-[11px] text-[#857c78]">
              <span>Phí vận chuyển:</span>
              <span>{isFreeShipping ? 'Miễn phí (Toàn quốc)' : '30.000₫ (Đơn dưới 499k)'}</span>
            </div>

            <p className="text-[10px] text-[#857c78] leading-normal pt-1">
              Đơn hàng đi kèm hộp quà Signature và túi nhung bảo vệ trang sức.
            </p>

            <button
              onClick={() => {
                setIsCartOpen(false);
                onOpenCheckout();
              }}
              className="w-full bg-[#292322] hover:bg-[#b72e3d] text-white py-3.5 px-4 text-[12px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Tiến hành đặt hàng</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
