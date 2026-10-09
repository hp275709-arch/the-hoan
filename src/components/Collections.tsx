import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CollectionsProps {
  onSelectCategory: (category: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  const collections = [
    {
      id: 'charm-collection',
      categoryKey: 'charm-text',
      tag: 'Everyday essentials',
      title: 'Charm Collection',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85',
      desc: 'Hơn 100+ mẫu charm chữ, biểu tượng và khắc tên riêng.'
    },
    {
      id: 'bracelet-bar',
      categoryKey: 'bracelet',
      tag: 'Made for you',
      title: 'Bracelet Bar',
      image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=85',
      desc: 'Dây chuyền xích mềm Snake Chain, kiềng cứng Titanium tinh gọn.'
    },
    {
      id: 'gift-sets',
      categoryKey: 'gift-set',
      tag: 'A little something',
      title: 'Gift Sets',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85',
      desc: 'Set quà hoàn chỉnh kèm thiệp chúc và túi nhung cho người thương.'
    }
  ];

  return (
    <section id="collections" className="max-w-[1240px] mx-auto py-16 md:py-24 px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#b72e3d]">
            Find your vibe
          </span>
          <h2 className="font-serif text-[32px] sm:text-[42px] text-[#292322] mt-2 mb-0">
            Bộ sưu tập
          </h2>
        </div>
        <p className="text-[12px] text-[#857c78] max-w-[320px]">
          Khám phá các dòng sản phẩm được tuyển chọn công phu của Xich Cho.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map(col => (
          <div
            key={col.id}
            onClick={() => onSelectCategory(col.categoryKey)}
            className="group relative min-h-[380px] overflow-hidden bg-[#eee] cursor-pointer shadow-xs"
          >
            <img
              src={col.image}
              alt={col.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Scrim gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute z-10 bottom-7 left-7 right-7 text-white">
              <small className="tracking-[2px] text-[10px] uppercase font-semibold text-[#f7e7e5] block mb-1">
                {col.tag}
              </small>
              <h3 className="font-serif text-[28px] text-white my-1 font-normal">
                {col.title}
              </h3>
              <p className="text-[12px] text-white/80 line-clamp-2 mb-3">
                {col.desc}
              </p>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-white group-hover:text-[#ffd6db] transition-colors">
                <span>Khám phá ngay</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
