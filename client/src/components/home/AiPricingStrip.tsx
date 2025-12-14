import { Wand2, Zap, ArrowRight } from "lucide-react";

export function AiPricingStrip() {
  return (
    <section className="bg-light-blue-tint border-y border-blue-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-royal-blue">
              <Wand2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-royal-blue mb-1">AI-Powered Pricing & Instant Listing</h3>
              <p className="text-gray-600">Snap a photo, and our AI suggests the best price to sell fast.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-emerald-green bg-white px-4 py-2 rounded-full shadow-sm">
                <Zap className="w-4 h-4 fill-emerald-green" />
                List in 30 seconds
             </div>
             <button className="flex items-center gap-2 text-royal-blue font-bold hover:text-vibrant-orange transition-colors group">
                Try Smart Listing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
