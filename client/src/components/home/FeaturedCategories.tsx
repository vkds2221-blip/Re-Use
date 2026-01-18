import { useRef } from "react";
import { ArrowRight, Laptop, Smartphone, Headphones, Camera, Gamepad2, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import laptopImg from "@assets/stock_images/minimalist_silver_la_814f545f.jpg";
import headphoneImg from "@assets/stock_images/futuristic_headphone_92652817.jpg";

const categories = [
  { id: 1, name: "Computing", items: "240+ items", image: laptopImg, icon: Laptop, color: "from-blue-600/20 to-blue-600/5", accent: "bg-blue-600" },
  { id: 2, name: "Audio", items: "120+ items", image: headphoneImg, icon: Headphones, color: "from-purple-600/20 to-purple-600/5", accent: "bg-purple-600" },
  { id: 3, name: "Phones", items: "450+ items", image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=1000", icon: Smartphone, color: "from-teal-600/20 to-teal-600/5", accent: "bg-teal-600" },
  { id: 4, name: "Photography", items: "85+ items", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000", icon: Camera, color: "from-amber-600/20 to-amber-600/5", accent: "bg-amber-600" },
  { id: 5, name: "Gaming", items: "150+ items", image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?auto=format&fit=crop&q=80&w=1000", icon: Gamepad2, color: "from-red-600/20 to-red-600/5", accent: "bg-red-600" },
];

export function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-[#FBFBFC] overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-widest"
            >
              <ArrowRight className="w-3 h-3" />
              Explore Collections
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-brand-black leading-[0.9]">
              Curated <span className="text-brand-gray-light/30">Tech.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-brand-gray-lighter bg-white flex items-center justify-center hover:bg-brand-black hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-brand-gray-lighter bg-white flex items-center justify-center hover:bg-brand-black hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory px-4 md:px-[max(1rem,calc((100vw-1280px)/2))]"
      >
        <div className="flex gap-6 w-max px-4">
          {categories.map((cat, i) => (
            <motion.a
              href="/category"
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative w-[320px] md:w-[420px] aspect-[4/5] rounded-[3.5rem] overflow-hidden snap-center cursor-pointer shadow-2xl shadow-black/[0.02]"
            >
              {/* Background with subtle color bleed */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 mix-blend-multiply opacity-90 group-hover:opacity-100" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <cat.icon className="w-7 h-7" />
                  </div>
                  <div className={`w-2 h-2 rounded-full ${cat.accent} shadow-[0_0_15px_rgba(255,255,255,0.5)]`}></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-4xl font-display font-bold text-white mb-2 tracking-tight">{cat.name}</h3>
                    <p className="text-white/60 text-sm font-medium tracking-wide flex items-center gap-2">
                      <span className={`w-1 h-4 rounded-full ${cat.accent}`}></span>
                      {cat.items}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.2em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Discover Collection
                    <ArrowRight className="w-4 h-4 p-0.5 bg-white text-brand-black rounded-full" />
                  </div>
                </div>
              </div>

              {/* Top border accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

