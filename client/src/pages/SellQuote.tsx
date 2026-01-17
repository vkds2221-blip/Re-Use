import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Smartphone, Laptop, Headphones, Camera, 
  Search, ArrowRight, Zap, ShieldCheck, Clock, CheckCircle2,
  Cpu, Battery, Gauge
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SellQuote() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const categories = [
    { id: 'laptops', name: "Laptops", icon: Laptop },
    { id: 'phones', name: "Smartphones", icon: Smartphone },
    { id: 'audio', name: "Audio", icon: Headphones },
    { id: 'cameras', name: "Cameras", icon: Camera },
  ];

  const handleStartScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setStep(3);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-black uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 fill-brand-blue" />
              AI Valuation Engine v2.4
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-black tracking-tight leading-[0.95] mb-6">
              Instant Pricing. <br/>
              <span className="text-brand-gray-light/40">Zero Guesswork.</span>
            </h1>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-8 rounded-[2.5rem] border-2 flex flex-col items-center gap-4 transition-all ${selectedCategory === cat.id ? 'border-brand-blue bg-white shadow-xl shadow-brand-blue/10 ring-4 ring-brand-blue/5' : 'border-brand-gray-lighter bg-white hover:border-brand-blue/30'}`}
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${selectedCategory === cat.id ? 'bg-brand-blue text-white' : 'bg-brand-gray-lighter text-brand-gray'}`}>
                          <cat.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-bold text-brand-black">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                  
                  {selectedCategory && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <Button 
                        onClick={() => setStep(2)}
                        className="w-full h-20 rounded-[2rem] bg-brand-black text-white hover:bg-brand-blue text-xl font-black transition-all group shadow-2xl"
                      >
                        Continue to Specs
                        <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8 p-10 rounded-[3rem] bg-white border border-brand-gray-lighter shadow-xl"
                >
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Brand / Model</label>
                        <input type="text" placeholder="e.g. MacBook Pro M3" className="w-full h-16 px-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Condition</label>
                        <select className="w-full h-16 px-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-bold appearance-none">
                          <option>Pristine</option>
                          <option>Excellent</option>
                          <option>Good</option>
                          <option>Fair</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Storage Capacity</label>
                      <div className="grid grid-cols-4 gap-3">
                        {["256GB", "512GB", "1TB", "2TB"].map(size => (
                          <button key={size} className="h-14 rounded-xl border border-brand-gray-lighter font-bold text-sm hover:border-brand-blue hover:text-brand-blue transition-all">
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {isScanning ? (
                    <div className="py-12 flex flex-col items-center gap-6">
                      <div className="relative w-24 h-24">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-4 border-brand-blue/20 border-t-brand-blue rounded-full"
                        />
                        <div className="absolute inset-4 bg-brand-blue/5 rounded-full flex items-center justify-center">
                          <Gauge className="w-8 h-8 text-brand-blue animate-pulse" />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-brand-black">AI is analyzing market trends...</p>
                        <p className="text-xs text-brand-gray mt-1">Checking 42 marketplaces in real-time</p>
                      </div>
                    </div>
                  ) : (
                    <Button 
                      onClick={handleStartScan}
                      className="w-full h-20 rounded-[2rem] bg-brand-black text-white hover:bg-brand-blue text-xl font-black transition-all group shadow-2xl"
                    >
                      Get AI Valuation
                      <Zap className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform fill-brand-amber text-brand-amber" />
                    </Button>
                  )}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="relative p-12 rounded-[3.5rem] bg-brand-black text-white shadow-2xl overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
                    
                    <div className="relative z-10 space-y-6">
                      <p className="text-brand-gray-light text-sm font-black uppercase tracking-[0.3em]">Estimated Value</p>
                      <h2 className="text-8xl font-display font-bold tracking-tight">$1,850 - $2,100</h2>
                      <div className="flex justify-center gap-12 py-8 border-y border-white/5">
                        <div className="text-center">
                          <p className="text-[10px] font-black text-brand-gray-light uppercase tracking-widest mb-2">Market Demand</p>
                          <div className="flex items-center gap-2 text-brand-teal font-black text-lg">
                            <Gauge className="w-5 h-5" /> High
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] font-black text-brand-gray-light uppercase tracking-widest mb-2">Liquidity Score</p>
                          <div className="flex items-center gap-2 text-brand-amber font-black text-lg">
                            <Zap className="w-5 h-5 fill-brand-amber" /> 9.8/10
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4 pt-4">
                        <Button className="h-16 rounded-full bg-white text-brand-black hover:bg-brand-blue hover:text-white text-lg font-black transition-all">
                          Sell Instantly
                        </Button>
                        <Button variant="outline" className="h-16 rounded-full border-white/20 text-white hover:bg-white/10 text-lg font-bold">
                          List on Marketplace
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: ShieldCheck, title: "Price Lock", desc: "Valid for 48 hours" },
                      { icon: Clock, title: "Next-Day Payout", desc: "After device verification" },
                      { icon: CheckCircle2, title: "Free Pick-up", desc: "Doorstep courier service" },
                    ].map((item, i) => (
                      <div key={i} className="p-8 rounded-[2rem] bg-white border border-brand-gray-lighter shadow-sm text-center space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-brand-gray-lighter mx-auto flex items-center justify-center text-brand-blue">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-brand-black">{item.title}</h4>
                        <p className="text-xs text-brand-gray font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
