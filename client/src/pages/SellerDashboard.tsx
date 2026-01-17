import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, Package, MessageSquare, TrendingUp, 
  DollarSign, ChevronRight, MoreHorizontal, ArrowUpRight,
  Zap, Clock, CheckCircle2, AlertCircle, Lock, ArrowRight,
  ShieldCheck, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export default function SellerDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setLocation] = useLocation();

  // Mock authentication check
  useEffect(() => {
    const authStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(authStatus);
  }, []);

  const stats = [
    { label: "Active Listings", value: "12", icon: Package, color: "text-brand-blue" },
    { label: "Pending Payout", value: "$4,250", icon: DollarSign, color: "text-brand-teal" },
    { label: "Buyer Interest", value: "84", icon: TrendingUp, color: "text-brand-amber" },
    { label: "Messages", value: "3", icon: MessageSquare, color: "text-brand-blue" },
  ];

  const listings = [
    { id: 1, name: "MacBook Pro 14\" M3 Max", price: "$2,450", status: "Active", views: 142, offers: 3 },
    { id: 2, name: "iPhone 15 Pro - 256GB", price: "$899", status: "Pending Delivery", views: 89, offers: 1 },
    { id: 3, name: "Sony WH-1000XM5", price: "$280", status: "Sold", views: 256, offers: 5 },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FBFBFC] font-sans selection:bg-brand-blue selection:text-white">
        <Header />
        <main className="pt-40 pb-20 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-12 md:p-16 rounded-[3.5rem] bg-brand-black text-white relative overflow-hidden text-center shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-8 backdrop-blur-xl">
                  <Lock className="w-10 h-10 text-brand-teal" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight">
                  Seller Console is <br/>
                  <span className="text-brand-gray-light/40">Restricted Access.</span>
                </h2>
                
                <p className="text-brand-gray-light text-lg font-medium max-w-md mx-auto">
                  Sign in to your professional archive to manage listings, track payouts, and view market analytics.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <Button 
                    onClick={() => setLocation("/auth")}
                    className="h-16 rounded-full bg-white text-brand-black hover:bg-brand-blue hover:text-white text-lg font-black transition-all group"
                  >
                    Sign In Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    onClick={() => setLocation("/auth")}
                    variant="outline" 
                    className="h-16 rounded-full border-white/20 text-white hover:bg-white/10 text-lg font-bold"
                  >
                    Create Account
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-6 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" /> Protected Area
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-brand-amber" /> Seller Perks
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFC] font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-5xl font-display font-bold text-brand-black tracking-tight leading-[0.95] mb-4">
                Seller Console.
              </h1>
              <p className="text-brand-gray font-medium">Overview of your hardware portfolio and active negotiations.</p>
            </div>
            <button className="h-14 px-8 rounded-full bg-brand-black text-white hover:bg-brand-blue font-black transition-all flex items-center gap-2 shadow-xl shadow-black/5 group">
              <Zap className="w-4 h-4 fill-brand-amber text-brand-amber" />
              List New Item
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white border border-brand-gray-lighter shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-brand-gray-lighter flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray mb-1">{stat.label}</p>
                <h3 className="text-3xl font-display font-bold text-brand-black">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold text-brand-black">Active Listings</h2>
                <button className="text-xs font-bold text-brand-blue hover:underline">View All</button>
              </div>

              <div className="space-y-4">
                {listings.map((item) => (
                  <div key={item.id} className="p-6 rounded-[2rem] bg-white border border-brand-gray-lighter hover:border-brand-blue/20 transition-all flex flex-col sm:flex-row items-center justify-between gap-6 group">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand-gray-lighter overflow-hidden border border-brand-gray-lighter">
                        <div className="w-full h-full bg-brand-blue/5 flex items-center justify-center">
                          <Package className="w-6 h-6 text-brand-blue/30" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-black group-hover:text-brand-blue transition-colors">{item.name}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs font-bold text-brand-black">{item.price}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {item.views} views
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${
                        item.status === "Active" ? "bg-brand-teal/10 text-brand-teal" : 
                        item.status === "Sold" ? "bg-brand-black text-white" : 
                        "bg-brand-amber/10 text-brand-amber"
                      }`}>
                        {item.status === "Active" ? <CheckCircle2 className="w-3 h-3" /> : 
                         item.status === "Sold" ? <Zap className="w-3 h-3" /> : 
                         <AlertCircle className="w-3 h-3" />}
                        {item.status}
                      </div>
                      <button className="p-3 rounded-xl hover:bg-brand-gray-lighter transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-brand-gray" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-2xl font-display font-bold text-brand-black">Market Analytics</h2>
              <div className="p-8 rounded-[3rem] bg-brand-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray-light">AI Prediction</p>
                    <ArrowUpRight className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h3 className="text-4xl font-display font-bold tracking-tight">+14.2%</h3>
                  <p className="text-sm text-brand-gray-light leading-relaxed">Demand for M-Series laptops is peaking this week. Consider adjusting your prices.</p>
                  <button className="w-full h-12 rounded-full bg-white text-brand-black font-bold text-xs uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all">
                    Update Estimates
                  </button>
                </div>
              </div>

              <div className="p-8 rounded-[3rem] bg-white border border-brand-gray-lighter space-y-6">
                <h4 className="font-bold text-brand-black">Recent Activity</h4>
                <div className="space-y-6">
                  {[
                    { text: "Offer of $2,300 received on MacBook Pro", time: "2m ago" },
                    { text: "Buyer Alex requested more photos", time: "1h ago" },
                    { text: "Payout of $840 initiated", time: "4h ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-brand-black">{activity.text}</p>
                        <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
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
