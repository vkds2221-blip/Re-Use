import { Button } from "@/components/ui/button";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import heroAbstract from "@assets/stock_images/abstract_3d_glass_sh_68a6a953.jpg";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden min-h-[90vh] flex items-center bg-white">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography / Left Side */}
          <div className="lg:col-span-7">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white/50 backdrop-blur text-sm font-medium mb-8 animate-reveal">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                The Future of Circular Tech
             </div>
             
             <h1 className="text-[13vw] lg:text-[7rem] leading-[0.9] font-display font-bold tracking-tighter text-black mb-8 animate-reveal [animation-delay:100ms]">
                RE<span className="text-gray-300">/</span>USE <br />
                RE<span className="text-gray-300">/</span>LOVE
             </h1>
             
             <div className="flex flex-col md:flex-row gap-8 items-start md:items-center max-w-xl animate-reveal [animation-delay:200ms]">
                <p className="text-lg text-gray-500 leading-relaxed">
                   The curated marketplace for premium pre-owned electronics. 
                   Verified by experts, protected by warranty.
                </p>
                <div className="flex items-center gap-4 flex-shrink-0">
                   <Button className="h-14 px-8 rounded-full bg-black text-white hover:bg-gray-800 text-base">
                      Start Exploring
                   </Button>
                   <button className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                      <ArrowDownRight className="w-6 h-6" />
                   </button>
                </div>
             </div>
          </div>

          {/* Visual / Right Side */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] animate-reveal [animation-delay:400ms]">
             <div className="relative w-full h-full">
                {/* Main Abstract Shape */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
                
                {/* Hero Image Card */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 border border-white/50 animate-float-medium">
                   <img src={heroAbstract} alt="Abstract Tech" className="w-full h-full object-cover" />
                   
                   {/* Glass Overlay Data */}
                   <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-sm font-medium text-white/60 mb-1">Featured Collection</p>
                            <h3 className="text-2xl font-bold">Future Objects</h3>
                         </div>
                         <div className="text-right">
                            <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Items</p>
                            <p className="text-xl font-mono">1,204</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl shadow-black/5 animate-float-slow [animation-delay:1s]">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
                        A+
                      </div>
                      <div>
                         <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Condition</p>
                         <p className="font-bold text-lg">Pristine</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
