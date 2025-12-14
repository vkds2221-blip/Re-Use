import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import laptopImg from "@assets/stock_images/minimalist_silver_la_814f545f.jpg";
import headphoneImg from "@assets/stock_images/futuristic_headphone_92652817.jpg";

const categories = [
  { id: 1, name: "Computing", items: "240 items", image: laptopImg },
  { id: 2, name: "Audio", items: "120 items", image: headphoneImg },
  { id: 3, name: "Photography", items: "85 items", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000" },
  { id: 4, name: "Wearables", items: "64 items", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=1000" },
  { id: 5, name: "Gaming", items: "150 items", image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?auto=format&fit=crop&q=80&w=1000" },
];

export function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 mb-12 flex items-end justify-between">
         <h2 className="text-4xl font-display font-bold tracking-tight">Curated <br/> Collections</h2>
         <div className="hidden md:flex gap-2">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
               ←
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
               →
            </button>
         </div>
      </div>

      <div className="w-full overflow-x-auto pb-8 hide-scrollbar pl-4 md:pl-[max(1rem,calc((100vw-1280px)/2))]">
         <div className="flex gap-4 md:gap-6 w-max">
            {categories.map((cat) => (
               <div key={cat.id} className="group relative w-[280px] md:w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8">
                     <div className="flex items-center justify-between text-white">
                        <div>
                           <h3 className="text-2xl font-bold mb-1">{cat.name}</h3>
                           <p className="text-white/60 text-sm">{cat.items}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                           <ArrowUpRight className="w-5 h-5" />
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
