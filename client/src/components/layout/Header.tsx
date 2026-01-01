import { Search, ShoppingBag, Menu, X, User, Zap, ChevronDown, Laptop, Smartphone, Headphones, Camera, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

  const shopItems = [
    { title: "Laptops", icon: Laptop, desc: "MacBooks, Dell XPS & more", href: "/category?type=laptops" },
    { title: "Phones", icon: Smartphone, desc: "iPhone, Samsung, Pixel", href: "/category?type=phones" },
    { title: "Audio", icon: Headphones, desc: "Sony, Apple, Bose", href: "/category?type=audio" },
    { title: "Cameras", icon: Camera, desc: "Sony, Canon, Leica", href: "/category?type=cameras" },
  ];

  const sellItems = [
    { title: "Instant Quote", icon: Sparkles, desc: "AI-powered valuation", href: "/sell/quote" },
    { title: "Marketplace", icon: TrendingUp, desc: "List it yourself", href: "/sell/list" },
    { title: "Trade-in", icon: ShieldCheck, desc: "Credit for next device", href: "/sell/trade" },
  ];

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

          {/* Central Nav - Mega Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2 bg-brand-gray-lighter/50 rounded-full p-1 border border-brand-gray-light/20">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white px-5 py-2 h-auto rounded-full text-sm font-bold uppercase tracking-widest text-brand-gray data-[state=open]:bg-white data-[state=open]:text-brand-blue">
                    Shop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 w-[450px] gap-3 p-4 bg-white/95 backdrop-blur-xl rounded-[2rem] border border-black/5 shadow-2xl">
                      {shopItems.map((item) => (
                        <a 
                          key={item.title} 
                          href={item.href}
                          className="group p-4 rounded-2xl hover:bg-brand-gray-lighter transition-all border border-transparent hover:border-black/5"
                        >
                          <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-3 group-hover:scale-110 transition-transform">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-brand-black mb-1">{item.title}</h4>
                          <p className="text-xs text-brand-gray leading-tight">{item.desc}</p>
                        </a>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white px-5 py-2 h-auto rounded-full text-sm font-bold uppercase tracking-widest text-brand-gray data-[state=open]:bg-white data-[state=open]:text-brand-blue">
                    Sell
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col w-[280px] gap-2 p-3 bg-white/95 backdrop-blur-xl rounded-[2rem] border border-black/5 shadow-2xl">
                      {sellItems.map((item) => (
                        <a 
                          key={item.title} 
                          href={item.href}
                          className="group flex items-center gap-4 p-3 rounded-xl hover:bg-brand-gray-lighter transition-all"
                        >
                          <div className="w-10 h-10 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal group-hover:rotate-6 transition-transform">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-brand-black">{item.title}</h4>
                            <p className="text-[10px] text-brand-gray font-medium">{item.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {["About", "Support"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <a 
                      href="#" 
                      className="inline-flex px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest text-brand-gray hover:bg-white hover:text-brand-blue hover:shadow-sm transition-all"
                    >
                      {item}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
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
