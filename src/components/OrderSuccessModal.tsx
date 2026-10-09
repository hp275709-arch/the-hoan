import React from 'react';
import { OrderData } from './CheckoutModal';
import { formatMoney } from '../context/CartContext';
import { CheckCircle2, PackageCheck, Copy, Sparkles, ArrowRight } from 'lucide-react';

interface OrderSuccessModalProps {
  order: OrderData | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  onClose
}) => {
  if (!order) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-[560px] w-full max-h-[90vh] overflow-y-auto border border-[#eee8e5] p-6 sm:p-8 shadow-2xl relative text-center"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-16 h-16 bg-[#f7e7e5] rounded-full flex items-center justify-center text-[#b72e3d] mx-auto mb-4">
          <CheckCircle2 size={36} />
        </div>

        <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#b72e3d]">
          Cảm ơn bạn đã lựa chọn Xich Cho
        </span>

        <h2 id="success-modal-title" className="font-serif text-[30px] sm:text-[34px] text-[#292322] my-2 font-normal">
          Đặt hàng thành công!
        </h2>

        <p className="text-[13px] text-[#857c78] leading-relaxed max-w-[420px] mx-auto mb-6">
          Mã đơn hàng của bạn là <strong className="text-[#292322] font-mono tracking-wider">{order.orderId}</strong>. Chúng tôi đã nhận được thông tin và đang chuẩn bị chế tác món trang sức của bạn.
        </p>

        {/* Order Receipt Card */}
        <div className="bg-[#fffaf6] border border-[#eee8e5] p-5 text-left text-[12px] space-y-3 mb-6">
          <div className="flex justify-between pb-2 border-b border-[#eee8e5]">
            <span className="text-[#857c78]">Người nhận:</span>
            <span className="font-semibold text-[#292322]">{order.customerName} ({order.phone})</span>
          </div>

          <div className="flex justify-between pb-2 border-b border-[#eee8e5]">
            <span className="text-[#857c78]">Địa chỉ giao:</span>
            <span className="font-medium text-[#292322] text-right max-w-[280px]">{order.address}</span>
          </div>

          <div className="flex justify-between pb-2 border-b border-[#eee8e5]">
            <span className="text-[#857c78]">Hình thức thanh toán:</span>
            <span className="font-semibold text-[#b72e3d]">
              {order.paymentMethod === 'COD' ? 'Thanh toán khi nhận hàng (COD)' : 'Chuyển khoản VietQR'}
            </span>
          </div>

          <div className="py-1">
            <span className="text-[#857c78] block mb-1 font-semibold">Sản phẩm ({order.items.length}):</span>
            <ul className="space-y-1 pl-2 text-[#292322]">
              {order.items.map((it, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>• {it.name} {it.customText ? `(Khắc: ${it.customText})` : ''} x{it.qty}</span>
                  <span className="font-mono tabular-nums">{formatMoney(it.price * it.qty)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between pt-2 border-t border-[#eee8e5] font-bold text-[14px]">
            <span>Tổng thanh toán:</span>
            <span className="text-[#b72e3d] font-serif text-[18px] tabular-nums">
              {formatMoney(order.total)}
            </span>
          </div>
        </div>

        {/* Timeline estimate */}
        <div className="flex items-center justify-center gap-2 text-[12px] text-[#857c78] mb-6">
          <PackageCheck size={16} className="text-[#b72e3d]" />
          <span>Dự kiến giao hàng trong 2–3 ngày làm việc</span>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#292322] hover:bg-[#b72e3d] text-white py-3.5 px-6 text-[12px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
        >
          <span>Tiếp tục mua sắm</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
