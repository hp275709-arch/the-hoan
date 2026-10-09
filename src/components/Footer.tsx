import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#292322] text-white pt-16 pb-8 px-6 border-t border-[#3e3433]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <a href="#home" className="font-serif text-[32px] font-bold tracking-[5px] text-white inline-block mb-3 hover:text-[#ffd6db] transition-colors">
            HIDDEN
          </a>
          <p className="text-[#c6bdb9] text-[13px] leading-relaxed max-w-[380px]">
            Your Bracelet. Your Story.<br />
            Những món trang sức nhỏ bé, những câu chuyện lớn lao. Mỗi sản phẩm được hoàn thiện bằng sự tỉ mỉ của những người thợ kim hoàn tận tâm.
          </p>
          <div className="mt-5 text-[12px] text-[#a89e9a] space-y-1">
            <p>✦ Hotline: 0987.654.321 (09:00 - 21:00)</p>
            <p>✦ Email: hello@hiddenjewelry.vn</p>
            <p>✦ Flagship Store: 18 Phố Cổ, Hoàn Kiếm, Hà Nội</p>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-[12px] font-bold tracking-[1.5px] uppercase text-white mb-4">
            Khám phá
          </h4>
          <ul className="space-y-2.5 text-[13px] text-[#c6bdb9]">
            <li>
              <a href="#products" className="hover:text-white transition-colors">Sản phẩm bán chạy</a>
            </li>
            <li>
              <a href="#collections" className="hover:text-white transition-colors">Bộ sưu tập theo mùa</a>
            </li>
            <li>
              <a href="#studio" className="hover:text-[#ffd6db] transition-colors">Studio Mix Vòng Tay</a>
            </li>
            <li>
              <a href="#story" className="hover:text-white transition-colors">Câu chuyện Hidden</a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-[12px] font-bold tracking-[1.5px] uppercase text-white mb-4">
            Hỗ trợ & Dịch vụ
          </h4>
          <ul className="space-y-2.5 text-[13px] text-[#c6bdb9]">
            <li>
              <a href="#faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</a>
            </li>
            <li>
              <a href="#how-to" className="hover:text-white transition-colors">Hướng dẫn đo size cổ tay</a>
            </li>
            <li>
              <a href="#home" className="hover:text-white transition-colors">Chính sách bảo hành làm sáng</a>
            </li>
            <li>
              <a href="#home" className="hover:text-white transition-colors">Chính sách đổi trả trong 7 ngày</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-12 pt-6 border-t border-[#443836] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9c918d] gap-3">
        <p>© 2026 HIDDEN JEWELRY STUDIO. ALL RIGHTS RESERVED.</p>
        <p className="tracking-wide">DESIGNED WITH CARE FOR JEWELRY LOVERS</p>
      </div>
    </footer>
  );
};
