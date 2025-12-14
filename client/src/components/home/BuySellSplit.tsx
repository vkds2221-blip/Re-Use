import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BuySellSplit() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Buy Card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-dark-gray p-10 md:p-14 text-white group">
             <div className="relative z-10 max-w-md">
               <span className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs font-medium mb-6 backdrop-blur-md">For Buyers</span>
               <h3 className="text-4xl font-display font-bold mb-4">Upgrade your setup for less.</h3>
               <p className="text-gray-400 mb-8 text-lg">
                 Get verified tech up to 70% off retail price. 1-year warranty included.
               </p>
               <Button className="h-12 px-8 rounded-full bg-white text-dark-gray hover:bg-gray-100 font-bold">
                 Shop Now
               </Button>
             </div>
             
             {/* Abstract Gradient Blob */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-royal-blue to-purple-600 rounded-full blur-[80px] opacity-40 translate-x-1/3 -translate-y-1/3 group-hover:opacity-60 transition-opacity duration-700"></div>
          </div>

          {/* Sell Card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 p-10 md:p-14 text-dark-gray group border border-gray-200">
             <div className="relative z-10 max-w-md">
               <span className="inline-block px-3 py-1 rounded-full border border-gray-200 bg-white text-xs font-medium mb-6">For Sellers</span>
               <h3 className="text-4xl font-display font-bold mb-4">Turn old devices into cash.</h3>
               <p className="text-gray-500 mb-8 text-lg">
                 Get an instant AI quote. Free shipping. Fast payment.
               </p>
               <Button className="h-12 px-8 rounded-full bg-royal-blue text-white hover:bg-blue-700 font-bold shadow-lg shadow-blue-500/20">
                 Get Offer
               </Button>
             </div>
             
             {/* Abstract Gradient Blob */}
             <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-emerald-green to-teal-400 rounded-full blur-[80px] opacity-20 translate-x-1/3 translate-y-1/3 group-hover:opacity-30 transition-opacity duration-700"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
