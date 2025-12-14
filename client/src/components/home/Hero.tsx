import { Button } from "@/components/ui/button";
import { ShieldCheck, CheckCircle2, Star } from "lucide-react";
import heroImage from "@assets/stock_images/modern_laptop_comput_2adb07ca.jpg"; // Using laptop as hero bg fallback/accent

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-green/10 text-emerald-green text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-green"></span>
              </span>
              Over 50,000 Verified Devices Listed
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-royal-blue leading-[1.1] mb-6 tracking-tight">
              Buy & Sell Electronics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-emerald-green">
                You Can Trust
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              The safest marketplace for pre-owned tech. Every device verified. 
              Secure payments. 30-day money-back guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button className="h-14 px-8 text-lg bg-vibrant-orange hover:bg-orange-600 text-white rounded-lg shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5">
                Start Selling
              </Button>
              <Button variant="outline" className="h-14 px-8 text-lg border-2 border-emerald-green text-emerald-green hover:bg-emerald-green hover:text-white rounded-lg transition-all">
                Browse Deals
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-green" />
                <span>Verified Sellers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-green" />
                <span>Quality Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-vibrant-orange fill-vibrant-orange" />
                <span>4.9/5 Trust Score</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
             {/* Composition of devices */}
             <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                    <img src={heroImage} alt="Modern Laptop" className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                        <div className="text-white">
                            <p className="font-bold text-lg">MacBook Pro M2</p>
                            <p className="text-emerald-400 font-medium">Sold for $1,200</p>
                        </div>
                    </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-green/10 p-2 rounded-full">
                             <CheckCircle2 className="w-6 h-6 text-emerald-green" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Status</p>
                            <p className="text-royal-blue font-bold">Verified Listing</p>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Decor blobs */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
