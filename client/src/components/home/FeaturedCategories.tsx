import { Smartphone, Laptop, Camera, Watch, Headphones, Gamepad2, ArrowRight } from "lucide-react";
import smartphoneImg from "@assets/stock_images/modern_smartphone_wi_cc21a5f5.jpg";
import laptopImg from "@assets/stock_images/modern_laptop_comput_2adb07ca.jpg";
import cameraImg from "@assets/stock_images/professional_dslr_ca_6142a9b4.jpg";
import headphonesImg from "@assets/stock_images/modern_wireless_head_ff6a6a08.jpg";

export function FeaturedCategories() {
  const categories = [
    { name: "Smartphones", items: "12k+", icon: Smartphone, color: "bg-blue-100 text-blue-600", img: smartphoneImg, colSpan: "md:col-span-1" },
    { name: "Laptops", items: "8k+", icon: Laptop, color: "bg-purple-100 text-purple-600", img: laptopImg, colSpan: "md:col-span-2" },
    { name: "Cameras", items: "3k+", icon: Camera, color: "bg-orange-100 text-orange-600", img: cameraImg, colSpan: "md:col-span-1" },
    { name: "Audio", items: "5k+", icon: Headphones, color: "bg-pink-100 text-pink-600", img: headphonesImg, colSpan: "md:col-span-1" },
    { name: "Wearables", items: "4k+", icon: Watch, color: "bg-green-100 text-green-600", img: null, colSpan: "md:col-span-1" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
           <h2 className="text-3xl font-display font-bold text-dark-gray">Explore Categories</h2>
           <button className="hidden md:flex items-center gap-2 text-sm font-bold text-royal-blue hover:text-dark-gray transition-colors rounded-full px-4 py-2 hover:bg-gray-100">
             View All <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px]">
           {categories.map((cat, idx) => (
             <div 
               key={idx} 
               className={`relative group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${cat.colSpan} ${!cat.img ? 'flex flex-col justify-between p-6' : ''}`}
             >
                {cat.img ? (
                  <>
                    <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                       <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                            <p className="text-white/70 text-sm">{cat.items} items</p>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                             <ArrowRight className="w-5 h-5" />
                          </div>
                       </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cat.color} mb-4`}>
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-dark-gray text-xl font-bold">{cat.name}</h3>
                      <p className="text-gray-500 text-sm">{cat.items} items</p>
                    </div>
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </>
                )}
             </div>
           ))}
           
           {/* "More" Card */}
           <div className="col-span-1 rounded-3xl bg-gray-50 border border-gray-100 border-dashed flex flex-col items-center justify-center text-center p-6 hover:bg-gray-100 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                 <ArrowRight className="w-6 h-6 text-dark-gray" />
              </div>
              <span className="font-bold text-dark-gray">View All</span>
           </div>
        </div>
      </div>
    </section>
  );
}
