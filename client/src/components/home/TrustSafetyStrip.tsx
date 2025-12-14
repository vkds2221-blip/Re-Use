import { Shield, Lock, Truck, RefreshCw } from "lucide-react";

export function TrustSafetyStrip() {
  const features = [
    { icon: Shield, title: "12-Month Warranty", desc: "On all verified devices" },
    { icon: Lock, title: "Secure Payments", desc: "Money held until delivery" },
    { icon: Truck, title: "Insured Shipping", desc: "Full coverage in transit" },
    { icon: RefreshCw, title: "30-Day Returns", desc: "Hassle-free money back" },
  ];

  return (
    <section className="bg-royal-blue py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          
          <div className="text-center lg:text-left lg:max-w-xs">
            <h3 className="text-2xl font-bold text-white mb-2">Peace of Mind Included</h3>
            <p className="text-blue-200 text-sm">We take trust seriously so you can shop with confidence.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center lg:items-start lg:text-left group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-emerald-green transition-colors">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                <p className="text-blue-200 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
