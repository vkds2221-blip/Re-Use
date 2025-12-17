import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Star, ShieldCheck, CheckCircle2, Truck, RefreshCcw, 
  Cpu, Battery, Smartphone, Wifi, ChevronRight, Heart, Share2 
} from "lucide-react";
import laptopImg from "@assets/stock_images/minimalist_silver_la_814f545f.jpg";
import userImg from "@assets/stock_images/happy_young_person_p_636ae91a.jpg";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock Data
  const product = {
    name: "MacBook Pro 14\" M3 Max",
    price: 2450,
    originalPrice: 3199,
    condition: "Pristine",
    color: "Space Black",
    specs: [
      { icon: Cpu, label: "Processor", value: "M3 Max 14-Core" },
      { icon: Battery, label: "Battery Health", value: "98% (6 Cycles)" },
      { icon: Smartphone, label: "RAM", value: "36GB Unified" },
      { icon: Wifi, label: "Storage", value: "1TB SSD" },
    ],
    seller: {
      name: "Alex Johnson",
      rating: 5.0,
      sales: 142,
      joined: "2023"
    },
    images: [laptopImg, laptopImg, laptopImg] // Reusing for demo
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Breadcrumb - Minimal */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-black transition-colors">Laptops</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-black">MacBook Pro</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Sticky Gallery */}
            <div className="lg:col-span-7">
               <div className="sticky top-32 space-y-6">
                 {/* Main Image */}
                 <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-100 border border-gray-100 shadow-sm group">
                    <img 
                      src={product.images[selectedImage]} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Floating Condition Tag */}
                    <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                       <span className="text-sm font-bold text-black">{product.condition} Condition</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                       <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 shadow-sm transition-colors">
                          <Heart className="w-5 h-5" />
                       </button>
                       <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 shadow-sm transition-colors">
                          <Share2 className="w-5 h-5" />
                       </button>
                    </div>
                 </div>

                 {/* Thumbnails */}
                 <div className="flex gap-4 overflow-x-auto pb-2">
                    {product.images.map((img, idx) => (
                       <button 
                         key={idx} 
                         onClick={() => setSelectedImage(idx)}
                         className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === idx ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
                       >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                       </button>
                    ))}
                 </div>

                 {/* Trust Cards (Desktop) */}
                 <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
                    <div className="p-6 rounded-3xl bg-gray-50 flex items-start gap-4">
                       <ShieldCheck className="w-6 h-6 text-black mt-1" />
                       <div>
                          <h4 className="font-bold text-sm mb-1">12-Month Warranty</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">Included for free with every purchase. Covers hardware defects.</p>
                       </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-gray-50 flex items-start gap-4">
                       <RefreshCcw className="w-6 h-6 text-black mt-1" />
                       <div>
                          <h4 className="font-bold text-sm mb-1">30-Day Returns</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">Don't love it? Send it back for a full refund, no questions asked.</p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Right Column: Product Details */}
            <div className="lg:col-span-5 relative">
               
               {/* Header */}
               <div className="mb-8">
                 <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-4 tracking-tight leading-[1.1]">
                   {product.name}
                 </h1>
                 <div className="flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-1 text-orange-500">
                       <Star className="w-4 h-4 fill-orange-500" />
                       <span>4.9 (12 reviews)</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">Verified Listing #8492</span>
                 </div>
               </div>

               {/* Price Card */}
               <div className="p-8 rounded-[2rem] bg-black text-white mb-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/30 transition-colors duration-700"></div>
                  
                  <div className="relative z-10">
                    <p className="text-gray-400 text-sm font-medium mb-1">Total Price</p>
                    <div className="flex items-baseline gap-3 mb-6">
                       <span className="text-5xl font-display font-bold tracking-tight">${product.price}</span>
                       <span className="text-xl text-gray-500 line-through decoration-1">${product.originalPrice}</span>
                       <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wide">Save $749</span>
                    </div>
                    
                    <div className="space-y-3">
                       <Button className="w-full h-14 rounded-full bg-white text-black hover:bg-gray-100 text-lg font-bold">
                          Add to Cart
                       </Button>
                       <p className="text-center text-xs text-gray-500">Free 2-day shipping included</p>
                    </div>
                  </div>
               </div>

               {/* Specs Grid (Bento) */}
               <div className="mb-10">
                  <h3 className="text-xl font-display font-bold mb-6">Technical Specs</h3>
                  <div className="grid grid-cols-2 gap-4">
                     {product.specs.map((spec, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                           <spec.icon className="w-5 h-5 text-gray-400 mb-3" />
                           <p className="text-xs text-gray-500 font-medium mb-1">{spec.label}</p>
                           <p className="font-bold text-black">{spec.value}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Seller Profile */}
               <div className="mb-10">
                  <h3 className="text-xl font-display font-bold mb-6">Sold By</h3>
                  <div className="p-6 rounded-3xl border border-gray-100 flex items-center justify-between hover:border-gray-200 transition-colors hover:shadow-sm">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100">
                           <img src={userImg} alt={product.seller.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <div className="flex items-center gap-2">
                              <h4 className="font-bold text-lg">{product.seller.name}</h4>
                              <CheckCircle2 className="w-4 h-4 text-blue-500" />
                           </div>
                           <p className="text-sm text-gray-500">Member since {product.seller.joined} • {product.seller.sales} Sales</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="flex items-center gap-1 justify-end font-bold">
                           <Star className="w-4 h-4 fill-black text-black" />
                           {product.seller.rating}
                        </div>
                        <button className="text-sm font-medium text-blue-600 hover:underline">View Profile</button>
                     </div>
                  </div>
               </div>

               {/* Trust Cards (Mobile Only) */}
               <div className="lg:hidden space-y-4">
                  <div className="p-5 rounded-2xl bg-gray-50 flex items-center gap-4">
                     <ShieldCheck className="w-5 h-5 text-black" />
                     <span className="font-bold text-sm">12-Month Warranty</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 flex items-center gap-4">
                     <Truck className="w-5 h-5 text-black" />
                     <span className="font-bold text-sm">Free Express Shipping</span>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
