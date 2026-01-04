import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Zap, Shield, Globe, Award, CreditCard, Truck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3 text-3xl font-display font-bold">
              <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
                <Zap className="w-7 h-7 fill-white" />
              </div>
              <span className="tracking-tighter">RE/USE</span>
            </div>
            <p className="text-brand-gray-light text-lg leading-relaxed max-w-sm">
              The premier spatial marketplace for verified electronics. We're redefining the second-hand economy through transparency and elite engineering.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all group">
                  <Icon className="w-5 h-5 text-brand-gray-light group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-8">Marketplace</h4>
              <ul className="space-y-4">
                {["Laptops", "Smartphones", "Audio", "Cameras", "Accessories"].map((item) => (
                  <li key={item}><a href="#" className="text-brand-gray-light hover:text-white transition-colors font-medium text-sm">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal mb-8">Seller Hub</h4>
              <ul className="space-y-4">
                {["Instant Quote", "Shipping Labels", "Seller Dashboard", "Payout Rules", "Packaging Guide"].map((item) => (
                  <li key={item}><a href="#" className="text-brand-gray-light hover:text-white transition-colors font-medium text-sm">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-amber mb-8">Assurance</h4>
              <ul className="space-y-4">
                {["Buyer Protection", "Authentication", "Warranty Plus", "Return Policy", "Safety Center"].map((item) => (
                  <li key={item}><a href="#" className="text-brand-gray-light hover:text-white transition-colors font-medium text-sm">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-8">Company</h4>
              <ul className="space-y-4">
                {["Our Story", "Sustainability", "Careers", "Press Kit", "Contact"].map((item) => (
                  <li key={item}><a href="#" className="text-brand-gray-light hover:text-white transition-colors font-medium text-sm">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-white/5 mb-12">
          {[
            { icon: Shield, text: "Escrow Secured" },
            { icon: Award, text: "Verified Quality" },
            { icon: Globe, text: "Eco Conscious" },
            { icon: Truck, text: "Fast Delivery" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray-light group-hover:text-white group-hover:border-white/20 transition-all">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-gray-light group-hover:text-white transition-colors">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
          <div className="flex items-center gap-6">
            <p className="text-brand-gray-light/40 text-xs font-medium">© 2026 RE/USE SPATIAL ARC. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <CreditCard className="w-5 h-5 text-brand-gray-light/20" />
              <div className="w-8 h-5 bg-white/5 rounded border border-white/10"></div>
              <div className="w-8 h-5 bg-white/5 rounded border border-white/10"></div>
            </div>
            <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-brand-gray-light/40">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
