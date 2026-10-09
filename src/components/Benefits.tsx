import React from 'react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      symbol: "♡",
      title: "Cá nhân hóa",
      description: "Tự chọn charm theo phong cách riêng và câu chuyện của bạn"
    },
    {
      symbol: "✧",
      title: "1000+ mẫu charm",
      description: "Nhiều lựa chọn chữ cái, biểu tượng cho mọi cá tính"
    },
    {
      symbol: "♧",
      title: "Hộp quà cao cấp",
      description: "Đóng gói sang trọng, sẵn sàng dành tặng người thương"
    },
    {
      symbol: "◇",
      title: "Chất liệu bền đẹp",
      description: "Bạc Ý S925 & Titanium thiết kế để đồng hành mỗi ngày"
    }
  ];

  return (
    <section className="border-b border-[#eee8e5] bg-white">
      <div className="max-w-[1240px] mx-auto py-10 px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {benefits.map((item, index) => (
          <div key={index} className="text-center group flex flex-col items-center">
            <span className="text-[26px] mb-2.5 text-[#b72e3d] group-hover:scale-110 transition-transform inline-block select-none font-serif">
              {item.symbol}
            </span>
            <h3 className="text-[13px] font-semibold tracking-wide uppercase text-[#292322] mb-1.5">
              {item.title}
            </h3>
            <p className="text-[12px] text-[#857c78] leading-relaxed max-w-[210px] mx-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
