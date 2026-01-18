import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  Laptop, Smartphone, Headphones, Gamepad2, Home as HomeIcon, 
  ShoppingBag, ArrowRight, ChevronLeft, ChevronRight, Star, Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import nothingImg from "@assets/stock_images/nothing_phone_2_smar_a544d566.jpg";
import iphoneImg from "@assets/stock_images/iphone_15_pro_max_na_360e9707.jpg";
import samsungImg from "@assets/stock_images/samsung_galaxy_s24_u_1b194a52.jpg";

const sideCategories = [
  { name: "Smartphones", count: "230 Items", icon: Smartphone, active: true },
  { name: "Laptops", count: "180 Items", icon: Laptop },
  { name: "Audio", count: "200 Items", icon: Headphones },
  { name: "Gaming", count: "230 Items", icon: Gamepad2 },
  { name: "Home Appliances", count: "150 Items", icon: HomeIcon },
];

const products = [
  { 
    id: 1, 
    name: "Nothing Phone 3", 
    desc: "White | 16 GB RAM | 512 GB", 
    price: "75,000", 
    image: nothingImg, 
    tag: "Very Good",
    seller: "Vivek Rawat",
    sellerImg: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek"
  },
  { 
    id: 2, 
    name: "iPhone 15 Pro Max", 
    desc: "Black | 256 GB | Unlocked", 
    price: "1,50,000", 
    image: iphoneImg, 
    tag: "Excellent",
    seller: "Sushil Kumar",
    sellerImg: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sushil"
  },
  { 
    id: 3, 
    name: "Samsung Galaxy S24 Ultra", 
    desc: "Gray | 12 GB RAM | 512 GB", 
    price: "1,01,050", 
    image: samsungImg, 
    tag: "Excellent",
    seller: "Rajesh Moore",
    sellerImg: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  },
];

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("Smartphones");

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Visual Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#3D449C 1px, transparent 1px), linear-gradient(90deg, #3D449C 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sidebar Categories */}
          <div className="w-full lg:w-80 flex flex-col gap-5">
            {sideCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`group flex items-center gap-5 p-5 rounded-[2.5rem] transition-all duration-500 text-left border-2 ${
                  activeCategory === cat.name 
                    ? "bg-[#3D449C] text-white border-[#3D449C] shadow-2xl shadow-[#3D449C]/30 scale-[1.02]" 
                    : "bg-white border-transparent hover:border-[#3D449C]/10 text-gray-500 hover:text-gray-900"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeCategory === cat.name ? "bg-white/10 rotate-6" : "bg-gray-50 group-hover:bg-[#3D449C]/5"
                }`}>
                  <cat.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl leading-tight tracking-tight">{cat.name}</h4>
                  <p className={`text-xs font-medium mt-0.5 ${activeCategory === cat.name ? "opacity-70" : "text-gray-400"}`}>
                    {cat.count}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Product Cards Area */}
          <div className="flex-1 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {products.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  className="bg-white rounded-[4rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Image Background Glow */}
                  <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${
                    product.id === 1 ? 'bg-blue-500' : product.id === 2 ? 'bg-purple-500' : 'bg-amber-500'
                  }`} />

                  {/* Top Badge & Like */}
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <span className="px-5 py-2 rounded-full bg-[#E8EAFD] text-[#3D449C] text-[10px] font-black uppercase tracking-[0.1em] border border-blue-100">
                      {product.tag}
                    </span>
                    <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#3D449C] hover:bg-red-50 hover:text-red-500 transition-all duration-300 active:scale-90">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image Stage */}
                  <div className="relative aspect-square rounded-[3rem] bg-gray-50/50 overflow-hidden mb-10 group-hover:bg-white transition-all duration-500 border border-gray-50 relative z-10">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-10 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                    />
                    
                    {/* Seller Badge Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/50 shadow-xl shadow-black/5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-8 h-8 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                          <img src={product.sellerImg} alt={product.seller} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-gray-900 leading-tight">{product.seller}</span>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[8px] text-green-600 font-black uppercase tracking-widest">Verified Seller</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-8 relative z-10">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-gray-900 mb-2 leading-tight">{product.name}</h3>
                      <p className="text-sm text-gray-400 font-medium tracking-wide">{product.desc}</p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Price</p>
                        <span className="text-4xl font-display font-bold text-[#3D449C] tracking-tighter">
                          ₹{product.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="w-14 h-14 rounded-full border-2 border-blue-50 flex items-center justify-center text-[#3D449C] hover:bg-[#3D449C] hover:text-white hover:border-[#3D449C] transition-all duration-300 shadow-sm active:scale-95">
                          <ShoppingBag className="w-6 h-6" />
                        </button>
                        <Button 
                          onClick={() => window.location.href = '/product'}
                          className="h-14 px-10 rounded-full bg-[#3D449C] text-white hover:bg-blue-900 font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-[#3D449C]/20 active:scale-95"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-4">
              <Button 
                variant="outline" 
                className="h-14 px-12 rounded-full border-2 border-[#E86C2D] text-[#E86C2D] hover:bg-[#E86C2D] hover:text-white font-bold text-lg transition-all"
              >
                View All
              </Button>
              
              <div className="flex gap-4">
                <button className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#3D449C] hover:text-white transition-all shadow-sm">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#3D449C] transition-all shadow-sm">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

