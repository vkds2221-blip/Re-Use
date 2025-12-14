import { Search, Heart, User, ShoppingCart, Menu, Smartphone, Laptop, Camera, Watch, Headphones, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Header() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { name: "Smartphones", icon: Smartphone },
    { name: "Laptops", icon: Laptop },
    { name: "Cameras", icon: Camera },
    { name: "Wearables", icon: Watch },
    { name: "Audio", icon: Headphones },
    { name: "Tablets", icon: Tablet },
  ];

  const quickFilters = ["Under $200", "New Arrivals", "Refurbished", "Top Rated"];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-display font-bold text-royal-blue flex items-center gap-2">
            <div className="w-8 h-8 bg-royal-blue rounded-lg flex items-center justify-center text-white">
              E
            </div>
            ElectroMarket
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <Input 
            type="search" 
            placeholder="Search for iPhone 14, MacBook Pro..." 
            className="w-full pl-10 h-11 bg-white border-gray-200 focus:border-emerald-green focus:ring-emerald-green rounded-lg shadow-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Button className="absolute right-1 top-1 bottom-1 bg-royal-blue hover:bg-blue-800 text-white rounded-md px-6 h-auto">
            Search
          </Button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-dark-gray">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <Heart className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-vibrant-orange rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-green text-[10px] text-white flex items-center justify-center rounded-full font-bold">2</span>
          </button>
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Categories Row */}
      <div className="border-t border-gray-100 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-8">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onMouseEnter={() => setActiveCategory(cat.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`flex items-center gap-2 text-[15px] font-medium transition-colors border-b-2 border-transparent pb-0.5
                    ${activeCategory === cat.name ? 'text-emerald-green border-emerald-green' : 'text-gray-600 hover:text-emerald-green'}`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>
            
            {/* Quick Filters */}
            <div className="flex items-center gap-2">
              {quickFilters.map((filter) => (
                <button 
                  key={filter}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 hover:bg-emerald-green hover:text-white transition-all"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
