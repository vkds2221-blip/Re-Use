import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight, Mail, Lock, User, CheckCircle2, ShieldCheck, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [location, setLocation] = useLocation();

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In mockup mode, we simulate login state in localStorage
    localStorage.setItem("isLoggedIn", "true");
    setLocation("/sell/list");
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] flex flex-col lg:flex-row font-sans selection:bg-brand-blue selection:text-white overflow-hidden">
      
      {/* Left: Branding & Visuals */}
      <div className="hidden lg:flex lg:w-1/2 bg-brand-black relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-lg">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
              <Zap className="w-7 h-7 fill-white" />
            </div>
            <span className="font-display font-bold text-3xl text-white tracking-tighter">RE/USE</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl font-display font-bold text-white leading-[0.95] mb-8 tracking-tighter">
              One Account. <br/>
              <span className="text-brand-gray-light/30">Infinite Trades.</span>
            </h1>
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Dual-Role Identity", desc: "Buy and sell seamlessly with a single verified profile." },
                { icon: Zap, title: "Instant Fluidity", desc: "Use your sales balance to fund your next tech upgrade." },
                { icon: CheckCircle2, title: "Unified Trust", desc: "Build a single reputation score across the entire ecosystem." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <item.icon className="w-6 h-6 text-brand-teal flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-brand-gray-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right: Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-20 relative bg-white lg:rounded-l-[4rem] z-20 shadow-[-40px_0_80px_rgba(0,0,0,0.03)]">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h2 className="text-4xl font-display font-bold text-brand-black mb-3 tracking-tight">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-brand-gray font-medium">
              Join the unified ecosystem for high-end electronics.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray-light" />
                    <input type="text" placeholder="Alex Johnson" className="w-full h-16 pl-14 pr-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray ml-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray-light" />
                <input type="email" placeholder="alex@spatial.design" className="w-full h-16 pl-14 pr-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Password</label>
                {isLogin && <button type="button" className="text-[10px] font-bold text-brand-blue hover:underline">Forgot?</button>}
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray-light" />
                <input type="password" placeholder="••••••••" className="w-full h-16 pl-14 pr-6 rounded-[1.5rem] bg-brand-gray-lighter border-none focus:ring-4 focus:ring-brand-blue/10 transition-all font-medium" />
              </div>
            </div>

            <Button className="w-full h-16 rounded-full bg-brand-black text-white hover:bg-brand-blue text-lg font-black transition-all group shadow-xl shadow-black/5">
              {isLogin ? "Sign In" : "Register Now"}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-10">
            <div className="relative flex items-center mb-8">
              <div className="flex-grow border-t border-brand-gray-lighter"></div>
              <span className="flex-shrink mx-4 text-[10px] font-black text-brand-gray-light uppercase tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-brand-gray-lighter"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 h-14 rounded-2xl border border-brand-gray-lighter hover:bg-brand-gray-lighter transition-all font-bold text-sm">
                <Github className="w-5 h-5" /> GitHub
              </button>
              <button className="flex items-center justify-center gap-3 h-14 rounded-2xl border border-brand-gray-lighter hover:bg-brand-gray-lighter transition-all font-bold text-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </button>
            </div>
          </div>

          <p className="mt-12 text-center text-sm font-medium text-brand-gray">
            {isLogin ? "New to Re/Use?" : "Already have an account?"}{" "}
            <button onClick={toggleMode} className="text-brand-blue font-bold hover:underline">
              {isLogin ? "Create account" : "Sign in here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
