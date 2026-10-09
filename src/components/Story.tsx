import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StoryProps {
  onStoryAction: () => void;
}

export const Story: React.FC<StoryProps> = ({ onStoryAction }) => {
  return (
    <section id="story" className="grid grid-cols-1 md:grid-cols-2 bg-[#fffaf6] border-y border-[#eee8e5]">
      {/* Story Image */}
      <div className="min-h-[360px] md:min-h-[520px] bg-[#f4efec] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=85"
          alt="Trang sức Hidden mang câu chuyện của bạn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Story Copy */}
      <div className="flex flex-col justify-center items-start px-8 sm:px-14 lg:px-20 py-16 md:py-20">
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#b72e3d]">
          A piece of you
        </span>

        <h2 className="font-serif text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.08] text-[#292322] my-4 font-normal">
          Không chỉ là một chiếc vòng.
        </h2>

        <p className="text-[14px] text-[#857c78] leading-[1.9] max-w-[460px] mb-3">
          Hidden tin rằng những điều nhỏ bé có thể lưu giữ những câu chuyện lớn. Một chữ cái viết tắt của người bạn yêu, một biểu tượng cỏ bốn lá mang lại hy vọng, một kỷ niệm qua tấm hình nhỏ — hãy biến chúng thành món trang sức chỉ thuộc về bạn.
        </p>

        <p className="text-[14px] text-[#857c78] leading-[1.9] max-w-[460px] mb-8">
          Mix & match theo cách của bạn. Không có quy tắc nào ngoài việc hãy là chính mình và tự hào về từng khoảnh khắc trong cuộc sống.
        </p>

        <button
          onClick={onStoryAction}
          className="inline-flex items-center justify-center gap-2 border border-[#292322] px-7 py-3.5 bg-transparent hover:bg-[#292322] text-[#292322] hover:text-white text-[11px] font-semibold tracking-[1px] uppercase transition-colors"
        >
          <span>Tạo câu chuyện của bạn</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </section>
  );
};
