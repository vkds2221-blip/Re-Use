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
    <section className="py-24 bg-[#FCFCFD] overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Refined Sidebar - Sticky & Minimal */}
          <div className="w-full lg:w-72 lg:sticky lg:top-32 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-gray-light mb-6 px-4">Categories</h3>
            {sideCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                  activeCategory === cat.name 
                    ? "bg-white shadow-xl shadow-black/[0.03] border border-brand-gray-lighter" 
                    : "hover:bg-brand-gray-lighter/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    activeCategory === cat.name ? "bg-brand-blue text-white" : "bg-brand-gray-lighter text-brand-gray"
                  }`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <span className={`font-bold text-sm ${activeCategory === cat.name ? "text-brand-black" : "text-brand-gray"}`}>
                    {cat.name}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-brand-gray-light bg-brand-gray-lighter px-2 py-1 rounded-md">
                  {cat.count.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Product Grid - Elevated Presentation */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  className="group relative flex flex-col"
                >
                  {/* Product Stage */}
                  <div className="relative aspect-[4/5] rounded-[2.5rem] bg-white border border-brand-gray-lighter overflow-hidden transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] group-hover:-translate-y-2">
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                      <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/[0.03] shadow-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-black">{product.tag}</span>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.03] flex items-center justify-center text-brand-gray hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>

                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-12 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
                    />

                    {/* Quick Add Overlay */}
                    <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                      <div className="bg-white/90 backdrop-blur-xl p-3 rounded-2xl border border-white/50 shadow-2xl flex gap-2">
                        <Button 
                          onClick={() => window.location.href = '/product'}
                          className="flex-1 h-12 rounded-xl bg-brand-black text-white hover:bg-brand-blue font-bold text-xs uppercase tracking-widest transition-all"
                        >
                          Quick View
                        </Button>
                        <button className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center hover:bg-brand-black transition-colors">
                          <ShoppingBag className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Metadata */}
                  <div className="pt-6 px-2 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-brand-black leading-tight group-hover:text-brand-blue transition-colors">{product.name}</h3>
                        <p className="text-xs text-brand-gray-light font-medium">{product.desc}</p>
                      </div>
                      <p className="text-lg font-display font-bold text-brand-black">₹{product.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-2 border-t border-brand-gray-lighter">
                      <div className="w-5 h-5 rounded-full overflow-hidden border border-brand-gray-lighter">
                        <img src={product.sellerImg} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Seller: {product.seller}</span>
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

