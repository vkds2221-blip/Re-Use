import { Button } from "@/components/ui/button";
import laptopImg from "@assets/stock_images/minimalist_silver_laptop_o_e3740e53.jpg";
import headphoneImg from "@assets/stock_images/futuristic_headphones_floa_1d9e23c7.jpg";

const products = [
  { id: 1, name: "MacBook Pro M2", price: "$1,299", image: laptopImg, tag: "Essential" },
  { id: 2, name: "Sony XM5 Noise Cancelling", price: "$249", image: headphoneImg, tag: "Best Seller" },
  { id: 3, name: "Leica Q2 Monochrom", price: "$4,100", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000", tag: "Rare Find" },
  { id: 4, name: "iPad Pro 12.9\"", price: "$899", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1000", tag: "Like New" },
];

export function ProductGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
           <h2 className="text-4xl font-display font-bold tracking-tight">Latest <br/> Drops</h2>
           <Button variant="link" className="text-black underline underline-offset-4 decoration-1">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
           {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                 {/* Image Container - No borders, just pure content */}
                 <div className="relative aspect-[3/4] bg-gray-100 rounded-[2rem] overflow-hidden mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                    />
                    
                    {/* Price Tag - Floating Pill */}
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                       {product.price}
                    </div>

                    {/* Tag */}
                    <div className="absolute top-4 left-4 bg-black/5 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                       {product.tag}
                    </div>
                 </div>

                 {/* Minimal Info */}
                 <div className="flex justify-between items-start">
                    <div>
                       <h3 className="text-xl font-bold mb-1 group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
                       <p className="text-gray-500 text-sm">Verified Seller</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                       +
                    </button>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
