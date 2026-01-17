import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, ShieldCheck, Truck, Lock, CreditCard, 
  MapPin, Gift, ArrowRight, CheckCircle2, Zap, Package, 
  Calendar, Shield, Info, CreditCard as CardIcon, Apple, Wallet,
  Smartphone
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
    // Check if user came from trade-in page
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
            
            {/* Checkout Header & Progress */}
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
              {/* Left: Checkout Flow */}
              <div className="lg:col-span-7 space-y-6">
                
                <AnimatePresence mode="wait">
                  {step === 3 ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-16 rounded-[4rem] bg-white border border-brand-teal shadow-2xl shadow-brand-teal/5 text-center space-y-8"
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
                          Your MacBook Pro is being prepared for shipment. You'll receive a tracking number via email within 24 hours.
                        </p>
                      </div>
                      <div className="p-8 rounded-[2rem] bg-brand-gray-lighter/30 border border-brand-gray-lighter grid grid-cols-2 gap-8 text-left">
                        <div>
                          <p className="text-[10px] font-black text-brand-gray uppercase tracking-widest mb-1">Order Number</p>
                          <p className="font-bold text-brand-black">#EM-29930-X</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-brand-gray uppercase tracking-widest mb-1">Total Paid</p>
                          <p className="font-bold text-brand-teal">${finalTotal}</p>
                        </div>
                      </div>
                      <Button onClick={() => window.location.href = "/"} className="w-full h-16 rounded-full bg-brand-black text-white hover:bg-brand-blue font-bold">
                        Return to Market
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      {/* Step 1: Delivery Address & Method */}
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

                      {/* Step 2: Payment Options */}
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
                                <button 
                                  onClick={() => setSelectedPayment("card")}
                                  className={`p-6 rounded-[2.5rem] border-2 flex flex-col items-center gap-3 text-center transition-all ${selectedPayment === "card" ? 'border-brand-blue bg-brand-blue/5 ring-4 ring-brand-blue/10' : 'border-brand-gray-lighter bg-white hover:border-brand-blue/30'}`}
                                >
                                  <CardIcon className={`w-6 h-6 transition-colors ${selectedPayment === "card" ? 'text-brand-blue' : 'text-brand-gray'}`} />
                                  <span className={`text-[10px] font-bold transition-colors ${selectedPayment === "card" ? 'text-brand-black' : 'text-brand-gray'}`}>Credit Card</span>
                                </button>
                                <button 
                                  onClick={() => setSelectedPayment("apple")}
                                  className={`p-6 rounded-[2rem] border-2 flex flex-col items-center gap-3 text-center transition-all ${selectedPayment === "apple" ? 'border-brand-blue bg-brand-blue/5 ring-4 ring-brand-blue/10' : 'border-brand-gray-lighter bg-white hover:border-brand-blue/30'}`}
                                >
                                  <Apple className={`w-6 h-6 transition-colors ${selectedPayment === "apple" ? 'text-brand-black' : 'text-brand-gray'}`} />
                                  <span className={`text-[10px] font-bold transition-colors ${selectedPayment === "apple" ? 'text-brand-black' : 'text-brand-gray'}`}>Apple Pay</span>
                                </button>
                                <button 
                                  onClick={() => setSelectedPayment("upi")}
                                  className={`p-6 rounded-[2rem] border-2 flex flex-col items-center gap-3 text-center transition-all ${selectedPayment === "upi" ? 'border-brand-blue bg-brand-blue/5 ring-4 ring-brand-blue/10' : 'border-brand-gray-lighter bg-white hover:border-brand-blue/30'}`}
                                >
                                  <Zap className={`w-6 h-6 transition-colors ${selectedPayment === "upi" ? 'text-brand-teal' : 'text-brand-gray'}`} />
                                  <span className={`text-[10px] font-bold transition-colors ${selectedPayment === "upi" ? 'text-brand-black' : 'text-brand-gray'}`}>UPI</span>
                                </button>
                                <button 
                                  onClick={() => setSelectedPayment("wallet")}
                                  className={`p-6 rounded-[2rem] border-2 flex flex-col items-center gap-3 text-center transition-all ${selectedPayment === "wallet" ? 'border-brand-blue bg-brand-blue/5 ring-4 ring-brand-blue/10' : 'border-brand-gray-lighter bg-white hover:border-brand-blue/30'}`}
                                >
                                  <Wallet className={`w-6 h-6 transition-colors ${selectedPayment === "wallet" ? 'text-brand-amber' : 'text-brand-gray'}`} />
                                  <span className={`text-[10px] font-bold transition-colors ${selectedPayment === "wallet" ? 'text-brand-black' : 'text-brand-gray'}`}>Wallet</span>
                                </button>
                              </div>

                              <AnimatePresence mode="wait">
                                {selectedPayment === "upi" ? (
                                  <motion.div 
                                    key="upi-fields"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-8 overflow-hidden"
                                  >
                                    <div className="space-y-4">
                                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Verified UPI ID</label>
                                      <div className="relative">
                                        <input type="text" placeholder="alex@upi" className="w-full h-16 px-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-bold text-lg" />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 bg-white rounded-xl border border-brand-gray-lighter">
                                          <ShieldCheck className="w-4 h-4 text-brand-teal" />
                                          <span className="text-[10px] font-bold text-brand-teal uppercase">Verified</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <button className="p-6 rounded-[2rem] border border-brand-gray-lighter bg-white flex flex-col gap-2 group hover:border-brand-blue transition-all">
                                        <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                                          <Smartphone className="w-4 h-4" />
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Pay via App</p>
                                      </button>
                                      <button className="p-6 rounded-[2rem] border border-brand-gray-lighter bg-white flex flex-col gap-2 group hover:border-brand-blue transition-all">
                                        <div className="w-8 h-8 rounded-lg bg-brand-teal/5 flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
                                          <Zap className="w-4 h-4" />
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray">QR Scan</p>
                                      </button>
                                    </div>
                                    <p className="text-[10px] text-brand-gray font-bold text-center uppercase tracking-widest opacity-60">Complete payment within 5 minutes</p>
                                  </motion.div>
                                ) : selectedPayment === "card" ? (
                                  <motion.div 
                                    key="card-fields"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-6 overflow-hidden"
                                  >
                                    <div className="space-y-3">
                                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Cardholder Name</label>
                                      <input type="text" placeholder="Alex Johnson" className="w-full h-16 px-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Card Details</label>
                                      <div className="relative">
                                        <input type="text" placeholder="4242 4242 4242 4242" className="w-full h-16 pl-6 pr-40 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium tracking-[0.2em]" />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                          <input type="text" placeholder="MM/YY" className="w-16 bg-white rounded-xl px-2 h-10 text-[10px] font-bold text-center border-none" />
                                          <input type="text" placeholder="CVC" className="w-16 bg-white rounded-xl px-2 h-10 text-[10px] font-bold text-center border-none" />
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                ) : (
                                  <motion.div 
                                    key="express-fields"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-8 rounded-[2rem] bg-brand-gray-lighter/30 border border-dashed border-brand-gray-lighter text-center"
                                  >
                                    <p className="text-sm font-bold text-brand-gray">Express checkout will open in a secure popup</p>
                                  </motion.div>
                                )}
                              </AnimatePresence>

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
                    </>
                  )}
                </AnimatePresence>

                {step < 3 && (
                  <div className="flex items-center justify-center gap-8 py-4 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                    <div className="flex items-center gap-2 font-black text-xs tracking-tighter">VISA</div>
                    <div className="flex items-center gap-2 font-black text-xs tracking-tighter">MASTERCARD</div>
                    <div className="flex items-center gap-2 font-black text-xs tracking-tighter">STRIPE</div>
                    <div className="flex items-center gap-2 font-black text-xs tracking-tighter">AMEX</div>
                  </div>
                )}
              </div>

              {/* Right: Premium Summary Card */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32 space-y-6">
                  
                  {/* Order Card */}
                  <div className={`p-10 rounded-[3.5rem] bg-white border border-brand-gray-lighter shadow-xl shadow-black/[0.02] relative overflow-hidden group transition-opacity duration-500 ${step === 3 ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-colors duration-1000"></div>
                    
                    <h3 className="text-2xl font-display font-bold text-brand-black mb-8 relative z-10">Review Items</h3>
                    
                    <div className="flex gap-6 mb-10 relative z-10">
                      <div className="w-28 h-28 rounded-3xl bg-brand-gray-lighter overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-inner">
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

                    {/* Promo Code */}
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

                    <div className="space-y-4 mb-10">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-brand-gray">Market Subtotal</span>
                        <span className="text-brand-black">${product.price}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-brand-gray">Delivery ({selectedDelivery.label})</span>
                        <span className={selectedDelivery.price === 0 ? 'text-brand-teal' : 'text-brand-black'}>
                          {selectedDelivery.price === 0 ? 'FREE' : `$${selectedDelivery.price}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-brand-gray">Estimated Tax</span>
                        <span className="text-brand-black">${product.tax}</span>
                      </div>
                      {isApplied && (
                        <div className="flex justify-between text-sm font-bold text-brand-teal">
                          <span>Discount (REUSE20)</span>
                          <span>-$50.00</span>
                        </div>
                      )}
                      {tradeInApplied && (
                        <div className="flex justify-between text-sm font-bold text-brand-teal">
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

                <div className="flex items-center justify-center gap-8 py-4 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                   <div className="flex items-center gap-2 font-black text-xs tracking-tighter">VISA</div>
                   <div className="flex items-center gap-2 font-black text-xs tracking-tighter">MASTERCARD</div>
                   <div className="flex items-center gap-2 font-black text-xs tracking-tighter">STRIPE</div>
                   <div className="flex items-center gap-2 font-black text-xs tracking-tighter">AMEX</div>
                </div>
              </div>

              {/* Right: Premium Summary Card */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32 space-y-6">
                  
                  {/* Order Card */}
                  <div className="p-10 rounded-[3.5rem] bg-white border border-brand-gray-lighter shadow-xl shadow-black/[0.02] relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-colors duration-1000"></div>
                    
                    <h3 className="text-2xl font-display font-bold text-brand-black mb-8 relative z-10">Review Items</h3>
                    
                    <div className="flex gap-6 mb-10 relative z-10">
                      <div className="w-28 h-28 rounded-3xl bg-brand-gray-lighter overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-inner">
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

                    {/* Promo Code */}
                    <div className="mb-10 relative">
                       <input 
                        type="text" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo Code" 
                        className="w-full h-14 pl-6 pr-24 rounded-2xl bg-brand-gray-lighter border-none focus:ring-2 focus:ring-brand-blue/10 font-bold text-xs uppercase tracking-widest transition-all" 
                       />
                       <button 
                        onClick={() => setIsApplied(!isApplied)}
                        className={`absolute right-2 top-2 h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isApplied ? 'bg-brand-teal text-white' : 'bg-brand-black text-white hover:bg-brand-blue'}`}
                       >
                         {isApplied ? 'Applied' : 'Apply'}
                       </button>
                    </div>

                    <div className="space-y-4 mb-10">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-brand-gray">Market Subtotal</span>
                        <span className="text-brand-black">${product.price}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-brand-gray">Delivery ({selectedDelivery.label})</span>
                        <span className={selectedDelivery.price === 0 ? 'text-brand-teal' : 'text-brand-black'}>
                          {selectedDelivery.price === 0 ? 'FREE' : `$${selectedDelivery.price}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-brand-gray">Estimated Tax</span>
                        <span className="text-brand-black">${product.tax}</span>
                      </div>
                      {isApplied && (
                        <div className="flex justify-between text-sm font-bold text-brand-teal">
                          <span>Discount (REUSE20)</span>
                          <span>-$50.00</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-8 border-t border-brand-gray-lighter flex justify-between items-end relative z-10">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray mb-1">Final Amount</p>
                        <span className="text-5xl font-display font-bold text-brand-black tracking-tighter">
                          ${product.total + selectedDelivery.price - (isApplied ? 50 : 0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Footer */}
                  <div className="space-y-4">
                    <div className="p-8 rounded-[2.5rem] bg-brand-teal/5 border border-brand-teal/10 flex items-start gap-5 hover:bg-brand-teal/[0.08] transition-colors">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                        <ShieldCheck className="w-6 h-6 text-brand-teal" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-brand-teal mb-1 uppercase tracking-widest">Buyer Protection</h4>
                        <p className="text-xs text-brand-teal/80 font-medium leading-relaxed">
                          Your funds are held in a secure vault. We only release payment to the seller once you confirm the device is perfect.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-gray">
                      <div className="flex items-center gap-2"><Lock className="w-3 h-3" /> SSL Secured</div>
                      <span className="w-1 h-1 rounded-full bg-brand-gray-lighter"></span>
                      <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> 2026 Ready</div>
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

