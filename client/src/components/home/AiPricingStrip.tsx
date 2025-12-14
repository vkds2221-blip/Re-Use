import { Wand2, Zap, ArrowRight, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AiPricingStrip() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-panel bg-white/5 border-white/10 p-12 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-sm font-medium mb-6 text-green-400">
              <Wand2 className="w-4 h-4" />
              <span className="tracking-wide uppercase text-xs font-bold">New Feature</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Instant AI Pricing. <br/>
              <span className="text-gray-400">No Guesswork.</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg mb-8">
              Our advanced vision model analyzes your device condition from a single photo and generates a fair market offer instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                     <ScanLine className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="font-bold">Scan Device</p>
                     <p className="text-xs text-gray-500">Takes &lt; 5 seconds</p>
                  </div>
               </div>
               <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Zap className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="font-bold">Instant Offer</p>
                     <p className="text-xs text-gray-500">Guaranteed for 7 days</p>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Visual Element - Abstract Phone Scan */}
          <div className="relative w-full max-w-sm aspect-square bg-gradient-to-tr from-gray-900 to-black rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent_70%)]"></div>
             
             {/* Scan Line */}
             <div className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
             
             <div className="text-center z-10">
                <div className="text-5xl font-mono font-bold text-white mb-2 tabular-nums tracking-tighter">$845</div>
                <div className="text-sm text-green-400 font-medium uppercase tracking-widest">Estimated Value</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
