import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  id: string; // unique cart entry id
  productId: number;
  name: string;
  price: number;
  image: string;
  qty: number;
  customText?: string;
  size?: string;
  variantNote?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, options?: { customText?: string; size?: string; variantNote?: string; qty?: number }) => void;
  addCustomSetToCart: (name: string, price: number, image: string, note: string) => void;
  updateQty: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  isFreeShipping: boolean;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hidden_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('hidden_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 2800);
  };

  const addToCart = (product: Product, options?: { customText?: string; size?: string; variantNote?: string; qty?: number }) => {
    const qty = options?.qty || 1;
    const customKey = `${product.id}-${options?.customText || ''}-${options?.size || ''}`;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.id === customKey);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          qty: next[existingIndex].qty + qty
        };
        return next;
      } else {
        return [
          ...prev,
          {
            id: customKey,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty,
            customText: options?.customText,
            size: options?.size,
            variantNote: options?.variantNote
          }
        ];
      }
    });

    showToast(`Đã thêm "${product.name}" vào túi xách`);
  };

  const addCustomSetToCart = (name: string, price: number, image: string, note: string) => {
    const customKey = `custom-studio-${Date.now()}`;
    setCart(prev => [
      ...prev,
      {
        id: customKey,
        productId: 9999,
        name,
        price,
        image,
        qty: 1,
        variantNote: note
      }
    ]);
    showToast(`Đã thêm set tự thiết kế vào túi xách!`);
    setIsCartOpen(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            const nextQty = item.qty + delta;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const freeShippingThreshold = 499000;
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const isFreeShipping = subtotal >= freeShippingThreshold;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        addCustomSetToCart,
        updateQty,
        removeItem,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        freeShippingThreshold,
        freeShippingRemaining,
        isFreeShipping,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const formatMoney = (n: number) => n.toLocaleString('vi-VN') + '₫';
