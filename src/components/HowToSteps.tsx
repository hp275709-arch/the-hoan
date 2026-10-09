import React, { useState } from 'react';
import { Ruler, Sparkles } from 'lucide-react';

export const HowToSteps: React.FC = () => {
  const [wristInput, setWristInput] = useState<number>(15);

  const getRecommendedSize = (cm: number) => {
    if (cm <= 14) return '16cm (Khuyên dùng: Ôm gọn nhẹ)';
    if (cm <= 15.5) return '17cm (Kích cỡ phổ biến nhất cho nữ)';
    if (cm <= 17) return '18cm (Thoải mái khi đeo từ 3–5 charm)';
    return '19cm - 20cm (Rộng rãi hoặc cổ tay nam)';
  };

  const steps = [
    {
      num: "01",
      title: "Đo cổ tay",
      desc: "Dùng thước dây quấn quanh vị trí đeo vòng, ghi lại số đo thực tế và cộng thêm 1–2cm để vừa vặn khi đính charm."
    },
    {
      num: "02",
      title: "Chọn charm",
      desc: "Lựa chọn các mẫu charm chữ cái tên bạn, biểu tượng may mắn, hoặc in hình ảnh người thương."
    },
    {
      num: "03",
      title: "Mix & match",
      desc: "Sắp xếp thứ tự các charm xen kẽ charm trơn để tạo nhịp điệu hài hòa, cá tính và cân đối trên cổ tay."
    },
    {
      num: "04",
      title: "Tỏa sáng",
      desc: "Đeo chiếc vòng trên tay mỗi ngày, tự tin lưu giữ những kỷ niệm đáng quý và khẳng định phong cách riêng."
    }
  ];

  return (
    <section id="how-to" className="max-w-[1240px] mx-auto py-16 md:py-24 px-6">
      <div className="text-center max-w-[650px] mx-auto mb-14">
        <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#b72e3d]">
          Your design, your rules
        </span>
        <h2 className="font-serif text-[34px] sm:text-[44px] text-[#292322] my-2 font-normal">
          Tạo chiếc vòng của riêng bạn
        </h2>
        <p className="text-[13px] text-[#857c78] leading-relaxed">
          Bốn bước đơn giản để tạo nên món trang sức mang dấu ấn cá nhân độc nhất.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(step => (
          <div key={step.num} className="border-t border-[#ddd2ce] pt-6 flex flex-col justify-between">
            <div>
              <span className="font-serif text-[38px] text-[#b72e3d] leading-none block mb-3 font-normal">
                {step.num}
              </span>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-[#292322] mb-2.5">
                {step.title}
              </h3>
              <p className="text-[13px] text-[#857c78] leading-[1.8]">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Size Calculator Tool Helper */}
      <div className="mt-14 bg-[#fffaf6] border border-[#eee8e5] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#f7e7e5] rounded-full flex items-center justify-center text-[#b72e3d] shrink-0">
            <Ruler size={22} />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-[#292322] uppercase tracking-wider">
              Công cụ tính size vòng nhanh
            </h4>
            <p className="text-[12px] text-[#857c78]">
              Nhập số đo vòng cổ tay thực tế của bạn để nhận gợi ý cỡ vòng chuẩn xác nhất:
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center border border-[#d7c8c4] bg-white px-3 py-2">
            <input
              type="number"
              min={12}
              max={22}
              step={0.5}
              value={wristInput}
              onChange={e => setWristInput(parseFloat(e.target.value) || 15)}
              className="w-14 text-[13px] font-bold text-center focus:outline-none"
            />
            <span className="text-[12px] text-[#857c78] font-medium ml-1">cm</span>
          </div>

          <div className="bg-white border border-[#eee8e5] px-4 py-2 text-[12px] text-[#292322] font-semibold flex items-center gap-2">
            <Sparkles size={13} className="text-[#b72e3d]" />
            <span>Size đề xuất: <strong className="text-[#b72e3d]">{getRecommendedSize(wristInput)}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
