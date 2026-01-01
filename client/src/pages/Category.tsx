import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, Heart, LayoutGrid, List, Search, X, Star } from "lucide-react";
import { useState } from "react";
import laptopImg from "@assets/stock_images/minimalist_silver_la_814f545f.jpg";
import phoneImg from "@assets/stock_images/modern_smartphone_wi_cc21a5f5.jpg";
import cameraImg from "@assets/stock_images/professional_dslr_ca_6142a9b4.jpg";
import headphonesImg from "@assets/stock_images/modern_wireless_head_ff6a6a08.jpg";

const products = [
  { id: 1, name: "MacBook Pro M2", price: "$1,299", image: laptopImg, tag: "Essential", category: "Computing", rating: 4.8 },
  { id: 2, name: "Sony XM5 Noise Cancelling", price: "$249", image: headphonesImg, tag: "Best Seller", category: "Audio", rating: 4.9 },
  { id: 3, name: "Leica Q2 Monochrom", price: "$4,100", image: cameraImg, tag: "Rare Find", category: "Photography", rating: 5.0 },
  { id: 4, name: "iPad Pro 12.9\"", price: "$899", image: phoneImg, tag: "Like New", category: "Computing", rating: 4.7 },
  { id: 5, name: "iPhone 15 Pro", price: "$999", image: phoneImg, tag: "Pristine", category: "Smartphones", rating: 4.9 },
  { id: 6, name: "Dell XPS 15", price: "$1,100", image: laptopImg, tag: "Great Value", category: "Computing", rating: 4.6 },
  { id: 7, name: "Canon EOS R5", price: "$2,800", image: cameraImg, tag: "Pro Tech", category: "Photography", rating: 4.9 },
  { id: 8, name: "AirPods Max", price: "$399", image: headphonesImg, tag: "Verified", category: "Audio", rating: 4.8 },
];

export default function CategoryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => 
    (activeCategory === "All" || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Enhanced Header with Search Integration */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-12">
            <div className="max-w-2xl">
              <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-6">
                <a href="/" className="hover:text-black transition-colors">Home</a>
                <span>/</span>
                <span className="text-black">Catalog</span>
              </nav>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-black leading-[0.85] mb-8">
                SELECT <br/> <span className="text-gray-200">OBJECTS.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                A meticulously curated archive of verified electronics. Every piece is inspected, certified, and ready for its next chapter.
              </p>
            </div>
            
            {/* Quick Stats / Filter Cards */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
               <div className="p-8 rounded-[2rem] bg-gray-50 flex flex-col justify-between aspect-square w-full lg:w-48">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Inventory</span>
                  <span className="text-4xl font-display font-bold">1.4k</span>
               </div>
               <div className="p-8 rounded-[2rem] bg-black text-white flex flex-col justify-between aspect-square w-full lg:w-48 group cursor-pointer overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-600/20 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 relative z-10">Live Drop</span>
                  <span className="text-4xl font-display font-bold relative z-10">New</span>
               </div>
            </div>
          </div>

          {/* New Interactive Filter & Search Bar */}
          <div className="sticky top-28 z-40 mb-16">
            <div className="glass-panel p-2 rounded-full flex flex-col md:flex-row items-center gap-2">
              {/* Category Toggles */}
              <div className="flex items-center gap-1 p-1 bg-gray-100/50 rounded-full w-full md:w-auto overflow-x-auto no-scrollbar">
                {["All", "Computing", "Smartphones", "Audio", "Photography"].map(filter => (
                  <button 
                    key={filter} 
                    onClick={() => setActiveCategory(filter)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap
                      ${activeCategory === filter ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative flex-1 w-full md:w-auto">
                <Input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search catalog..." 
                  className="h-12 border-none bg-transparent pl-12 focus-visible:ring-0 text-lg placeholder:text-gray-400"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full">
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>

              <div className="h-8 w-px bg-gray-200 hidden md:block mx-2"></div>

              {/* Refine Button */}
              <Button variant="ghost" className="rounded-full px-6 h-12 flex items-center gap-2 font-bold hover:bg-gray-100">
                <SlidersHorizontal className="w-4 h-4" />
                Refine
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-10 px-2">
             <p className="text-sm font-medium text-gray-400">
               Showing <span className="text-black">{filteredProducts.length}</span> results 
               {activeCategory !== "All" && <span> in <span className="text-black">{activeCategory}</span></span>}
             </p>
             <div className="flex items-center gap-4">
                <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors flex items-center gap-1">
                   Sort: Popular <ChevronDown className="w-3 h-3" />
                </button>
             </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
            {filteredProducts.map((product) => (
              <a href="/product" key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-gray-50 rounded-[2.5rem] overflow-hidden mb-6 transition-transform duration-500 hover:-translate-y-2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                       {product.tag}
                    </div>
                    {product.rating >= 4.9 && (
                       <div className="bg-white/80 backdrop-blur-md text-black px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 w-fit shadow-sm">
                          <Star className="w-2.5 h-2.5 fill-black" /> Top Rated
                       </div>
                    )}
                  </div>
                  
                  <div className="absolute bottom-6 right-6 bg-white shadow-xl shadow-black/10 p-4 rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     <span className="text-lg font-bold text-black">{product.price}</span>
                  </div>
                </div>

                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-blue-600 transition-colors tracking-tight">{product.name}</h3>
                    <div className="flex items-center gap-2">
                       <p className="text-gray-400 text-sm font-medium">{product.category}</p>
                       <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                       <p className="text-gray-400 text-sm font-medium">Verified</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-red-50 group-hover:text-red-500 group-hover:border-red-100 transition-all">
                     <Heart className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Load More Area */}
          {filteredProducts.length > 0 ? (
            <div className="mt-32 flex flex-col items-center gap-6">
               <div className="w-px h-24 bg-gradient-to-b from-gray-200 to-transparent"></div>
               <Button variant="outline" className="h-16 px-12 rounded-full border-black text-black hover:bg-black hover:text-white text-lg font-bold transition-all">
                  Load More Objects
               </Button>
            </div>
          ) : (
            <div className="py-32 text-center">
               <h3 className="text-3xl font-display font-bold text-gray-300">No objects found matching your filters.</h3>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Minimal Internal Component for UX focus
function Input({ className, ...props }) {
  return (
    <input
      className={`flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}
