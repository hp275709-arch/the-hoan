import React, { useState } from 'react';
import { useCart, formatMoney } from '../context/CartContext';
import { X, Check, Truck, CreditCard, ShieldCheck } from 'lucide-react';

export interface OrderData {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  paymentMethod: 'COD' | 'BANKING';
  total: number;
  items: Array<{
    name: string;
    qty: number;
    price: number;
    customText?: string;
  }>;
  createdAt: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderSuccess: (order: OrderData) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onOrderSuccess
}) => {
  const { cart, subtotal, isFreeShipping, clearCart } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Hà Nội');
  const [note, setNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'BANKING'>('COD');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const shippingFee = isFreeShipping ? 0 : 30000;
  const finalTotal = subtotal + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ nhận hàng.');
      return;
    }

    if (cart.length === 0) {
      setErrorMsg('Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi đặt.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      const orderId = `XC-${Math.floor(1000 + Math.random() * 9000)}`;
      const orderData: OrderData = {
        orderId,
        customerName: customerName.trim(),
        phone: phone.trim(),
        address: `${address.trim()}, ${city}`,
        paymentMethod,
        total: finalTotal,
        items: cart.map(i => ({
          name: i.name,
          qty: i.qty,
          price: i.price,
          customText: i.customText
        })),
        createdAt: new Date().toLocaleDateString('vi-VN')
      };

      clearCart();
      setIsSubmitting(false);
      onOrderSuccess(orderData);
      onClose();
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-[700px] w-full max-h-[90vh] overflow-y-auto border border-[#eee8e5] shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-[#eee8e5] flex items-center justify-between">
          <div>
            <h2 id="checkout-modal-title" className="font-serif text-[26px] text-[#292322] font-normal">
              Thông tin đặt hàng
            </h2>
            <p className="text-[12px] text-[#857c78]">
              Xác nhận thông tin giao hàng & phương thức thanh toán
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 rounded-full"
            aria-label="Đóng"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 text-[12px]">
              {errorMsg}
            </div>
          )}

          {/* Customer Info */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#292322] border-b border-[#eee8e5] pb-2">
              1. Địa chỉ nhận hàng
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium text-[#292322] mb-1">
                  Họ và tên người nhận *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  placeholder="VD: Nguyễn Mai Linh"
                  className="w-full text-[13px] px-3.5 py-2.5 border border-[#d7c8c4] focus:outline-none focus:border-[#b72e3d]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#292322] mb-1">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="VD: 0987654321"
                  className="w-full text-[13px] px-3.5 py-2.5 border border-[#d7c8c4] focus:outline-none focus:border-[#b72e3d]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-medium text-[#292322] mb-1">
                  Địa chỉ chi tiết (Số nhà, tên đường, phường) *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="VD: 45 Hàng Trống, P. Hàng Gai, Hoàn Kiếm"
                  className="w-full text-[13px] px-3.5 py-2.5 border border-[#d7c8c4] focus:outline-none focus:border-[#b72e3d]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#292322] mb-1">
                  Tỉnh / Thành phố
                </label>
                <select
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full text-[13px] px-3 py-2.5 border border-[#d7c8c4] bg-white focus:outline-none focus:border-[#b72e3d]"
                >
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Hải Phòng">Hải Phòng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                  <option value="Tỉnh khác">Tỉnh khác</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#292322] mb-1">
                Ghi chú cho xưởng làm vòng / Người giao hàng (Tùy chọn)
              </label>
              <textarea
                rows={2}
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="VD: Giao giờ hành chính, gọi trước khi đến, đóng gói cẩn thận giúp mình..."
                className="w-full text-[12px] px-3.5 py-2 border border-[#d7c8c4] focus:outline-none focus:border-[#b72e3d]"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#292322] border-b border-[#eee8e5] pb-2">
              2. Phương thức thanh toán
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                onClick={() => setPaymentMethod('COD')}
                className={`p-3.5 border cursor-pointer flex items-center gap-3 transition-colors ${
                  paymentMethod === 'COD'
                    ? 'border-[#b72e3d] bg-[#f7e7e5]/50'
                    : 'border-[#e8dfdb] hover:border-gray-400'
                }`}
              >
                <Truck size={18} className="text-[#b72e3d]" />
                <div>
                  <div className="text-[12px] font-semibold text-[#292322]">
                    Thanh toán COD
                  </div>
                  <div className="text-[11px] text-[#857c78]">
                    Trả tiền mặt khi nhận hàng tận nơi
                  </div>
                </div>
              </label>

              <label
                onClick={() => setPaymentMethod('BANKING')}
                className={`p-3.5 border cursor-pointer flex items-center gap-3 transition-colors ${
                  paymentMethod === 'BANKING'
                    ? 'border-[#b72e3d] bg-[#f7e7e5]/50'
                    : 'border-[#e8dfdb] hover:border-gray-400'
                }`}
              >
                <CreditCard size={18} className="text-[#b72e3d]" />
                <div>
                  <div className="text-[12px] font-semibold text-[#292322]">
                    Chuyển khoản QR
                  </div>
                  <div className="text-[11px] text-[#857c78]">
                    Quét mã QR VietQR (Techcombank / MB)
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Order Summary Box */}
          <div className="bg-[#fffaf6] p-4 border border-[#eee8e5] space-y-2 text-[12px]">
            <div className="flex justify-between text-[#857c78]">
              <span>Tạm tính ({cart.length} món):</span>
              <span className="font-semibold text-[#292322] tabular-nums">{formatMoney(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#857c78]">
              <span>Phí giao hàng:</span>
              <span>{shippingFee === 0 ? <strong className="text-[#b72e3d]">Miễn phí</strong> : formatMoney(shippingFee)}</span>
            </div>
            <div className="border-t border-[#eee8e5] pt-2 flex justify-between items-baseline font-bold text-[14px] text-[#292322]">
              <span>Tổng thanh toán:</span>
              <span className="font-serif text-[20px] text-[#b72e3d] tabular-nums">
                {formatMoney(finalTotal)}
              </span>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-[12px] text-[#857c78] hover:text-[#292322] uppercase tracking-wider"
            >
              Quay lại giỏ hàng
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#292322] hover:bg-[#b72e3d] text-white px-8 py-3.5 text-[12px] font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
            >
              {isSubmitting ? 'Đang tạo đơn hàng...' : 'Xác nhận đặt hàng ↗'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
