import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

import laptopImg from "@assets/stock_images/modern_laptop_comput_2adb07ca.jpg";
import phoneImg from "@assets/stock_images/modern_smartphone_wi_cc21a5f5.jpg";
import cameraImg from "@assets/stock_images/professional_dslr_ca_6142a9b4.jpg";
import headphonesImg from "@assets/stock_images/modern_wireless_head_ff6a6a08.jpg";

const products = [
  { id: 1, name: "MacBook Pro 14\" M1", condition: "Excellent", price: 1199, image: laptopImg, color: "Silver" },
  { id: 2, name: "iPhone 14 Pro Max", condition: "Good", price: 899, image: phoneImg, color: "Deep Purple" },
  { id: 3, name: "Sony A7III Body", condition: "Like New", price: 1450, image: cameraImg, color: "Black" },
  { id: 4, name: "Sony WH-1000XM5", condition: "Refurbished", price: 249, image: headphonesImg, color: "Silver" },
];

export function ProductGrid() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-display font-bold text-dark-gray">Fresh Arrivals</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-transparent">
              {/* Image Container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-white mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {/* Floating Actions */}
                <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="absolute bottom-4 left-4">
                   <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-dark-gray shadow-sm">
                     {product.condition}
                   </span>
                </div>
              </div>

              {/* Details */}
              <div className="px-2">
                <div className="flex justify-between items-start mb-1">
                   <h3 className="font-bold text-lg text-dark-gray group-hover:text-royal-blue transition-colors">{product.name}</h3>
                   <span className="font-bold text-lg text-dark-gray">${product.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{product.color}</p>
                <Button className="w-full rounded-xl bg-white border border-gray-200 text-dark-gray hover:bg-dark-gray hover:text-white hover:border-dark-gray transition-all shadow-sm">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
