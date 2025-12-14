import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
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
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform">
               <span className="font-display font-bold">E</span>
            </div>
            <span className={cn("font-display font-bold text-lg tracking-tight transition-opacity", scrolled ? "hidden sm:block" : "block")}>
              ElectroMarket
            </span>
          </a>

          {/* Central Nav - Pill */}
          <div className="hidden md:flex items-center bg-gray-100/50 rounded-full p-1 border border-black/5">
             {["Shop", "Sell", "About", "Support"].map((item) => (
               <a 
                 key={item} 
                 href="#" 
                 className="px-5 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-black hover:shadow-sm transition-all"
               >
                 {item}
               </a>
             ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-1">
             <button className="p-2.5 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                <Search className="w-5 h-5" />
             </button>
             <button className="p-2.5 rounded-full hover:bg-gray-100 text-gray-600 transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-black rounded-full border border-white"></span>
             </button>
             
             <div className="w-px h-6 bg-gray-200 mx-1 hidden sm:block"></div>
             
             <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-6 h-10 hidden sm:flex">
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
