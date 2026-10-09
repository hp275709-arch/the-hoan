import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Vòng tay được làm từ chất liệu gì?",
      a: "Vòng tay và charm tại HIDDEN được chế tác chủ yếu từ chất liệu Bạc Ý S925 mạ Platinum hoặc Vàng Hồng cao cấp, kết hợp Titanium nguyên khối chống trầy xước và chống xỉn màu. Từng sản phẩm đều đi kèm chứng nhận chất liệu và chính sách bảo hành làm sáng miễn phí trọn đời."
    },
    {
      q: "Tôi có thể tự thay đổi và thêm charm tại nhà không?",
      a: "Hoàn toàn được! Các mẫu vòng tay của HIDDEN đều thiết kế dạng khóa bấm mở thông minh hoặc chốt vặn Bangle, cho phép bạn dễ dàng tháo, đổi hoặc bổ sung charm bất cứ khi nào bạn muốn để phù hợp trang phục hay tâm trạng từng ngày."
    },
    {
      q: "Làm sao chọn size vòng phù hợp với cổ tay?",
      a: "Cách đơn giản nhất là dùng thước dây (hoặc một sợi dây rồi đo lại bằng thước kẻ) quấn quanh cổ tay. Sau đó lấy số đo này cộng thêm 1.5cm - 2cm (tùy thuộc vào số lượng charm bạn dự định đeo) để chọn size vòng vừa vặn, thoải mái nhất."
    },
    {
      q: "Thời gian hoàn thiện và giao hàng là bao lâu?",
      a: "Đối với sản phẩm có sẵn, thời gian giao hàng từ 1–2 ngày tại Hà Nội & TP.HCM, 2–4 ngày đối với các tỉnh thành khác. Đối với charm khắc tên hoặc in ảnh theo yêu cầu, xưởng kim hoàn sẽ hoàn thiện trong 24h và gửi hàng ngay sau đó. Đơn từ 499k được miễn phí vận chuyển toàn quốc."
    },
    {
      q: "Tôi có thể mua làm quà tặng kèm hộp và thiệp không?",
      a: "Tất cả đơn hàng tại HIDDEN đều được đóng gói tỉ mỉ trong hộp quà signature sang trọng, túi nhung cao cấp chống trầy và túi giấy quà tặng. Bạn có thể để lại lời nhắn khi đặt hàng để HIDDEN hỗ trợ viết tay thiệp chúc mừng ý nghĩa hoàn toàn miễn phí."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#fffaf6] border-t border-[#eee8e5]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#b72e3d]">
            Need to know
          </span>
          <h2 className="font-serif text-[34px] sm:text-[42px] text-[#292322] my-2 font-normal">
            Câu hỏi thường gặp
          </h2>
          <p className="text-[13px] text-[#857c78]">
            Giải đáp những thắc mắc thường gặp về chất liệu, kích thước và dịch vụ của Hidden.
          </p>
        </div>

        <div className="divide-y divide-[#e8dfdb] border-y border-[#e8dfdb]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 text-left flex justify-between items-center gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14px] sm:text-[15px] font-medium text-[#292322] group-hover:text-[#b72e3d] transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-[#857c78] group-hover:text-[#b72e3d] text-[20px] font-light transition-transform">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 text-[13px] leading-[1.8] text-[#857c78] animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
