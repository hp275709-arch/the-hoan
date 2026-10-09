import React, { useState } from 'react';
import { Mail, Check, ArrowUpRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }
    setSubscribed(true);
    setMessage('Chào mừng bạn đến với HIDDEN! Mã giảm 10% đơn đầu tiên: HIDDEN10 đã được lưu.');
  };

  return (
    <section className="text-center bg-[#f7e7e5] py-16 md:py-20 px-6 border-b border-[#eee8e5]">
      <div className="max-w-[560px] mx-auto">
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#b72e3d]">
          Stay in the loop
        </span>
        <h2 className="font-serif text-[32px] sm:text-[42px] text-[#292322] my-3 font-normal">
          Something special is coming.
        </h2>
        <p className="text-[#766764] text-[13px] leading-relaxed max-w-[420px] mx-auto">
          Đăng ký email để cập nhật bộ sưu tập mới, những câu chuyện truyền cảm hứng và nhận ưu đãi độc quyền từ Hidden.
        </p>

        {subscribed ? (
          <div className="mt-7 p-4 bg-white/90 border border-[#b72e3d]/30 text-[#292322] text-[13px] animate-fadeIn">
            <div className="flex items-center justify-center gap-2 text-[#b72e3d] font-semibold mb-1">
              <Check size={16} />
              <span>Đăng ký thành công!</span>
            </div>
            <p className="text-[12px] text-[#655653]">
              Sử dụng mã coupon <strong className="text-[#b72e3d] tracking-wider font-mono">HIDDEN10</strong> để được giảm 10% cho đơn hàng đầu tiên của bạn.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-[460px] mx-auto mt-7 shadow-xs">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Nhập email của bạn..."
              required
              className="flex-1 min-w-0 bg-white border border-[#d7c8c4] px-4 py-3 text-[13px] text-[#292322] focus:outline-none focus:border-[#b72e3d]"
            />
            <button
              type="submit"
              className="bg-[#292322] hover:bg-[#b72e3d] text-white px-6 py-3 text-[11px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap mt-2 sm:mt-0"
            >
              <span>ĐĂNG KÝ</span>
              <ArrowUpRight size={13} />
            </button>
          </form>
        )}

        {message && !subscribed && (
          <p className="text-[12px] text-[#b72e3d] mt-3">{message}</p>
        )}
      </div>
    </section>
  );
};
