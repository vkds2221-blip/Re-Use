import { ShieldCheck, Truck, RotateCcw, Lock, CheckCircle2 } from "lucide-react";

export function TrustSafetyStrip() {
  const features = [
    { icon: ShieldCheck, title: "12-Month Warranty", desc: "Every device covers you." },
    { icon: Lock, title: "Secure Payments", desc: "Funds held until approval." },
    { icon: Truck, title: "Insured Shipping", desc: "Fully covered in transit." },
    { icon: RotateCcw, title: "30-Day Returns", desc: "No questions asked." },
  ];

  return (
    <div className="w-full bg-blue-600 overflow-hidden relative">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
          {features.map((item, idx) => (
             <div key={idx} className="w-full md:w-1/4 py-10 px-6 flex items-center justify-center gap-5 hover:bg-white/5 transition-colors cursor-default group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-900/10">
                   <item.icon className="w-6 h-6 text-white group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                   <h4 className="font-bold text-base text-white mb-1">{item.title}</h4>
                   <p className="text-sm text-blue-100/80 font-medium">{item.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
