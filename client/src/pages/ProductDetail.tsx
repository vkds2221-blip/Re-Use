import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Star, ShieldCheck, CheckCircle2, Truck, RefreshCcw, 
  Cpu, Battery, Smartphone, Wifi, ChevronRight, Heart, Share2,
  MessageCircle, Send, X
} from "lucide-react";
import laptopImg from "@assets/stock_images/minimalist_silver_la_814f545f.jpg";
import userImg from "@assets/stock_images/happy_young_person_p_636ae91a.jpg";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newHistory = [...chatHistory, { role: 'user', text: message }];
    setChatHistory(newHistory);
    setMessage("");

    // Mock seller response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'seller', 
        text: message.toLowerCase().includes('price') || message.toLowerCase().includes('discount')
          ? "I'm open to offers, but since it's only had 6 battery cycles, I can't go much lower. What did you have in mind?"
          : "That's a great question. The screen is perfect with no dead pixels or scratches."
      }]);
    }, 1000);
  };

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
    images: [laptopImg, laptopImg, laptopImg] // Reusing for demo
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Breadcrumb - Minimal */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-black transition-colors">Laptops</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-black">MacBook Pro</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Sticky Gallery */}
            <div className="lg:col-span-7">
               <div className="sticky top-32 space-y-6">
                 {/* Main Image */}
                 <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-100 border border-gray-100 shadow-sm group">
                    <img 
                      src={product.images[selectedImage]} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Floating Condition Tag */}
                    <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                       <span className="text-sm font-bold text-black">{product.condition} Condition</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                       <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 shadow-sm transition-colors">
                          <Heart className="w-5 h-5" />
                       </button>
                       <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 shadow-sm transition-colors">
                          <Share2 className="w-5 h-5" />
                       </button>
                    </div>
                 </div>

                 {/* Thumbnails */}
                 <div className="flex gap-4 overflow-x-auto pb-2">
                    {product.images.map((img, idx) => (
                       <button 
                         key={idx} 
                         onClick={() => setSelectedImage(idx)}
                         className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === idx ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
                       >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                       </button>
                    ))}
                 </div>

                 {/* Trust Cards (Desktop) */}
                 <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
                    <div className="p-6 rounded-3xl bg-gray-50 flex items-start gap-4">
                       <ShieldCheck className="w-6 h-6 text-black mt-1" />
                       <div>
                          <h4 className="font-bold text-sm mb-1">12-Month Warranty</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">Included for free with every purchase. Covers hardware defects.</p>
                       </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-gray-50 flex items-start gap-4">
                       <RefreshCcw className="w-6 h-6 text-black mt-1" />
                       <div>
                          <h4 className="font-bold text-sm mb-1">30-Day Returns</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">Don't love it? Send it back for a full refund, no questions asked.</p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Right Column: Product Details */}
            <div className="lg:col-span-5 relative">
               
               {/* Header */}
               <div className="mb-8">
                 <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-4 tracking-tight leading-[1.1]">
                   {product.name}
                 </h1>
                 <div className="flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-1 text-orange-500">
                       <Star className="w-4 h-4 fill-orange-500" />
                       <span>4.9 (12 reviews)</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">Verified Listing #8492</span>
                 </div>
               </div>

               {/* Price Card */}
               <div className="p-8 rounded-[2rem] bg-black text-white mb-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/30 transition-colors duration-700"></div>
                  
                  <div className="relative z-10">
                    <p className="text-gray-400 text-sm font-medium mb-1">Total Price</p>
                    <div className="flex items-baseline gap-3 mb-6">
                       <span className="text-5xl font-display font-bold tracking-tight text-white">${product.price}</span>
                       <span className="text-brand-gray line-through decoration-1 text-xl">${product.originalPrice}</span>
                       <span className="px-3 py-1 rounded-full bg-brand-amber/20 text-brand-amber text-xs font-bold uppercase tracking-wide">Save $749</span>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                       <Button className="w-full h-14 rounded-full bg-white text-black hover:bg-gray-100 text-lg font-bold">
                          Add to Cart
                       </Button>
                       <Button 
                         onClick={() => setShowChat(true)}
                         variant="outline" 
                         className="w-full h-14 rounded-full border-white/20 text-white hover:bg-white/10 text-lg font-bold flex items-center justify-center gap-2 bg-transparent"
                       >
                          <MessageCircle className="w-5 h-5" />
                          Negotiate Price
                       </Button>
                       <p className="text-center text-xs text-gray-500">Free 2-day shipping included</p>
                    </div>
                  </div>
               </div>

               {/* Specs Grid (Bento) */}
               <div className="mb-10">
                  <h3 className="text-xl font-display font-bold mb-6">Technical Specs</h3>
                  <div className="grid grid-cols-2 gap-4">
                     {product.specs.map((spec, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                           <spec.icon className="w-5 h-5 text-gray-400 mb-3" />
                           <p className="text-xs text-gray-500 font-medium mb-1">{spec.label}</p>
                           <p className="font-bold text-black">{spec.value}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Seller Profile */}
               <div className="mb-10">
                  <h3 className="text-xl font-display font-bold mb-6">Sold By</h3>
                  <div className="p-6 rounded-3xl border border-gray-100 flex items-center justify-between hover:border-gray-200 transition-colors hover:shadow-sm">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100">
                           <img src={userImg} alt={product.seller.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <div className="flex items-center gap-2">
                              <h4 className="font-bold text-lg">{product.seller.name}</h4>
                              <CheckCircle2 className="w-4 h-4 text-blue-500" />
                           </div>
                           <p className="text-sm text-gray-500">Member since {product.seller.joined} • {product.seller.sales} Sales</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="flex items-center gap-1 justify-end font-bold">
                           <Star className="w-4 h-4 fill-black text-black" />
                           {product.seller.rating}
                        </div>
                        <button className="text-sm font-medium text-blue-600 hover:underline">View Profile</button>
                     </div>
                  </div>
               </div>

               {/* Trust Cards (Mobile Only) */}
               <div className="lg:hidden space-y-4">
                  <div className="p-5 rounded-2xl bg-gray-50 flex items-center gap-4">
                     <ShieldCheck className="w-5 h-5 text-black" />
                     <span className="font-bold text-sm">12-Month Warranty</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 flex items-center gap-4">
                     <Truck className="w-5 h-5 text-black" />
                     <span className="font-bold text-sm">Free Express Shipping</span>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </main>

      {/* Negotiation Chatbox */}
      {showChat && (
        <div className="fixed bottom-8 right-8 w-96 max-w-[calc(100vw-4rem)] bg-white rounded-3xl shadow-2xl border border-gray-100 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          {/* Chat Header */}
          <div className="p-6 bg-black text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <img src={userImg} alt={product.seller.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-sm">Chat with {product.seller.name}</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <p className="text-[10px] text-gray-400 font-medium">Online now</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowChat(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 h-[400px] overflow-y-auto p-6 space-y-4 bg-gray-50/50">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-blue text-white rounded-tr-none shadow-lg shadow-brand-blue/10' 
                    : 'bg-white text-black border border-gray-100 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your offer or question..."
                className="w-full h-12 pl-4 pr-12 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-brand-blue/20 text-sm transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-3 font-medium">Your negotiation is private between you and the seller</p>
          </form>
        </div>
      )}

      <Footer />
    </div>
  );
}
