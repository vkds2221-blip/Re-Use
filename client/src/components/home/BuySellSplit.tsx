import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Banknote } from "lucide-react";

export function BuySellSplit() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Buy Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-8 md:p-12 hover:shadow-xl transition-shadow">
             <div className="relative z-10">
               <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-emerald-green">
                 <ShoppingBag className="w-7 h-7" />
               </div>
               <h3 className="text-3xl font-display font-bold text-dark-gray mb-4">Want to Buy?</h3>
               <p className="text-gray-500 mb-8 max-w-sm">
                 Find great deals on verified pre-owned electronics. Save up to 50% vs new prices.
               </p>
               <Button className="bg-emerald-green hover:bg-emerald-600 text-white px-8 h-12 rounded-lg text-base">
                 Start Shopping <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
             </div>
             {/* Decor */}
             <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-green/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 group-hover:bg-emerald-green/10 transition-colors"></div>
          </div>

          {/* Sell Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-8 md:p-12 hover:shadow-xl transition-shadow">
             <div className="relative z-10">
               <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-vibrant-orange">
                 <Banknote className="w-7 h-7" />
               </div>
               <h3 className="text-3xl font-display font-bold text-dark-gray mb-4">Want to Sell?</h3>
               <p className="text-gray-500 mb-8 max-w-sm">
                 Turn your old tech into cash. Instant quotes, free shipping, and fast payment.
               </p>
               <Button className="bg-vibrant-orange hover:bg-orange-600 text-white px-8 h-12 rounded-lg text-base">
                 Sell Now <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
             </div>
             {/* Decor */}
             <div className="absolute right-0 bottom-0 w-64 h-64 bg-vibrant-orange/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 group-hover:bg-vibrant-orange/10 transition-colors"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
