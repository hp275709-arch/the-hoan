export interface Product {
  id: number;
  name: string;
  category: 'charm-text' | 'charm-photo' | 'charm-plain' | 'bracelet' | 'gift-set';
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  tag?: string;
  image: string;
  description: string;
  rating: number;
  reviewsCount: number;
  material: string;
  customizable?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Charm chữ / Khắc tên",
    category: "charm-text",
    categoryLabel: "Charm Chữ",
    price: 50000,
    oldPrice: 0,
    tag: "Bán chạy",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    description: "Charm chữ cái hoặc khắc tên cá nhân hóa theo yêu cầu. Chất liệu hợp kim cao cấp mạ bạc/vàng hồng sáng bóng, nét khắc laser sắc nét và bền bỉ.",
    rating: 5.0,
    reviewsCount: 148,
    material: "Bạc Ý S925 mạ Platinum",
    customizable: true
  },
  {
    id: 2,
    name: "Charm In Ảnh Kỷ Niệm",
    category: "charm-photo",
    categoryLabel: "Charm In Ảnh",
    price: 45000,
    oldPrice: 0,
    tag: "Cá nhân hóa",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    description: "In ảnh chân dung, ảnh đôi lứa, thú cưng hoặc kỷ niệm đặc biệt với công nghệ tráng gương chống phai màu, đính viền chạm khắc tinh tế.",
    rating: 4.9,
    reviewsCount: 92,
    material: "Titanium tráng gương viền bạc",
    customizable: true
  },
  {
    id: 3,
    name: "Pack Charm Trơn Lẻ",
    category: "charm-plain",
    categoryLabel: "Charm Trơn",
    price: 10000,
    oldPrice: 0,
    tag: "",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    description: "Các hạt charm spacer trơn dùng để ngăn cách, tạo điểm nhấn khoảng cách giữa các charm biểu tượng trên chiếc vòng.",
    rating: 4.8,
    reviewsCount: 65,
    material: "Hợp kim cao cấp không xỉn màu",
    customizable: false
  },
  {
    id: 4,
    name: "Charm Chữ Pack 1 (Set 3 Chữ)",
    category: "charm-text",
    categoryLabel: "Charm Chữ",
    price: 40000,
    oldPrice: 59000,
    tag: "Ưu đãi",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Combo 3 charm chữ cái tự chọn theo tên bạn hoặc người thương, đi kèm móc chốt giữ vị trí chống trượt.",
    rating: 5.0,
    reviewsCount: 210,
    material: "Bạc S925 đính đá Zirconia",
    customizable: true
  },
  {
    id: 5,
    name: "Vòng tay Everyday Cổ Điển",
    category: "bracelet",
    categoryLabel: "Vòng Tay",
    price: 199000,
    oldPrice: 0,
    tag: "New",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    description: "Vòng tay trơn dạng dây xích mềm (Snake Chain) tiêu chuẩn để phối hạt charm. Khóa cài bấm chắc chắn in chìm logo HIDDEN.",
    rating: 4.9,
    reviewsCount: 184,
    material: "Bạc Ý S925 phủ Rodium chống oxy hoá",
    customizable: true
  },
  {
    id: 6,
    name: "Charm Golden Heart",
    category: "charm-plain",
    categoryLabel: "Charm Biểu Tượng",
    price: 65000,
    oldPrice: 0,
    tag: "",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    description: "Charm hình trái tim mạ vàng 14k ấm áp, biểu tượng của tình yêu và sự gắn kết chân thành.",
    rating: 5.0,
    reviewsCount: 77,
    material: "Bạc S925 mạ vàng 14K",
    customizable: false
  },
  {
    id: 7,
    name: "Gift Set — Little Things",
    category: "gift-set",
    categoryLabel: "Gift Sets",
    price: 299000,
    oldPrice: 0,
    tag: "Quà tặng",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Hộp quà trọn gói gồm 1 vòng tay Snake Chain + 2 charm chữ khắc tên + 1 charm trái tim + thiệp viết tay Hidden + túi nhung sang trọng.",
    rating: 5.0,
    reviewsCount: 312,
    material: "Bạc Ý S925 & Hộp quà thiết kế riêng",
    customizable: true
  },
  {
    id: 8,
    name: "Bracelet Signature Cứng",
    category: "bracelet",
    categoryLabel: "Vòng Tay",
    price: 250000,
    oldPrice: 0,
    tag: "",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    description: "Vòng kiềng mở dạng Bangle thanh lịch với hai đầu chốt bi có thể tháo rời để luồn charm nhanh chóng và phong cách.",
    rating: 4.8,
    reviewsCount: 88,
    material: "Titanium cứng siêu bền",
    customizable: true
  }
];

export interface StudioCharm {
  id: string;
  name: string;
  symbol: string;
  price: number;
  color: string;
}

export const STUDIO_CHARMS: StudioCharm[] = [
  { id: 'c-letter-a', name: 'Charm Chữ A', symbol: 'A', price: 50000, color: '#f3e8e2' },
  { id: 'c-letter-h', name: 'Charm Chữ H', symbol: 'H', price: 50000, color: '#f3e8e2' },
  { id: 'c-letter-m', name: 'Charm Chữ M', symbol: 'M', price: 50000, color: '#f3e8e2' },
  { id: 'c-heart', name: 'Trái Tim Yêu Thương', symbol: '♥', price: 65000, color: '#ffd6db' },
  { id: 'c-star', name: 'Ngôi Sao Hy Vọng', symbol: '★', price: 55000, color: '#fff1c2' },
  { id: 'c-clover', name: 'Cỏ 4 Lá May Mắn', symbol: '🍀', price: 60000, color: '#d8eedb' },
  { id: 'c-infinity', name: 'Biểu Tượng Vô Cực', symbol: '∞', price: 55000, color: '#e5e0dc' },
  { id: 'c-moon', name: 'Ánh Trăng Khuyết', symbol: '☾', price: 50000, color: '#e8edf3' },
  { id: 'c-gem', name: 'Pha Lê Pha Lê Xanh', symbol: '💎', price: 70000, color: '#dbeafe' },
  { id: 'c-spacer', name: 'Charm Chốt Bạc', symbol: '◎', price: 20000, color: '#e2e2e2' }
];

export const BRACELET_BASES = [
  { id: 'base-silver', name: 'Vòng Mềm Bạc Ý S925 (Snake Chain)', price: 199000, color: '#d1d5db', finish: 'Bạc sáng ánh kim' },
  { id: 'base-rosegold', name: 'Vòng Mềm Titan Rose Gold', price: 220000, color: '#f3b0a0', finish: 'Vàng hồng nữ tính' },
  { id: 'base-bangle', name: 'Vòng Kiềng Signature Bangle', price: 250000, color: '#9ca3af', finish: 'Titanium nguyên khối' },
];
