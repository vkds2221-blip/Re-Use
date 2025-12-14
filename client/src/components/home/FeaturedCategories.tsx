import { Smartphone, Laptop, Camera, Watch, Headphones, Gamepad2, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

import smartphoneImg from "@assets/stock_images/modern_smartphone_wi_cc21a5f5.jpg";
import laptopImg from "@assets/stock_images/modern_laptop_comput_2adb07ca.jpg";
import cameraImg from "@assets/stock_images/professional_dslr_ca_6142a9b4.jpg";
import headphonesImg from "@assets/stock_images/modern_wireless_head_ff6a6a08.jpg";
import watchImg from "@assets/stock_images/smartwatch_on_wrist_755fe994.jpg";

export function FeaturedCategories() {
  const categories = [
    { name: "Phones", count: "12k+ Items", image: smartphoneImg, icon: Smartphone },
    { name: "Laptops", count: "8k+ Items", image: laptopImg, icon: Laptop },
    { name: "Cameras", count: "3k+ Items", image: cameraImg, icon: Camera },
    { name: "Audio", count: "5k+ Items", image: headphonesImg, icon: Headphones },
    { name: "Wearables", count: "4k+ Items", image: watchImg, icon: Watch },
    { name: "Gaming", count: "6k+ Items", image: laptopImg, icon: Gamepad2 }, // Reuse laptop for gaming context or placeholder
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
           <div>
              <h2 className="text-3xl font-display font-bold text-royal-blue mb-2">Shop by Category</h2>
              <p className="text-gray-500">Explore thousands of verified devices.</p>
           </div>
           <a href="#" className="hidden md:flex items-center gap-1 text-emerald-green font-medium hover:underline">
              View all categories <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           {categories.map((cat, idx) => (
             <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all">
                   <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                   <div className="absolute bottom-4 left-4 text-white">
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg inline-block mb-2">
                        <cat.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm font-medium text-white/80">{cat.count}</p>
                   </div>
                   
                   {/* Verification Badge - random for demo */}
                   {idx % 2 === 0 && (
                     <div className="absolute top-3 right-3 bg-emerald-green text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                        Verified
                     </div>
                   )}
                </div>
                <h3 className="text-lg font-bold text-dark-gray group-hover:text-royal-blue transition-colors text-center">{cat.name}</h3>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
