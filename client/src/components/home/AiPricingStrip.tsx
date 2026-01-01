import { Wand2, Zap, ScanLine, Smartphone, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import scanImage from "@assets/stock_images/futuristic_scanning__e1ac222d.jpg";
import { motion } from "framer-motion";

export function AiPricingStrip() {
  return (
    <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="tracking-widest uppercase text-[10px] font-bold text-gray-300">Proprietary AI Vision v2.1</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[0.9] tracking-tighter">
              PRICING. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">INSTANTLY.</span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-12 font-medium">
              Skip the manual appraisal. Our neural engine evaluates your device's aesthetics and hardware health in milliseconds.
            </p>

            <div className="space-y-6">
               <div className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                     <ScanLine className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold mb-1">Visual Analysis</h4>
                     <p className="text-sm text-gray-500 leading-relaxed">AI detects scratches, dents, and screen fatigue from a single photo.</p>
                  </div>
               </div>

               <div className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                     <Zap className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold mb-1">Market Benchmark</h4>
                     <p className="text-sm text-gray-500 leading-relaxed">Aggregated data from 50+ marketplaces ensures the highest possible offer.</p>
                  </div>
               </div>
            </div>

            <Button className="mt-12 h-16 px-10 rounded-full bg-white text-black hover:bg-gray-100 text-lg font-bold group shadow-[0_0_30px_rgba(255,255,255,0.1)]">
               Get My Valuation
               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual Side - The "Essence" */}
          <div className="relative group">
             {/* Main Frame */}
             <div className="relative aspect-[4/5] bg-[#111] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src={scanImage} 
                  alt="AI Scan" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen grayscale" 
                />
                
                {/* The Device Under Scan */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="relative w-full h-full bg-gray-900/40 backdrop-blur-xl rounded-[2rem] border border-white/10 flex flex-col items-center justify-center p-8 overflow-hidden">
                      <Smartphone className="w-24 h-24 text-white/20 mb-6" />
                      
                      {/* Scanning HUD */}
                      <div className="absolute inset-0 pointer-events-none">
                         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                         <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping [animation-delay:1s]"></div>
                         
                         {/* Scan Line */}
                         <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[scan_4s_linear_infinite] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                      </div>

                      <div className="text-center relative z-10">
                         <div className="text-sm font-mono text-blue-400 mb-2 tracking-widest animate-pulse uppercase">Analyzing Shell...</div>
                         <div className="text-6xl font-display font-bold tracking-tighter mb-4">$1,142</div>
                         <div className="flex items-center gap-2 justify-center py-2 px-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest">
                            <CheckCircle2 className="w-3 h-3" /> Offer Guaranteed
                         </div>
                      </div>
                   </div>
                </div>

                {/* Floating Labels */}
                <div className="absolute top-12 left-12 p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
                   SNR: 48.2dB <br/>
                   ERR: 0.0001
                </div>

                <div className="absolute bottom-12 right-12 p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-tighter text-right">
                   VER: 2.1.0 <br/>
                   LAT: 12ms
                </div>
             </div>

             {/* Decorative Outer Rings */}
             <div className="absolute -inset-10 border border-white/[0.03] rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute -inset-20 border border-white/[0.02] rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}} />
    </section>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
