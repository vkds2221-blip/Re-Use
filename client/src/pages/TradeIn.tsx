import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  RefreshCcw, Smartphone, Laptop, Headphones, Camera, 
  ArrowRight, ShieldCheck, Zap, Info, CheckCircle2,
  Clock, Package, Smartphone as PhoneIcon, Search
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TradeIn() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'phones', name: "Smartphones", icon: PhoneIcon, credit: "Up to $800" },
    { id: 'laptops', name: "Laptops", icon: Laptop, credit: "Up to $1200" },
    { id: 'audio', name: "Audio", icon: Headphones, credit: "Up to $300" },
    { id: 'cameras', name: "Cameras", icon: Camera, credit: "Up to $1500" },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFC] font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-black uppercase tracking-widest mb-6"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              Circular Tech Program
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-black tracking-tight leading-[0.95] mb-6">
              Upgrade Smarter. <br/>
              <span className="text-brand-gray-light/40">Trade in & Save.</span>
            </h1>
            <p className="text-brand-gray font-medium text-lg max-w-2xl mx-auto">
              Get instant credit toward your next device when you trade in your current electronics. Better for your wallet, better for the planet.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Trade-in Engine */}
            <div className="lg:col-span-7 space-y-8">
              <div className="p-10 rounded-[3rem] bg-white border border-brand-gray-lighter shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold text-brand-black">Select your device</h2>
                    <span className="px-3 py-1 rounded-full bg-brand-gray-lighter text-[10px] font-black text-brand-gray uppercase tracking-widest">Step 1 of 3</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-8 rounded-[2rem] border-2 flex flex-col items-start gap-4 transition-all text-left group ${selectedCategory === cat.id ? 'border-brand-teal bg-brand-teal/5 ring-4 ring-brand-teal/10' : 'border-brand-gray-lighter bg-white hover:border-brand-teal/30'}`}
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${selectedCategory === cat.id ? 'bg-brand-teal text-white' : 'bg-brand-gray-lighter text-brand-gray group-hover:bg-brand-teal/10 group-hover:text-brand-teal'}`}>
                          <cat.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-brand-black">{cat.name}</p>
                          <p className="text-[10px] font-black text-brand-teal uppercase tracking-widest mt-1">{cat.credit}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {selectedCategory && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <div className="p-6 rounded-2xl bg-brand-gray-lighter/50 border border-brand-gray-lighter mb-6 flex items-start gap-4">
                        <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-brand-gray font-medium leading-relaxed">
                          Final credit value is determined after a 50-point inspection. We offer a price-match guarantee on all trade-in valuations.
                        </p>
                      </div>
                      <Button className="w-full h-16 rounded-full bg-brand-black text-white hover:bg-brand-teal text-lg font-black transition-all group">
                        Find your model
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Benefits Bento */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 rounded-[2.5rem] bg-brand-blue text-white space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-brand-amber fill-brand-amber" />
                  </div>
                  <h4 className="font-bold">Instant Credit</h4>
                  <p className="text-xs text-white/70 leading-relaxed">Apply your trade-in value immediately at checkout for any new purchase.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-brand-teal text-white space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold">Safe Deletion</h4>
                  <p className="text-xs text-white/70 leading-relaxed">Military-grade data wipe guaranteed for every traded device.</p>
                </div>
              </div>
            </div>

            {/* Right: How it works */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-10 rounded-[3rem] bg-white border border-brand-gray-lighter shadow-sm">
                <h3 className="text-2xl font-display font-bold text-brand-black mb-10">How it works</h3>
                <div className="space-y-12 relative">
                  <div className="absolute left-6 top-2 bottom-2 w-px bg-brand-gray-lighter"></div>
                  
                  {[
                    { icon: Search, title: "Get a Quote", desc: "Tell us about your device's specs and current condition." },
                    { icon: Package, title: "Ship for Free", desc: "Print a prepaid label and drop it off at any partner location." },
                    { icon: CheckCircle2, title: "Get Paid", desc: "Receive credit as soon as our technicians verify the device." },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-8 relative z-10 group">
                      <div className="w-12 h-12 rounded-2xl bg-white border-2 border-brand-gray-lighter flex items-center justify-center text-brand-gray group-hover:border-brand-teal group-hover:text-brand-teal transition-all flex-shrink-0">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-brand-black mb-2">{step.title}</h4>
                        <p className="text-sm text-brand-gray leading-relaxed font-medium">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-brand-gray-lighter/30 border border-brand-gray-lighter text-center">
                <Clock className="w-8 h-8 text-brand-amber mx-auto mb-4" />
                <h4 className="font-bold text-brand-black mb-2">Quote Valid for 14 Days</h4>
                <p className="text-xs text-brand-gray font-medium leading-relaxed">
                  Lock in your price today. We'll honor your valuation for two weeks while you decide on your upgrade.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
