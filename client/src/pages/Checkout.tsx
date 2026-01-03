import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, ShieldCheck, Truck, Lock, CreditCard, 
  MapPin, Gift, ArrowRight, CheckCircle2, Zap
} from "lucide-react";
import laptopImg from "@assets/stock_images/minimalist_silver_la_814f545f.jpg";
import { motion } from "framer-motion";

export default function Checkout() {
  const [step, setStep] = useState(1);
  
  const product = {
    name: "MacBook Pro 14\" M3 Max",
    price: 2450,
    shipping: 0,
    tax: 196,
    total: 2646,
    image: laptopImg
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-12 tracking-tight">
              Secure <span className="text-brand-gray-light/30">Checkout.</span>
            </h1>

            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left: Forms */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Step 1: Shipping */}
                <div className={`p-8 rounded-[2.5rem] bg-white border transition-all duration-500 ${step === 1 ? 'border-brand-blue shadow-xl shadow-brand-blue/5' : 'border-brand-gray-lighter opacity-60'}`}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-brand-blue text-white' : 'bg-brand-gray-lighter text-brand-gray'}`}>1</div>
                      <h2 className="text-xl font-bold text-brand-black">Shipping Details</h2>
                    </div>
                    {step > 1 && <CheckCircle2 className="w-6 h-6 text-brand-teal" />}
                  </div>

                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">First Name</label>
                          <input type="text" placeholder="John" className="w-full h-14 px-6 rounded-2xl bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Last Name</label>
                          <input type="text" placeholder="Doe" className="w-full h-14 px-6 rounded-2xl bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Street Address</label>
                        <input type="text" placeholder="123 Spatial Ave" className="w-full h-14 px-6 rounded-2xl bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
                      </div>
                      <Button onClick={() => setStep(2)} className="w-full h-14 rounded-full bg-brand-black text-white hover:bg-brand-blue font-bold transition-all mt-4">
                        Continue to Payment
                      </Button>
                    </motion.div>
                  )}
                </div>

                {/* Step 2: Payment */}
                <div className={`p-8 rounded-[2.5rem] bg-white border transition-all duration-500 ${step === 2 ? 'border-brand-blue shadow-xl shadow-brand-blue/5' : 'border-brand-gray-lighter opacity-60'}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-brand-blue text-white' : 'bg-brand-gray-lighter text-brand-gray'}`}>2</div>
                    <h2 className="text-xl font-bold text-brand-black">Payment Method</h2>
                  </div>

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <button className="p-6 rounded-3xl border-2 border-brand-blue bg-brand-blue/5 flex flex-col gap-3 text-left">
                          <CreditCard className="w-6 h-6 text-brand-blue" />
                          <span className="font-bold text-brand-black">Card</span>
                        </button>
                        <button className="p-6 rounded-3xl border border-brand-gray-lighter hover:border-brand-blue/30 flex flex-col gap-3 text-left transition-all">
                          <Zap className="w-6 h-6 text-brand-teal" />
                          <span className="font-bold text-brand-gray">Crypto</span>
                        </button>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Card Number</label>
                          <input type="text" placeholder="•••• •••• •••• ••••" className="w-full h-14 px-6 rounded-2xl bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="MM/YY" className="h-14 px-6 rounded-2xl bg-brand-gray-lighter border-none font-medium" />
                          <input type="text" placeholder="CVC" className="h-14 px-6 rounded-2xl bg-brand-gray-lighter border-none font-medium" />
                        </div>
                      </div>
                      <Button className="w-full h-16 rounded-full bg-brand-blue text-white hover:bg-brand-black shadow-xl shadow-brand-blue/20 text-lg font-black transition-all group">
                        Complete Purchase
                        <Lock className="w-4 h-4 ml-3" />
                      </Button>
                    </motion.div>
                  )}
                </div>

              </div>

              {/* Right: Summary */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-6">
                  <div className="p-8 rounded-[3rem] bg-white border border-brand-gray-lighter shadow-sm">
                    <h3 className="text-xl font-bold text-brand-black mb-8">Order Summary</h3>
                    
                    <div className="flex gap-6 mb-8 pb-8 border-b border-brand-gray-lighter">
                      <div className="w-24 h-24 rounded-2xl bg-brand-gray-lighter overflow-hidden flex-shrink-0">
                        <img src={product.image} className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-black mb-1">{product.name}</h4>
                        <p className="text-xs text-brand-gray font-medium">Condition: Pristine</p>
                        <p className="text-brand-blue font-bold mt-2">${product.price}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-brand-gray">Subtotal</span>
                        <span className="text-brand-black font-bold">${product.price}</span>
                      </div>
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-brand-gray">Shipping</span>
                        <span className="text-brand-teal font-bold">Free</span>
                      </div>
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-brand-gray">Estimated Tax</span>
                        <span className="text-brand-black font-bold">${product.tax}</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-brand-gray-lighter flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray mb-1">Total Amount</p>
                        <span className="text-4xl font-display font-bold text-brand-black tracking-tighter">${product.total}</span>
                      </div>
                      <div className="bg-brand-amber/10 text-brand-amber px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                        Secure Escrow
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-[2rem] bg-brand-teal/5 border border-brand-teal/20 flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-brand-teal flex-shrink-0" />
                    <p className="text-xs text-brand-teal font-medium leading-relaxed">
                      Your funds are held in escrow and only released to the seller after you confirm the item is as described.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
