import { Button } from "@/components/ui/button";

export function BuySellSplit() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[3rem] overflow-hidden bg-black text-white min-h-[600px] flex flex-col md:flex-row">
           
           {/* Left: Buy */}
           <div className="flex-1 p-12 md:p-20 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/5 transition-colors relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                 <div>
                    <span className="text-sm font-mono text-gray-400 mb-4 block">01 / BUY</span>
                    <h3 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-6">
                       Find <br/> Gems.
                    </h3>
                    <p className="text-gray-400 max-w-xs text-lg">Access a curated inventory of premium electronics at up to 70% off.</p>
                 </div>
                 <div className="pt-12">
                    <Button className="rounded-full bg-white text-black hover:bg-gray-200 px-8 h-12">Shop Market</Button>
                 </div>
              </div>
              {/* Hover Effect Blob */}
              <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
           </div>

           {/* Right: Sell */}
           <div className="flex-1 p-12 md:p-20 group hover:bg-white/5 transition-colors relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                 <div>
                    <span className="text-sm font-mono text-gray-400 mb-4 block">02 / SELL</span>
                    <h3 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-6">
                       Clear <br/> Space.
                    </h3>
                    <p className="text-gray-400 max-w-xs text-lg">Instant AI valuation. We handle shipping, inspection, and the rest.</p>
                 </div>
                 <div className="pt-12">
                    <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black px-8 h-12 bg-transparent">Start Selling</Button>
                 </div>
              </div>
               {/* Hover Effect Blob */}
              <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
           </div>

        </div>
      </div>
    </section>
  );
}
