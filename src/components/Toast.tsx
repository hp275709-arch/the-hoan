import React from 'react';
import { useCart } from '../context/CartContext';
import { Check, ShoppingBag } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage, setIsCartOpen } = useCart();

  if (!toastMessage) return null;

  return (
    <aside aria-label="Thông báo giỏ hàng" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#292322] text-white px-5 py-3 shadow-xl flex items-center gap-3 border border-[#443836] animate-fadeIn max-w-[90vw]">
      <div className="w-5 h-5 rounded-full bg-[#b72e3d] text-white flex items-center justify-center shrink-0">
        <Check size={12} />
      </div>
      <span className="text-[12px] font-medium tracking-wide truncate">
        {toastMessage}
      </span>
      <button
        onClick={() => setIsCartOpen(true)}
        className="ml-2 text-[11px] text-[#ffd6db] hover:underline uppercase font-bold shrink-0"
      >
        Xem túi
      </button>
    </aside>
  );
};
