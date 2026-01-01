import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, Heart, LayoutGrid, List } from "lucide-react";
import laptopImg from "@assets/stock_images/minimalist_silver_la_814f545f.jpg";
import phoneImg from "@assets/stock_images/modern_smartphone_wi_cc21a5f5.jpg";
import cameraImg from "@assets/stock_images/professional_dslr_ca_6142a9b4.jpg";
import headphonesImg from "@assets/stock_images/modern_wireless_head_ff6a6a08.jpg";

const products = [
  { id: 1, name: "MacBook Pro M2", price: "$1,299", image: laptopImg, tag: "Essential", category: "Computing" },
  { id: 2, name: "Sony XM5 Noise Cancelling", price: "$249", image: headphonesImg, tag: "Best Seller", category: "Audio" },
  { id: 3, name: "Leica Q2 Monochrom", price: "$4,100", image: cameraImg, tag: "Rare Find", category: "Photography" },
  { id: 4, name: "iPad Pro 12.9\"", price: "$899", image: phoneImg, tag: "Like New", category: "Computing" },
  { id: 5, name: "iPhone 15 Pro", price: "$999", image: phoneImg, tag: "Pristine", category: "Smartphones" },
  { id: 6, name: "Dell XPS 15", price: "$1,100", image: laptopImg, tag: "Great Value", category: "Computing" },
  { id: 7, name: "Canon EOS R5", price: "$2,800", image: cameraImg, tag: "Pro Tech", category: "Photography" },
  { id: 8, name: "AirPods Max", price: "$399", image: headphonesImg, tag: "Verified", category: "Audio" },
];

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Category Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
              <span className="text-sm font-mono text-gray-400 mb-4 block tracking-widest uppercase">Catalog / Electronics</span>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-black leading-none mb-6">
                ALL <br/> TECH.
              </h1>
              <p className="text-xl text-gray-500 max-w-md leading-relaxed">
                Discover a curated collection of premium pre-owned electronics, verified by experts and protected by our 12-month warranty.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="text-right hidden md:block">
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-widest mb-1">Total Items</p>
                  <p className="text-3xl font-display font-bold">1,402</p>
               </div>
               <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center bg-gray-50">
                  <span className="font-bold text-xl">/</span>
               </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="sticky top-28 z-40 bg-white/80 backdrop-blur-md border-y border-gray-100 py-4 mb-12 flex items-center justify-between">
            <div className="flex items-center gap-6">
               <button className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-blue-600 transition-colors group">
                  <SlidersHorizontal className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Filter
               </button>
               <div className="h-4 w-px bg-gray-200"></div>
               <div className="flex gap-4">
                  {["All", "Computing", "Audio", "Photography"].map(filter => (
                    <button key={filter} className="text-sm font-medium text-gray-400 hover:text-black transition-colors">
                      {filter}
                    </button>
                  ))}
               </div>
            </div>

            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                  Sort By <ChevronDown className="w-4 h-4" />
               </button>
               <div className="flex items-center gap-1 border border-gray-100 rounded-full p-1">
                  <button className="p-1.5 rounded-full bg-black text-white"><LayoutGrid className="w-4 h-4" /></button>
                  <button className="p-1.5 rounded-full text-gray-400 hover:bg-gray-100"><List className="w-4 h-4" /></button>
               </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product) => (
              <a href="/product" key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-gray-50 rounded-[2.5rem] overflow-hidden mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     {product.price}
                  </div>
                  <div className="absolute top-6 left-6 bg-black/5 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                     {product.tag}
                  </div>
                </div>

                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-1 group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
                    <p className="text-gray-400 text-sm font-medium">{product.category} • Pristine</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                     <Heart className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination/Load More */}
          <div className="mt-24 text-center">
             <Button className="h-16 px-12 rounded-full bg-black text-white hover:bg-gray-800 text-lg font-bold">
                Load More Objects
             </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
