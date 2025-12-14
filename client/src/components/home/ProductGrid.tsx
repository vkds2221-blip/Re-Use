import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import laptopImg from "@assets/stock_images/modern_laptop_comput_2adb07ca.jpg";
import phoneImg from "@assets/stock_images/modern_smartphone_wi_cc21a5f5.jpg";
import cameraImg from "@assets/stock_images/professional_dslr_ca_6142a9b4.jpg";
import headphonesImg from "@assets/stock_images/modern_wireless_head_ff6a6a08.jpg";
import watchImg from "@assets/stock_images/smartwatch_on_wrist_755fe994.jpg";

const products = [
  { id: 1, name: "MacBook Pro 14\" M1", condition: "Excellent", price: 1199, originalPrice: 1999, image: laptopImg, rating: 4.8 },
  { id: 2, name: "iPhone 14 Pro Max", condition: "Good", price: 899, originalPrice: 1099, image: phoneImg, rating: 4.9 },
  { id: 3, name: "Sony A7III Body", condition: "Like New", price: 1450, originalPrice: 1999, image: cameraImg, rating: 5.0 },
  { id: 4, name: "Sony WH-1000XM5", condition: "Refurbished", price: 249, originalPrice: 399, image: headphonesImg, rating: 4.7 },
  { id: 5, name: "Apple Watch Ultra", condition: "Good", price: 599, originalPrice: 799, image: watchImg, rating: 4.6 },
  { id: 6, name: "Canon EOS R6", condition: "Excellent", price: 1899, originalPrice: 2499, image: cameraImg, rating: 4.9 },
  { id: 7, name: "Samsung Galaxy S23", condition: "Like New", price: 650, originalPrice: 899, image: phoneImg, rating: 4.8 },
  { id: 8, name: "Dell XPS 15", condition: "Fair", price: 850, originalPrice: 1500, image: laptopImg, rating: 4.5 },
];

const filters = ["All", "Smartphones", "Laptops", "Cameras", "Audio"];

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <h2 className="text-3xl font-display font-bold text-royal-blue">Trending Now</h2>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                  ${activeFilter === filter 
                    ? 'bg-emerald-green text-white shadow-lg shadow-emerald-500/25' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>

                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-dark-gray font-medium text-xs">
                    {product.condition}
                  </Badge>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-500">{product.rating}</span>
                </div>
                
                <h3 className="font-bold text-dark-gray mb-1 truncate">{product.name}</h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-1">Verified by ElectroMarket Expert</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-royal-blue">${product.price}</span>
                    <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-emerald-green text-emerald-green hover:bg-emerald-green hover:text-white transition-colors">
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-gray-200 text-gray-600 hover:bg-gray-50">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
