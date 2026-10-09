import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenStudio }) => {
  return (
    <section id="home" className="min-h-[580px] bg-[#f7e7e5] grid grid-cols-1 md:grid-cols-2 overflow-hidden border-b border-[#eee8e5]">
      {/* Hero Copy */}
      <div className="flex flex-col justify-center items-start px-6 sm:px-12 md:px-16 lg:px-20 py-16 md:py-20 max-w-[680px] ml-auto">
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#b72e3d] flex items-center gap-1.5 mb-4">
          <Sparkles size={13} className="text-[#b72e3d]" />
          Jewelry made personal
        </span>

        <h1 className="font-serif text-[46px] sm:text-[62px] md:text-[68px] lg:text-[76px] leading-[0.96] tracking-[-2px] text-[#292322] my-4 font-normal">
          Your Bracelet.<br />
          <span className="italic font-normal">Your Story.</span>
        </h1>

        <p className="text-[#655653] text-[14px] sm:text-[15px] leading-[1.8] max-w-[420px] mt-2 mb-8">
          Mỗi chiếc charm là một mảnh ghép của bạn. Tự thiết kế chiếc vòng mang dấu ấn riêng, lưu giữ những điều bạn yêu và câu chuyện chỉ mình bạn có.
        </p>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onExploreProducts}
            className="inline-flex items-center justify-center gap-2 border border-[#292322] px-7 py-3.5 bg-[#292322] text-white text-[11px] font-semibold tracking-[1px] uppercase transition-all duration-200 hover:bg-[#b72e3d] hover:border-[#b72e3d] w-full sm:w-auto shadow-sm"
          >
            <span>Khám phá ngay</span>
            <ArrowUpRight size={14} />
          </button>

          <button
            onClick={onOpenStudio}
            className="inline-flex items-center justify-center gap-2 border border-[#292322] px-6 py-3.5 bg-transparent text-[#292322] text-[11px] font-semibold tracking-[1px] uppercase transition-all duration-200 hover:bg-white hover:border-[#b72e3d] hover:text-[#b72e3d] w-full sm:w-auto"
          >
            <span>Tự Phối Vòng Studio</span>
            <Sparkles size={13} />
          </button>
        </div>

        {/* Small trust indicator */}
        <div className="mt-10 pt-6 border-t border-[#ead8d6] flex items-center gap-6 text-[12px] text-[#857c78]">
          <div className="flex items-center gap-1.5">
            <span className="text-[#b72e3d] font-bold">10,000+</span>
            <span>Khách hàng tin chọn</span>
          </div>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[#c49a50]">★★★★★</span>
            <span>4.9/5 đánh giá</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative min-h-[380px] md:min-h-[580px] bg-[#f4efec] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=85"
          alt="Bộ sưu tập trang sức tinh tế Hidden"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          loading="eager"
        />
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-3.5 border border-[#eee8e5] text-[11px] tracking-wider uppercase text-[#292322] hidden sm:block">
          <span className="font-semibold">Bộ sưu tập 2026</span>
          <div className="text-[10px] text-[#857c78] normal-case mt-0.5">Bạc Ý S925 & Tùy chọn khắc tên</div>
        </div>
      </div>
    </section>
  );
};
