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
    <section className="py-32 bg-[#FBFBFC] overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Refined Sidebar - The "Atelier" Look */}
          <div className="w-full lg:w-64 lg:sticky lg:top-40 space-y-1">
            <div className="px-4 mb-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gray-light mb-2">Marketplace</h3>
              <div className="h-0.5 w-8 bg-brand-blue rounded-full"></div>
            </div>
            {sideCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-500 group ${
                  activeCategory === cat.name 
                    ? "bg-white shadow-xl shadow-black/[0.03] border border-brand-gray-lighter text-brand-black" 
                    : "text-brand-gray hover:text-brand-black hover:bg-brand-gray-lighter/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <cat.icon className={`w-4 h-4 transition-transform duration-500 ${activeCategory === cat.name ? "scale-110 text-brand-blue" : "group-hover:scale-110 group-hover:text-brand-blue"}`} />
                  <span className={`text-sm font-bold tracking-tight transition-colors ${activeCategory === cat.name ? "text-brand-black" : ""}`}>{cat.name}</span>
                </div>
                {activeCategory === cat.name && (
                   <motion.div layoutId="active-pill" className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(0,102,255,0.5)]" />
                )}
              </button>
            ))}
          </div>

          {/* Product Grid - Editorial Excellence */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-12">
              {products.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  className="group relative cursor-pointer"
                  onClick={() => window.location.href = '/product'}
                >
                  {/* Product Card Stage */}
                  <div className="relative aspect-[4/5] rounded-[3rem] bg-white border border-brand-gray-lighter overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.08)] group-hover:-translate-y-4">
                    
                    {/* Status & Like */}
                    <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/[0.03] shadow-sm flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(0,102,255,0.8)]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-brand-black">{product.tag}</span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); }}
                        className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.03] flex items-center justify-center text-brand-gray hover:text-red-500 hover:bg-white transition-all transform group-hover:scale-110"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Product Image */}
                    <div className="absolute inset-0 p-12 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" 
                      />
                    </div>
                    
                    {/* Interaction Bar */}
                    <div className="absolute inset-x-8 bottom-8 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <div className="flex gap-2 p-1.5 bg-brand-black/90 backdrop-blur-xl rounded-2xl shadow-2xl">
                        <Button 
                          className="flex-1 h-11 rounded-xl bg-white text-brand-black hover:bg-brand-blue hover:text-white font-black text-[9px] uppercase tracking-[0.2em] transition-all"
                        >
                          Express Buy
                        </Button>
                        <button className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-brand-black transition-all">
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Metadata - Minimal & Crisp */}
                  <div className="mt-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-brand-black tracking-tight leading-none group-hover:text-brand-blue transition-colors">{product.name}</h3>
                        <p className="text-[10px] text-brand-gray font-bold uppercase tracking-widest opacity-60">{product.desc.split('|')[0]}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-display font-bold text-brand-black tracking-tighter">₹{product.price}</p>
                      </div>
                    </div>
                    
                    {/* Seller Micro-Badge */}
                    <div className="flex items-center gap-3 pt-5 border-t border-brand-gray-lighter/60">
                      <div className="relative">
                        <img src={product.sellerImg} className="w-7 h-7 rounded-xl object-cover border border-brand-gray-lighter" alt="" />
                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-brand-teal rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-brand-black uppercase tracking-widest leading-none mb-1">{product.seller}</span>
                        <span className="text-[7px] font-bold text-brand-gray-light uppercase tracking-[0.1em]">Certified Merchant</span>
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

