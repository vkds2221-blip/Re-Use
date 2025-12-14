import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-royal-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-display font-bold">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-royal-blue">
                E
              </div>
              ElectroMarket
            </div>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
              The most trusted marketplace for buying and selling quality pre-owned electronics. Safe, secure, and sustainable.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-green transition-colors">
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><a href="#" className="hover:text-emerald-green transition-colors">Buy Electronics</a></li>
              <li><a href="#" className="hover:text-emerald-green transition-colors">Sell Your Device</a></li>
              <li><a href="#" className="hover:text-emerald-green transition-colors">Certified Refurbished</a></li>
              <li><a href="#" className="hover:text-emerald-green transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-emerald-green transition-colors">Start Return</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><a href="#" className="hover:text-emerald-green transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-emerald-green transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-emerald-green transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-emerald-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-green mt-0.5" />
                <span>123 Tech Boulevard,<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-green" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-green" />
                <span>support@electromarket.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-200">
          <p>© 2025 ElectroMarket. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
