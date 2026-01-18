import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, Truck, Lock, CreditCard, 
  MapPin, ArrowRight, CheckCircle2, Zap, Package, 
  Shield, CreditCard as CardIcon, Apple, Wallet,
  Smartphone, Download, FileText, Box, Clock
} from "lucide-react";
import laptopImg from "@assets/stock_images/minimalist_silver_la_814f545f.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [promoCode, setPromoCode] = useState("");
  const [isApplied, setIsApplied] = useState(false);
  const [tradeInApplied, setTradeInApplied] = useState(false);
  
  const product = {
    name: "MacBook Pro 14\" M3 Max",
    price: 2450,
    shipping: 0,
    tax: 196,
    total: 2646,
    image: laptopImg
  };

  const tradeInValue = 745;

  const deliveryOptions = [
    { id: 'standard', label: 'Standard Delivery', time: '3-5 business days', price: 0, icon: Truck },
    { id: 'express', label: 'Express Shipping', time: '1-2 business days', price: 25, icon: Zap },
  ];

  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
  const [selectedPayment, setSelectedPayment] = useState("card");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('tradeIn') === 'true') {
      setTradeInApplied(true);
      setPromoCode("TRADE-745-XP9");
    }
  }, []);

  const finalTotal = product.total + selectedDelivery.price - (isApplied ? 50 : 0) - (tradeInApplied ? tradeInValue : 0);

  return (
    <div className="min-h-screen bg-[#FBFBFC] font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-black tracking-tight mb-4">
                  Finalize <span className="text-brand-gray-light/30">Purchase.</span>
                </h1>
                <p className="text-brand-gray font-medium">Complete your order securely via ElectroMarket Escrow.</p>
              </div>
              <div className="flex items-center gap-3">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold transition-all duration-500 ${step >= s ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'bg-white border border-brand-gray-lighter text-brand-gray'}`}>
                      {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                    </div>
                    {s < 3 && <div className={`w-8 h-0.5 rounded-full transition-all duration-500 ${step > s ? 'bg-brand-blue' : 'bg-brand-gray-lighter'}`} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 xl:gap-16">
              <div className="lg:col-span-7 space-y-6">
                
                <AnimatePresence mode="wait">
                  {step === 3 ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-10 md:p-16 rounded-[4rem] bg-white border border-brand-teal shadow-2xl shadow-brand-teal/5 text-center space-y-8"
                    >
                      <div className="w-24 h-24 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto text-brand-teal relative">
                        <CheckCircle2 className="w-12 h-12 relative z-10" />
                        <motion.div 
                          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-brand-teal/20 rounded-full"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <h2 className="text-4xl font-display font-bold text-brand-black">Order Confirmed!</h2>
                        <p className="text-brand-gray font-medium max-w-md mx-auto">
                          Your MacBook Pro is being prepared. Follow your delivery in real-time below.
                        </p>
                      </div>

                      {/* Tracking Timeline */}
                      <div className="p-8 rounded-[2.5rem] bg-brand-gray-lighter/30 border border-brand-gray-lighter text-left">
                        <div className="flex items-center justify-between mb-8">
                          <h4 className="text-sm font-black uppercase tracking-widest text-brand-black flex items-center gap-2">
                            <Box className="w-4 h-4 text-brand-blue" />
                            Live Tracking
                          </h4>
                          <span className="text-[10px] font-black bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full uppercase">Processing</span>
                        </div>
                        
                        <div className="space-y-6 relative">
                          <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-brand-gray-lighter"></div>
                          
                          {[
                            { status: "Order Placed", time: "Just now", icon: CheckCircle2, done: true },
                            { status: "Quality Inspection", time: "Scheduled for 2:00 PM", icon: ShieldCheck, done: false },
                            { status: "Out for Delivery", time: "Estimated Tomorrow", icon: Truck, done: false },
                          ].map((item, i) => (
                            <div key={i} className="flex gap-6 relative z-10">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.done ? 'bg-brand-teal text-white' : 'bg-white border-2 border-brand-gray-lighter text-brand-gray'}`}>
                                <item.icon className="w-3 h-3" />
                              </div>
                              <div>
                                <p className={`text-xs font-bold ${item.done ? 'text-brand-black' : 'text-brand-gray'}`}>{item.status}</p>
                                <p className="text-[10px] text-brand-gray-light font-medium">{item.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Invoice Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 rounded-[2rem] bg-white border border-brand-gray-lighter text-left group hover:border-brand-blue transition-all cursor-pointer">
                          <div className="flex items-center justify-between mb-4">
                            <FileText className="w-6 h-6 text-brand-blue" />
                            <Download className="w-4 h-4 text-brand-gray group-hover:text-brand-blue transition-colors" />
                          </div>
                          <p className="text-[10px] font-black text-brand-gray uppercase tracking-widest mb-1">Invoice #EM-992</p>
                          <p className="text-xs font-bold text-brand-black">Download PDF Receipt</p>
                        </div>
                        
                        <div className="p-6 rounded-[2rem] bg-brand-black text-white text-left group hover:bg-brand-blue transition-all cursor-pointer">
                          <div className="flex items-center justify-between mb-4">
                            <Clock className="w-6 h-6 text-brand-teal" />
                            <ArrowRight className="w-4 h-4 text-white/50 group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Warranty Card</p>
                          <p className="text-xs font-bold text-white">View 12-Month Coverage</p>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button onClick={() => window.location.href = "/"} variant="ghost" className="text-brand-gray hover:text-brand-black font-bold">
                          Return to Market
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      <section className={`p-10 rounded-[3rem] bg-white border transition-all duration-500 ${step === 1 ? 'border-brand-blue shadow-2xl shadow-brand-blue/5' : 'border-brand-gray-lighter'}`}>
                        <div className="flex items-center justify-between mb-10">
                          <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                              <MapPin className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-black">Shipping & Delivery</h2>
                          </div>
                          {step > 1 && (
                            <button onClick={() => setStep(1)} className="text-sm font-bold text-brand-blue hover:underline">Edit</button>
                          )}
                        </div>

                        <AnimatePresence mode="wait">
                          {step === 1 ? (
                            <motion.div 
                              key="step1"
                              initial={{ opacity: 0, y: 10 }} 
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="space-y-8"
                            >
                              <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Full Name</label>
                                  <input type="text" placeholder="Alex Johnson" className="w-full h-16 px-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
                                </div>
                                <div className="space-y-3">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Phone Number</label>
                                  <input type="text" placeholder="+1 (555) 000-0000" className="w-full h-16 px-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
                                </div>
                              </div>
                              <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Shipping Address</label>
                                <input type="text" placeholder="123 Innovation Drive, Silicon Valley, CA" className="w-full h-16 px-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
                              </div>

                              <div className="space-y-4 pt-4">
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Delivery Method</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                  {deliveryOptions.map((opt) => (
                                    <button
                                      key={opt.id}
                                      onClick={() => setSelectedDelivery(opt)}
                                      className={`p-6 rounded-[2rem] border-2 text-left transition-all flex items-start gap-4 ${selectedDelivery.id === opt.id ? 'border-brand-blue bg-brand-blue/5 shadow-lg shadow-brand-blue/5' : 'border-brand-gray-lighter hover:border-brand-blue/30'}`}
                                    >
                                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedDelivery.id === opt.id ? 'bg-brand-blue text-white' : 'bg-brand-gray-lighter text-brand-gray'}`}>
                                        <opt.icon className="w-5 h-5" />
                                      </div>
                                      <div>
                                        <p className="font-bold text-brand-black">{opt.label}</p>
                                        <p className="text-xs text-brand-gray font-medium">{opt.time}</p>
                                        <p className="text-xs font-bold text-brand-teal mt-1">{opt.price === 0 ? 'Free' : `+$${opt.price}`}</p>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <Button onClick={() => setStep(2)} className="w-full h-16 rounded-full bg-brand-black text-white hover:bg-brand-blue font-bold transition-all shadow-xl shadow-black/5 group">
                                Continue to Payment
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </motion.div>
                          ) : (
                            <div className="flex items-center gap-4 text-brand-gray font-medium">
                              <div className="w-8 h-8 rounded-lg bg-brand-gray-lighter flex items-center justify-center">
                                <Package className="w-4 h-4" />
                              </div>
                              <p className="text-sm">Shipping to 123 Innovation Drive • {selectedDelivery.label}</p>
                            </div>
                          )}
                        </AnimatePresence>
                      </section>

                      <section className={`p-10 rounded-[3rem] bg-white border transition-all duration-500 ${step === 2 ? 'border-brand-blue shadow-2xl shadow-brand-blue/5' : 'border-brand-gray-lighter'}`}>
                        <div className="flex items-center gap-5 mb-10">
                          <div className="w-12 h-12 rounded-2xl bg-brand-teal/5 flex items-center justify-center text-brand-teal">
                            <CreditCard className="w-6 h-6" />
                          </div>
                          <h2 className="text-2xl font-bold text-brand-black">Secure Payment</h2>
                        </div>

                        <AnimatePresence mode="wait">
                          {step === 2 && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }} 
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-8"
                            >
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {['card', 'apple', 'upi', 'wallet'].map((p) => (
                                  <button 
                                    key={p}
                                    onClick={() => setSelectedPayment(p)}
                                    className={`p-6 rounded-[2rem] border-2 flex flex-col items-center gap-3 text-center transition-all ${selectedPayment === p ? 'border-brand-blue bg-brand-blue/5 ring-4 ring-brand-blue/10' : 'border-brand-gray-lighter bg-white hover:border-brand-blue/30'}`}
                                  >
                                    {p === 'card' && <CardIcon className={`w-6 h-6 ${selectedPayment === p ? 'text-brand-blue' : 'text-brand-gray'}`} />}
                                    {p === 'apple' && <Apple className={`w-6 h-6 ${selectedPayment === p ? 'text-brand-black' : 'text-brand-gray'}`} />}
                                    {p === 'upi' && <Zap className={`w-6 h-6 ${selectedPayment === p ? 'text-brand-teal' : 'text-brand-gray'}`} />}
                                    {p === 'wallet' && <Wallet className={`w-6 h-6 ${selectedPayment === p ? 'text-brand-amber' : 'text-brand-gray'}`} />}
                                    <span className={`text-[10px] font-bold uppercase ${selectedPayment === p ? 'text-brand-black' : 'text-brand-gray'}`}>{p}</span>
                                  </button>
                                ))}
                              </div>

                              <div className="flex items-center gap-3 p-6 rounded-[2rem] bg-brand-gray-lighter/50 border border-brand-gray-lighter">
                                <Shield className="w-5 h-5 text-brand-blue" />
                                <p className="text-[10px] font-bold text-brand-gray leading-relaxed uppercase tracking-widest">
                                  Your payment is encrypted and handled by ElectroMarket Escrow
                                </p>
                              </div>

                              <Button onClick={() => setStep(3)} className="w-full h-20 rounded-full bg-brand-blue text-white hover:bg-brand-black shadow-2xl shadow-brand-blue/30 text-xl font-black transition-all group scale-100 hover:scale-[1.02] active:scale-[0.98]">
                                Pay ${finalTotal}
                                <Lock className="w-5 h-5 ml-3" />
                              </Button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </section>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32 space-y-6">
                  <div className={`p-10 rounded-[3.5rem] bg-white border border-brand-gray-lighter shadow-xl shadow-black/[0.02] relative overflow-hidden group transition-opacity duration-500 ${step === 3 ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-colors duration-1000"></div>
                    <h3 className="text-2xl font-display font-bold text-brand-black mb-8 relative z-10">Review Items</h3>
                    
                    <div className="flex gap-6 mb-10 relative z-10">
                      <div className="w-28 h-28 rounded-3xl bg-brand-gray-lighter overflow-hidden flex-shrink-0">
                        <img src={product.image} className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-lg text-brand-black leading-tight mb-2">{product.name}</h4>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-gray">
                          <CheckCircle2 className="w-3 h-3 text-brand-teal" /> Verified Pristine
                        </div>
                        <p className="text-xl font-display font-bold text-brand-blue mt-3">${product.price}</p>
                      </div>
                    </div>

                    <div className="mb-10 relative">
                       <input 
                        type="text" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo Code" 
                        className={`w-full h-14 pl-6 pr-24 rounded-2xl border-none focus:ring-2 focus:ring-brand-blue/10 font-bold text-xs uppercase tracking-widest transition-all ${tradeInApplied ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-gray-lighter text-brand-gray'}`} 
                       />
                       <button 
                        onClick={() => tradeInApplied ? setTradeInApplied(false) : setIsApplied(!isApplied)}
                        className={`absolute right-2 top-2 h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isApplied || tradeInApplied ? 'bg-brand-teal text-white' : 'bg-brand-black text-white hover:bg-brand-blue'}`}
                       >
                         {isApplied || tradeInApplied ? 'Applied' : 'Apply'}
                       </button>
                    </div>

                    <div className="space-y-4 mb-10 text-sm font-bold">
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Market Subtotal</span>
                        <span className="text-brand-black">${product.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Delivery</span>
                        <span className={selectedDelivery.price === 0 ? 'text-brand-teal' : 'text-brand-black'}>
                          {selectedDelivery.price === 0 ? 'FREE' : `$${selectedDelivery.price}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Estimated Tax</span>
                        <span className="text-brand-black">${product.tax}</span>
                      </div>
                      {isApplied && (
                        <div className="flex justify-between text-brand-teal">
                          <span>Discount (REUSE20)</span>
                          <span>-$50.00</span>
                        </div>
                      )}
                      {tradeInApplied && (
                        <div className="flex justify-between text-brand-teal">
                          <span>Trade-in Credit</span>
                          <span>-${tradeInValue}.00</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-8 border-t border-brand-gray-lighter flex justify-between items-end relative z-10">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray mb-1">Final Amount</p>
                        <span className="text-5xl font-display font-bold text-brand-black tracking-tighter">
                          ${finalTotal}
                        </span>
                      </div>
                    </div>
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
