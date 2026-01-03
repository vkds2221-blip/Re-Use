import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Star, ShieldCheck, CheckCircle2, Truck, RefreshCcw, 
  Cpu, Battery, Smartphone, Wifi, ChevronRight, Heart, Share2,
  MessageCircle, Send, X, Shield, Clock, Zap, ArrowRight, Check
} from "lucide-react";
import laptopImg from "@assets/stock_images/minimalist_silver_la_814f545f.jpg";
import userImg from "@assets/stock_images/happy_young_person_p_636ae91a.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail() {
  // Mock Data
  const product = {
    name: "MacBook Pro 14\" M3 Max",
    price: 2450,
    originalPrice: 3199,
    condition: "Pristine",
    color: "Space Black",
    specs: [
      { icon: Cpu, label: "Processor", value: "M3 Max 14-Core" },
      { icon: Battery, label: "Battery Health", value: "98% (6 Cycles)" },
      { icon: Smartphone, label: "RAM", value: "36GB Unified" },
      { icon: Wifi, label: "Storage", value: "1TB SSD" },
    ],
    seller: {
      name: "Alex Johnson",
      rating: 5.0,
      sales: 142,
      joined: "2023"
    },
    images: [laptopImg, laptopImg, laptopImg]
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [offerPrice, setOfferPrice] = useState<number | null>(null);
  const [isNegotiating, setIsNegotiating] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: 'seller', text: "Hi! I'm Alex. Let me know if you have any questions about this MacBook. It's in perfect condition!" }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (showChat) scrollToBottom();
  }, [chatHistory, showChat]);

  const autoOptions = [
    { label: "Is this available?", text: "Hi, is this MacBook still available?" },
    { label: "Check condition", text: "Could you tell me more about the screen condition? Any scratches?" },
    { label: "Negotiate Price", action: () => setIsNegotiating(true) },
    { label: "Final Price?", text: "What's your best price for a quick pickup/shipping?" },
  ];

  const bargainOffers = [
    { label: "-5%", value: Math.round(product.price * 0.95) },
    { label: "-10%", value: Math.round(product.price * 0.90) },
    { label: "-15%", value: Math.round(product.price * 0.85) },
    { label: "Custom", value: null },
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newHistory = [...chatHistory, { role: 'user', text: text }];
    setChatHistory(newHistory);
    setMessage("");
    setIsNegotiating(false);

    // Mock seller response
    setTimeout(() => {
      let response = "That's a great question. The screen is perfect with no dead pixels or scratches.";
      if (text.toLowerCase().includes('price') || text.toLowerCase().includes('offer') || text.includes('$')) {
        response = "I'm open to offers, but since it's only had 6 battery cycles, I can't go much lower. What did you have in mind?";
      } else if (text.toLowerCase().includes('available')) {
        response = "Yes, it's still available! I've had a few inquiries but no one has committed yet.";
      }
      setChatHistory(prev => [...prev, { role: 'seller', text: response }]);
    }, 1000);
  };

  const handleOffer = (price: number) => {
    handleSendMessage(`I'd like to offer $${price} for this MacBook.`);
  };



  return (
    <div className="min-h-screen bg-[#FBFBFC] font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Enhanced Breadcrumb */}
          <nav className="flex items-center gap-3 text-sm text-brand-gray mb-12 font-medium overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
            <a href="/" className="hover:text-brand-blue transition-colors">Marketplace</a>
            <ChevronRight className="w-4 h-4 text-brand-gray-light" />
            <a href="/category" className="hover:text-brand-blue transition-colors">Laptops</a>
            <ChevronRight className="w-4 h-4 text-brand-gray-light" />
            <span className="text-brand-black font-semibold">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 xl:gap-20">
            
            {/* Left Column: Immersive Gallery */}
            <div className="lg:col-span-7">
               <div className="lg:sticky lg:top-32 space-y-8">
                 {/* Main Stage */}
                 <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-white border border-brand-gray-lighter shadow-[0_20px_50px_rgba(0,0,0,0.03)] group">
                    <motion.img 
                      key={selectedImage}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      src={product.images[selectedImage]} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-1000 group-hover:scale-105" 
                    />
                    
                    {/* Floating Status Badges */}
                    <div className="absolute top-8 left-8 flex flex-col gap-3">
                       <div className="bg-white/90 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/50 shadow-xl flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></div>
                          <span className="text-xs font-bold text-brand-black tracking-tight">{product.condition} Condition</span>
                       </div>
                       <div className="bg-brand-black/90 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 shadow-xl flex items-center gap-3 text-white">
                          <Zap className="w-3.5 h-3.5 text-brand-amber fill-brand-amber" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Certified Verified</span>
                       </div>
                    </div>

                    {/* Action Controls */}
                    <div className="absolute top-8 right-8 flex flex-col gap-3">
                       <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-brand-blue hover:text-white shadow-xl transition-all duration-300 transform hover:scale-110">
                          <Heart className="w-5 h-5" />
                       </button>
                       <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-brand-blue hover:text-white shadow-xl transition-all duration-300 transform hover:scale-110">
                          <Share2 className="w-5 h-5" />
                       </button>
                    </div>
                 </div>

                 {/* High-Performance Thumbnails */}
                 <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {product.images.map((img, idx) => (
                       <button 
                         key={idx} 
                         onClick={() => setSelectedImage(idx)}
                         className={`relative w-24 h-24 rounded-[1.5rem] overflow-hidden border-2 transition-all duration-300 flex-shrink-0 group ${selectedImage === idx ? 'border-brand-blue ring-4 ring-brand-blue/10 scale-95' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'}`}
                       >
                          <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                       </button>
                    ))}
                 </div>

                 {/* Reliability Indicators */}
                 <div className="hidden lg:grid grid-cols-2 gap-6 pt-4">
                    <div className="p-8 rounded-[2.5rem] bg-white border border-brand-gray-lighter shadow-sm flex items-start gap-5 hover:border-brand-blue/30 transition-colors">
                       <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center flex-shrink-0 text-brand-blue">
                          <ShieldCheck className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-black mb-1">Protection Plan</h4>
                          <p className="text-xs text-brand-gray leading-relaxed font-medium">12-month hardware coverage included as standard.</p>
                       </div>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-white border border-brand-gray-lighter shadow-sm flex items-start gap-5 hover:border-brand-blue/30 transition-colors">
                       <div className="w-12 h-12 rounded-2xl bg-brand-teal/5 flex items-center justify-center flex-shrink-0 text-brand-teal">
                          <RefreshCcw className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-black mb-1">30-Day Window</h4>
                          <p className="text-xs text-brand-gray leading-relaxed font-medium">Free returns for any reason within the first month.</p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Right Column: Narrative & Action */}
            <div className="lg:col-span-5 space-y-12">
               
               {/* Main Title & Social Proof */}
               <div className="space-y-4">
                 <h1 className="text-5xl xl:text-6xl font-display font-bold text-brand-black tracking-tight leading-[0.95]">
                   {product.name}
                 </h1>
                 <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/20">
                       <Star className="w-3.5 h-3.5 fill-brand-amber text-brand-amber" />
                       <span className="text-xs font-bold text-brand-amber">4.9</span>
                       <span className="text-[10px] text-brand-amber/70 font-medium ml-1">(12 reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-gray-light uppercase tracking-widest">
                       <Shield className="w-3.5 h-3.5" />
                       Verified Listing
                    </div>
                 </div>
               </div>

               {/* Transaction Hub */}
               <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-teal rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                  <div className="relative p-10 rounded-[2.5rem] bg-brand-black text-white shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10 space-y-8">
                       <div className="flex justify-between items-start">
                          <div>
                            <p className="text-brand-gray-light text-xs font-bold uppercase tracking-widest mb-2">Price Estimate</p>
                            <div className="flex items-baseline gap-4">
                               <span className="text-6xl font-display font-bold tracking-tight">${product.price}</span>
                               <span className="text-xl text-brand-gray line-through font-medium opacity-50">${product.originalPrice}</span>
                            </div>
                          </div>
                          <div className="bg-brand-amber text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-tighter uppercase animate-bounce">
                             Save $749
                          </div>
                       </div>
                       
                       <div className="grid gap-3">
                          <Button className="w-full h-16 rounded-full bg-white text-brand-black hover:bg-brand-blue hover:text-white text-lg font-black transition-all group/btn shadow-xl shadow-white/5">
                             Purchase Now
                             <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          <Button 
                            onClick={() => setShowChat(true)}
                            variant="outline" 
                            className="w-full h-16 rounded-full border-white/20 text-white hover:bg-white/10 text-lg font-bold flex items-center justify-center gap-3 bg-transparent backdrop-blur-sm transition-all"
                          >
                             <MessageCircle className="w-5 h-5" />
                             Make an Offer
                          </Button>
                       </div>
                       
                       <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/5">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                             <Truck className="w-3 h-3" /> Free Express
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                             <Clock className="w-3 h-3" /> Ships Today
                          </div>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Bento Spec Sheets */}
               <div className="space-y-6">
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-display font-bold text-brand-black">Specifications</h3>
                    <button className="text-xs font-bold text-brand-blue hover:underline">Full Sheet</button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     {product.specs.map((spec, idx) => (
                        <div key={idx} className="p-6 rounded-3xl bg-white border border-brand-gray-lighter hover:border-brand-blue/20 transition-all shadow-sm group">
                           <div className="w-10 h-10 rounded-xl bg-brand-gray-lighter flex items-center justify-center text-brand-gray mb-4 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                              <spec.icon className="w-5 h-5" />
                           </div>
                           <p className="text-[10px] text-brand-gray font-black uppercase tracking-widest mb-1">{spec.label}</p>
                           <p className="font-bold text-brand-black text-sm">{spec.value}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Elevated Seller Experience */}
               <div className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-brand-black">Trust Profile</h3>
                  <div className="p-8 rounded-[2.5rem] bg-white border border-brand-gray-lighter flex flex-col sm:flex-row items-center justify-between gap-8 hover:shadow-xl hover:shadow-black/5 transition-all">
                     <div className="flex items-center gap-6">
                        <div className="relative">
                           <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-brand-gray-lighter">
                              <img src={userImg} alt={product.seller.name} className="w-full h-full object-cover" />
                           </div>
                           <div className="absolute -bottom-1 -right-1 bg-brand-blue text-white p-1.5 rounded-full ring-4 ring-white shadow-lg">
                              <Check className="w-3 h-3" />
                           </div>
                        </div>
                        <div>
                           <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-xl text-brand-black">{product.seller.name}</h4>
                           </div>
                           <p className="text-xs text-brand-gray font-medium">Expert Tier • {product.seller.sales} Successful Sales</p>
                           <div className="flex items-center gap-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                 <Star key={i} className="w-3 h-3 fill-brand-amber text-brand-amber" />
                              ))}
                              <span className="text-[10px] font-bold text-brand-gray ml-2">5.0 RATING</span>
                           </div>
                        </div>
                     </div>
                     <Button variant="outline" className="rounded-full px-8 h-12 border-brand-gray-light text-brand-gray hover:bg-brand-black hover:text-white font-bold transition-all">
                        View Dossier
                     </Button>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </main>

      {/* Negotiation Chatbox - High Polish */}
      <AnimatePresence>
        {showChat && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowChat(false)}
              className="fixed inset-0 bg-brand-black/20 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-8 right-8 w-[420px] max-w-[calc(100vw-4rem)] h-[600px] bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-brand-gray-lighter z-50 flex flex-col overflow-hidden"
            >
              {/* Chat Header */}
              <div className="p-8 bg-brand-black text-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/20">
                        <img src={userImg} alt={product.seller.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-teal rounded-full ring-2 ring-brand-black animate-pulse"></div>
                    </div>
                    <div>
                      <p className="font-bold text-lg">{product.seller.name}</p>
                      <p className="text-[10px] text-brand-gray-light font-bold uppercase tracking-widest opacity-60">Verified Seller</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowChat(false)}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#F8F9FB]">
                <div className="text-center py-4">
                   <div className="inline-block px-4 py-1.5 rounded-full bg-brand-gray-lighter text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                      Negotiation Started • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                   </div>
                </div>
                {chatHistory.map((msg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-brand-blue text-white rounded-tr-none shadow-xl shadow-brand-blue/20' 
                        : 'bg-white text-brand-black border border-brand-gray-lighter rounded-tl-none shadow-sm font-medium'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Options / Bargain UI */}
              <div className="px-8 pb-4 bg-[#F8F9FB]">
                <div className="flex flex-wrap gap-2">
                  {!isNegotiating ? (
                    autoOptions.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => opt.action ? opt.action() : handleSendMessage(opt.text || "")}
                        className="px-4 py-2 rounded-full bg-white border border-brand-gray-lighter text-xs font-bold text-brand-gray hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm"
                      >
                        {opt.label}
                      </button>
                    ))
                  ) : (
                    <div className="w-full space-y-3 p-4 bg-white rounded-3xl border border-brand-blue/20 shadow-lg animate-in slide-in-from-bottom-2">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-blue">Select an offer</p>
                        <button onClick={() => setIsNegotiating(false)} className="text-[10px] font-bold text-brand-gray hover:text-brand-black">Cancel</button>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {bargainOffers.map((offer, idx) => (
                          <button
                            key={idx}
                            onClick={() => offer.value && handleOffer(offer.value)}
                            className="py-3 rounded-xl border border-brand-gray-lighter hover:border-brand-blue hover:bg-brand-blue/5 transition-all flex flex-col items-center justify-center gap-1"
                          >
                            <span className="text-[10px] font-bold text-brand-gray">{offer.label}</span>
                            <span className="text-xs font-black text-brand-black">{offer.value ? `$${offer.value}` : '...'}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Chat Controls */}
              <div className="p-8 bg-white border-t border-brand-gray-lighter">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(message);
                  }} 
                  className="relative"
                >
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message Alex..."
                    className="w-full h-16 pl-6 pr-16 rounded-3xl bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 text-sm font-medium transition-all"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl bg-brand-black text-white flex items-center justify-center hover:bg-brand-blue transition-all active:scale-95 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
                <div className="mt-4 flex items-center justify-center gap-2">
                   <Shield className="w-3 h-3 text-brand-teal" />
                   <span className="text-[10px] font-bold text-brand-gray uppercase tracking-tighter">Secured by ElectroMarket Escrow</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
