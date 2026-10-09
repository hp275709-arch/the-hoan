import React, { useState } from 'react';
import { BRACELET_BASES, STUDIO_CHARMS, StudioCharm } from '../data/products';
import { formatMoney, useCart } from '../context/CartContext';
import { Sparkles, Trash2, Plus, ShoppingBag, Check, RotateCcw } from 'lucide-react';

export const BraceletBuilder: React.FC = () => {
  const { addCustomSetToCart } = useCart();
  const [selectedBase, setSelectedBase] = useState(BRACELET_BASES[0]);
  const [selectedCharms, setSelectedCharms] = useState<StudioCharm[]>([
    STUDIO_CHARMS[0], // Charm A
    STUDIO_CHARMS[3], // Heart
    STUDIO_CHARMS[1], // Charm H
  ]);
  const [wristSize, setWristSize] = useState('17cm');

  const addCharm = (charm: StudioCharm) => {
    if (selectedCharms.length >= 7) {
      alert('Một chiếc vòng đẹp mắt nhất khi phối tối đa 7 hạt charm.');
      return;
    }
    setSelectedCharms(prev => [...prev, charm]);
  };

  const removeCharm = (index: number) => {
    setSelectedCharms(prev => prev.filter((_, i) => i !== index));
  };

  const clearAllCharms = () => {
    setSelectedCharms([]);
  };

  const charmsTotal = selectedCharms.reduce((sum, c) => sum + c.price, 0);
  const grandTotal = selectedBase.price + charmsTotal;

  const handleAddSetToCart = () => {
    const charmNames = selectedCharms.map(c => c.name).join(', ') || 'Chưa chọn charm';
    const note = `Loại vòng: ${selectedBase.name} (Size: ${wristSize}) | Gồm các charm: [${charmNames}]`;
    const previewImg = selectedBase.id === 'base-rosegold'
      ? 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80'
      : 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80';

    addCustomSetToCart(`Set Vòng Thiết Kế Riêng — ${selectedCharms.length} Charm`, grandTotal, previewImg, note);
  };

  return (
    <section id="studio" className="py-16 md:py-24 bg-[#fffaf6] border-y border-[#eee8e5]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#b72e3d] flex items-center justify-center gap-1.5">
            <Sparkles size={14} />
            Interactive Studio
          </span>
          <h2 className="font-serif text-[34px] sm:text-[44px] text-[#292322] mt-2 mb-3">
            Tự Mix Chiếc Vòng Của Riêng Bạn
          </h2>
          <p className="text-[13px] text-[#857c78] leading-relaxed">
            Chọn loại dây vòng, đính những chiếc charm mang kỷ niệm của riêng bạn và xem trước chiếc vòng hoàn thiện ngay lập tức.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Live Bracelet Visualizer Panel */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-[#eee8e5] shadow-sm flex flex-col items-center">
            <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-[#f4efec] text-[12px] text-[#857c78]">
              <span className="font-medium text-[#292322]">
                Mô phỏng cổ tay: <span className="text-[#b72e3d] font-semibold">{wristSize}</span>
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={clearAllCharms}
                  className="hover:text-[#b72e3d] flex items-center gap-1 transition-colors text-[11px]"
                  title="Xóa tất cả charm"
                >
                  <RotateCcw size={12} />
                  <span>Làm mới</span>
                </button>
              </div>
            </div>

            {/* Visual Bracelet Graphic */}
            <div className="w-full relative py-12 px-4 flex items-center justify-center min-h-[260px] bg-gradient-to-b from-[#fffcfb] to-[#fbf6f4] rounded-sm border border-[#f0eae6] overflow-hidden">
              {/* Outer Wrist Guide Circle */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-dashed border-[#e6deda] flex items-center justify-center relative shadow-inner">
                {/* Bracelet Band */}
                <div
                  className="absolute inset-2 rounded-full border-[6px] transition-colors duration-300 flex items-center justify-center"
                  style={{
                    borderColor: selectedBase.color,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                  }}
                >
                  {/* Lock Clasp */}
                  <div
                    className="absolute top-0 -translate-y-1/2 bg-[#292322] text-white text-[8px] font-bold px-2 py-0.5 rounded shadow-xs tracking-widest uppercase"
                    style={{ backgroundColor: selectedBase.id === 'base-rosegold' ? '#b56d5e' : '#333' }}
                  >
                    HIDDEN
                  </div>
                </div>

                {/* Charms Slotted along the lower curve */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {selectedCharms.length === 0 ? (
                    <span className="text-[12px] text-[#857c78] italic text-center px-6">
                      Chưa có charm nào.<br />Hãy bấm chọn bên dưới để đính vào vòng!
                    </span>
                  ) : (
                    <div className="flex items-center justify-center flex-wrap gap-2 max-w-[210px] z-10">
                      {selectedCharms.map((charm, idx) => (
                        <div
                          key={`${charm.id}-${idx}`}
                          onClick={() => removeCharm(idx)}
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#b72e3d]/40 shadow-md flex items-center justify-center font-bold text-[15px] cursor-pointer hover:scale-110 hover:border-[#b72e3d] transition-transform group relative bg-white"
                          style={{ backgroundColor: charm.color }}
                          title={`Bấm để tháo "${charm.name}"`}
                        >
                          <span className="select-none text-[#292322]">{charm.symbol}</span>
                          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#b72e3d] text-white rounded-full text-[9px] items-center justify-center hidden group-hover:flex">
                            ×
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bracelet Specs & Live Summary */}
            <div className="w-full mt-6 grid grid-cols-2 gap-4 text-center border-t border-[#f4efec] pt-5">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#857c78] block mb-0.5">Dây vòng</span>
                <span className="text-[13px] font-semibold text-[#292322]">{selectedBase.name}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#857c78] block mb-0.5">Số lượng charm</span>
                <span className="text-[13px] font-semibold text-[#b72e3d]">{selectedCharms.length} / 7 charm</span>
              </div>
            </div>
          </div>

          {/* Configuration & Options Controls */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 1. Choose Bracelet Base */}
            <div className="bg-white p-6 border border-[#eee8e5]">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#292322] mb-3 flex items-center gap-2">
                <span className="w-5 h-5 bg-[#292322] text-white rounded-full flex items-center justify-center text-[10px]">1</span>
                <span>Chọn loại dây vòng nền</span>
              </h3>
              <div className="space-y-2">
                {BRACELET_BASES.map(base => {
                  const isSelected = selectedBase.id === base.id;
                  return (
                    <div
                      key={base.id}
                      onClick={() => setSelectedBase(base)}
                      className={`p-3 border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-[#b72e3d] bg-[#f7e7e5]/50'
                          : 'border-[#e8dfdb] hover:border-[#b72e3d]/50 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full border border-gray-400"
                          style={{ backgroundColor: base.color }}
                        />
                        <div>
                          <div className="text-[12px] font-semibold text-[#292322]">{base.name}</div>
                          <div className="text-[11px] text-[#857c78]">{base.finish}</div>
                        </div>
                      </div>
                      <span className="text-[12px] font-bold text-[#292322] tabular-nums">
                        {formatMoney(base.price)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Wrist Size Select */}
              <div className="mt-4 pt-3 border-t border-[#f4efec] flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#292322]">Chọn size cổ tay:</span>
                <div className="flex gap-1.5">
                  {['16cm', '17cm', '18cm'].map(sz => (
                    <button
                      key={sz}
                      onClick={() => setWristSize(sz)}
                      className={`text-[11px] px-2.5 py-1 border transition-colors ${
                        wristSize === sz
                          ? 'bg-[#292322] text-white border-[#292322]'
                          : 'bg-white text-[#292322] border-[#d7c8c4] hover:border-gray-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Choose Charms Palette */}
            <div className="bg-white p-6 border border-[#eee8e5]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#292322] flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#292322] text-white rounded-full flex items-center justify-center text-[10px]">2</span>
                  <span>Chọn charm để đính vào vòng</span>
                </h3>
                <span className="text-[10px] text-[#857c78]">Chạm để thêm</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-1">
                {STUDIO_CHARMS.map(charm => (
                  <button
                    key={charm.id}
                    onClick={() => addCharm(charm)}
                    className="flex items-center justify-between p-2.5 border border-[#eee8e5] hover:border-[#b72e3d] hover:bg-[#fffaf6] transition-colors text-left group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[13px] border border-gray-200 shrink-0 select-none"
                        style={{ backgroundColor: charm.color }}
                      >
                        {charm.symbol}
                      </span>
                      <span className="text-[11px] font-medium text-[#292322] truncate">
                        {charm.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#857c78] group-hover:text-[#b72e3d] tabular-nums shrink-0 ml-1">
                      +{formatMoney(charm.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Total & Add to Bag CTA */}
            <div className="bg-[#292322] text-white p-6 shadow-md">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[12px] text-gray-300">Tổng giá trị set vòng:</span>
                <span className="text-[22px] font-bold font-serif text-[#ffd6db] tabular-nums">
                  {formatMoney(grandTotal)}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 mb-5">
                Bao gồm vòng nền {selectedBase.name} ({wristSize}) và {selectedCharms.length} charm thiết kế riêng kèm hộp quà cao cấp.
              </p>

              <button
                onClick={handleAddSetToCart}
                className="w-full bg-[#b72e3d] hover:bg-[#cf3546] text-white py-3.5 px-4 text-[12px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag size={15} />
                <span>Thêm set vào túi xách ↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
