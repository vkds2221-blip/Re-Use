import { Search, Heart, User, ShoppingCart, Menu, Smartphone, Laptop, Camera, Watch, Headphones, Tablet, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Smartphones", icon: Smartphone },
    { name: "Laptops", icon: Laptop },
    { name: "Cameras", icon: Camera },
    { name: "Wearables", icon: Watch },
    { name: "Audio", icon: Headphones },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
          scrolled ? "bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-royal-blue to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <span className="font-display font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-display font-bold text-dark-gray tracking-tight">ElectroMarket</span>
            </a>

            {/* Desktop Search - Floating Pill */}
            <div className="hidden md:flex flex-1 max-w-lg relative mx-8">
              <div className="relative w-full group">
                <Input 
                  type="search" 
                  placeholder="Search MacBook Pro, iPhone 15..." 
                  className="w-full pl-12 h-12 bg-gray-100/50 border-transparent focus:bg-white focus:border-royal-blue/20 focus:ring-4 focus:ring-royal-blue/10 rounded-full transition-all shadow-sm group-hover:bg-white"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-royal-blue transition-colors" />
              </div>
            </div>

            {/* Nav Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden md:flex items-center gap-6 mr-4">
                 {categories.slice(0, 3).map(cat => (
                    <a key={cat.name} href="#" className="text-sm font-medium text-gray-600 hover:text-royal-blue transition-colors">
                      {cat.name}
                    </a>
                 ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 text-gray-600">
                   <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 text-gray-600">
                   <User className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 text-gray-600 relative">
                   <ShoppingCart className="w-5 h-5" />
                   <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-green rounded-full border-2 border-white"></span>
                </Button>
                <Button variant="default" className="hidden md:flex rounded-full bg-dark-gray text-white hover:bg-black px-6">
                  Sell Item
                </Button>
                <Button 
                   variant="ghost" 
                   size="icon" 
                   className="md:hidden rounded-full"
                   onClick={() => setMobileMenuOpen(true)}
                >
                   <Menu className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white p-6 md:hidden animate-in slide-in-from-right duration-300">
           <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-display font-bold text-dark-gray">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
           </div>
           <nav className="flex flex-col gap-6">
              {categories.map(cat => (
                <a key={cat.name} href="#" className="flex items-center gap-4 text-lg font-medium text-gray-800 p-2 rounded-lg hover:bg-gray-50">
                  <cat.icon className="w-6 h-6 text-royal-blue" />
                  {cat.name}
                </a>
              ))}
              <div className="h-px bg-gray-100 my-2"></div>
              <Button className="w-full bg-royal-blue text-white rounded-xl h-12">
                Sign In
              </Button>
           </nav>
        </div>
      )}
    </>
  );
}
