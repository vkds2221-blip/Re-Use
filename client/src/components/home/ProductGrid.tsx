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
    <section className="py-24 bg-[#FFF8F6] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar Categories */}
          <div className="w-full lg:w-72 flex flex-col gap-4">
            {sideCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-4 p-6 rounded-[2rem] transition-all duration-300 text-left border ${
                  activeCategory === cat.name 
                    ? "bg-[#3D449C] text-white border-[#3D449C] shadow-xl shadow-blue-900/20" 
                    : "bg-white border-transparent hover:border-[#3D449C]/20 text-gray-700"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  activeCategory === cat.name ? "bg-white/10" : "bg-gray-100"
                }`}>
                  <cat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">{cat.name}</h4>
                  <p className={`text-xs ${activeCategory === cat.name ? "opacity-60" : "text-gray-400"}`}>
                    {cat.count}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Product Cards Area */}
          <div className="flex-1 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  className="bg-white rounded-[3rem] p-8 shadow-sm border border-gray-100/50 hover:shadow-2xl hover:shadow-black/5 transition-all group"
                >
                  {/* Top Badge & Like */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-[#E8EAFD] text-[#3D449C] text-xs font-bold border border-blue-100">
                      {product.tag}
                    </span>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#3D449C] hover:bg-red-50 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image Stage */}
                  <div className="relative aspect-square rounded-[2rem] bg-gray-50 overflow-hidden mb-8 group-hover:bg-white transition-colors">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-8 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* Seller Badge Overlay */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                        <img src={product.sellerImg} alt={product.seller} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-900 leading-none">{product.seller}</span>
                        <span className="text-[8px] text-green-500 font-black uppercase tracking-widest">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-400 font-medium">{product.desc}</p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-3xl font-display font-bold text-[#3D449C]">
                        ₹{product.price}
                      </span>
                      <div className="flex items-center gap-3">
                        <button className="w-12 h-12 rounded-full border-2 border-blue-50 flex items-center justify-center text-[#3D449C] hover:bg-blue-50 transition-colors">
                          <ShoppingBag className="w-5 h-5" />
                        </button>
                        <Button 
                          onClick={() => window.location.href = '/product'}
                          className="h-12 px-8 rounded-full bg-[#3D449C] text-white hover:bg-blue-900 font-bold transition-all shadow-lg shadow-blue-900/10"
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

