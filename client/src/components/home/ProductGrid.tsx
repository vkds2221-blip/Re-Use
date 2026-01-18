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
    <section className="py-32 bg-[#F6F6F7] overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Refined Sidebar - Ultra Minimal */}
          <div className="w-full lg:w-64 lg:sticky lg:top-32 space-y-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gray-light mb-8 px-2">Collections</h3>
            {sideCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-500 group ${
                  activeCategory === cat.name 
                    ? "bg-brand-black text-white shadow-2xl shadow-black/10" 
                    : "hover:bg-white/50 text-brand-gray hover:text-brand-black"
                }`}
              >
                <div className="flex items-center gap-4">
                  <cat.icon className={`w-5 h-5 transition-transform duration-500 ${activeCategory === cat.name ? "scale-110" : "group-hover:scale-110"}`} />
                  <span className="font-bold text-sm tracking-tight">{cat.name}</span>
                </div>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${activeCategory === cat.name ? "bg-white/10 text-white/60" : "bg-brand-gray-lighter text-brand-gray-light"}`}>
                  {cat.count.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Product Grid - The "Perfect" Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {products.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  className="group relative"
                >
                  {/* Product Card Stage */}
                  <div className="relative aspect-[4/5] rounded-[3rem] bg-white overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] group-hover:-translate-y-3">
                    
                    {/* Floating Info Overlays */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                          <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/[0.03] shadow-sm flex items-center gap-2 w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-brand-black">{product.tag}</span>
                          </div>
                          {/* Seller Quick Info */}
                          <div className="bg-brand-black/95 backdrop-blur-md pl-1.5 pr-4 py-1.5 rounded-full flex items-center gap-2 w-fit transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <img src={product.sellerImg} className="w-5 h-5 rounded-full border border-white/20" alt="" />
                            <span className="text-[8px] font-bold text-white uppercase tracking-widest">{product.seller}</span>
                          </div>
                        </div>
                        <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.03] flex items-center justify-center text-brand-gray hover:text-red-500 hover:bg-white transition-all shadow-sm transform group-hover:scale-110">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Buy Action Bar */}
                      <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <div className="flex gap-2">
                          <Button 
                            onClick={() => window.location.href = '/product'}
                            className="flex-1 h-14 rounded-2xl bg-brand-black text-white hover:bg-brand-blue font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl"
                          >
                            Buy Now
                          </Button>
                          <button className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center hover:bg-brand-black transition-colors shadow-lg">
                            <ShoppingBag className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="absolute inset-0 p-12 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                      />
                    </div>
                    
                    {/* Subtle Gradient Shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Product Metadata */}
                  <div className="pt-8 px-4 flex justify-between items-end">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-display font-bold text-brand-black tracking-tight group-hover:text-brand-blue transition-colors">{product.name}</h3>
                      <p className="text-[11px] text-brand-gray font-bold uppercase tracking-widest opacity-40">{product.desc.split('|')[0]}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-brand-gray-light uppercase tracking-widest mb-0.5">Price</p>
                      <p className="text-3xl font-display font-bold text-brand-black tracking-tighter">₹{product.price}</p>
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

