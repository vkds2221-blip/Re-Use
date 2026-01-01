import { Search, ShoppingBag, Menu, X, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <div 
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-2 px-3 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled 
              ? "w-full max-w-5xl bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 rounded-full border border-black/5" 
              : "w-full max-w-7xl bg-transparent"
          )}
        >
          {/* Logo Area */}
          <a href="/" className="flex items-center gap-2 px-3 group">
            <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform">
               <Zap className="w-5 h-5 fill-white" />
            </div>
            <span className={cn("font-display font-bold text-lg tracking-tight transition-colors", scrolled ? "text-brand-black" : "text-brand-black")}>
              RE/USE
            </span>
          </a>

          {/* Central Nav - Pill */}
          <div className="hidden md:flex items-center bg-brand-gray-lighter/50 rounded-full p-1 border border-brand-gray-light/20">
             {["Shop", "Sell", "About", "Support"].map((item) => (
               <a 
                 key={item} 
                 href={item === 'Shop' ? '/category' : '#'} 
                 className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest text-brand-gray hover:bg-white hover:text-brand-blue hover:shadow-sm transition-all"
               >
                 {item}
               </a>
             ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-1">
             <button className="p-2.5 rounded-full hover:bg-brand-gray-lighter text-brand-gray transition-colors">
                <Search className="w-5 h-5" />
             </button>
             <button className="p-2.5 rounded-full hover:bg-brand-gray-lighter text-brand-gray transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-amber rounded-full border border-white"></span>
             </button>
             
             <div className="w-px h-6 bg-brand-gray-light/20 mx-1 hidden sm:block"></div>
             
             <Button className="rounded-full bg-brand-black text-white hover:bg-brand-blue px-6 h-10 hidden sm:flex transition-all">
               Connect
             </Button>

             <button 
                className="md:hidden p-2.5 rounded-full hover:bg-gray-100 text-gray-600"
                onClick={() => setMobileMenuOpen(true)}
             >
                <Menu className="w-5 h-5" />
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white p-6 md:hidden animate-in slide-in-from-bottom-10 duration-300">
           <div className="flex items-center justify-between mb-12">
              <span className="text-2xl font-display font-bold">Menu</span>
              <button 
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
           </div>
           <nav className="flex flex-col gap-2">
              {["Shop Electronics", "Sell Your Device", "Track Order", "Support"].map(item => (
                <a key={item} href="#" className="text-3xl font-display font-bold text-gray-900 py-4 border-b border-gray-100 hover:pl-4 transition-all">
                  {item}
                </a>
              ))}
           </nav>
        </div>
      )}
    </>
  );
}
