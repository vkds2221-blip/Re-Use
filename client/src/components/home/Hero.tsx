import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";
import heroImage from "@assets/stock_images/modern_laptop_comput_2adb07ca.jpg"; 
import phoneImage from "@assets/stock_images/modern_smartphone_wi_cc21a5f5.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-royal-blue/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-emerald-green/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-600 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-emerald-green fill-emerald-green" />
            <span className="bg-gradient-to-r from-royal-blue to-emerald-green bg-clip-text text-transparent font-bold">New:</span> AI-Powered Instant Valuation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-dark-gray leading-[1.1] mb-6 tracking-tight animate-fade-in-up [animation-delay:100ms]">
            The New Standard for <br className="hidden md:block"/>
            <span className="text-royal-blue relative whitespace-nowrap">
               Secondhand Tech
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-green/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
               </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Buy and sell verified electronics with zero hassle. We handle the inspection, shipping, and payments. You just enjoy the tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-fade-in-up [animation-delay:300ms]">
            <Button className="h-14 px-8 rounded-full text-lg bg-dark-gray hover:bg-black text-white shadow-xl shadow-gray-200 transition-all hover:scale-105">
              Start Selling
            </Button>
            <Button variant="outline" className="h-14 px-8 rounded-full text-lg border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-all hover:scale-105">
              Browse Market
            </Button>
          </div>
        </div>

        {/* Floating Bento Grid Hero Image */}
        <div className="relative max-w-6xl mx-auto animate-fade-in-up [animation-delay:500ms]">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[400px] md:h-[500px]">
              
              {/* Main Feature - Laptop */}
              <div className="md:col-span-8 relative group overflow-hidden rounded-3xl bg-gray-100 border border-white shadow-2xl shadow-blue-100/50">
                 <img src={heroImage} alt="Laptop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                 <div className="absolute bottom-8 left-8 text-white">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-medium mb-2 border border-white/10">Verified Excellent</div>
                    <h3 className="text-2xl font-bold mb-1">MacBook Pro M3 Max</h3>
                    <p className="text-white/80">Sold by Alex • $2,400</p>
                 </div>
              </div>

              {/* Side Stack */}
              <div className="md:col-span-4 grid grid-rows-2 gap-4">
                 {/* Phone Card */}
                 <div className="relative group overflow-hidden rounded-3xl bg-gray-100 border border-white shadow-xl shadow-purple-100/50">
                    <img src={phoneImage} alt="Phone" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                       <h3 className="text-lg font-bold">iPhone 15 Pro</h3>
                       <p className="text-white/80 text-sm">Save $250 vs New</p>
                    </div>
                 </div>

                 {/* Stats Card */}
                 <div className="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col justify-center shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <ShieldCheck className="w-10 h-10 text-emerald-green mb-4" />
                    <div className="text-4xl font-display font-bold text-dark-gray mb-1">100%</div>
                    <p className="text-gray-500 font-medium">Money Back Guarantee on all verified devices.</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-royal-blue font-bold cursor-pointer group/link">
                       Learn about protection <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}
