import { ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react";

export function TrustSafetyStrip() {
  const features = [
    { icon: ShieldCheck, title: "12-Month Warranty", desc: "Every device is covered." },
    { icon: Lock, title: "Secure Payments", desc: "Funds held until approval." },
    { icon: Truck, title: "Insured Shipping", desc: "Fully covered in transit." },
    { icon: RotateCcw, title: "30-Day Returns", desc: "No questions asked." },
  ];

  return (
    <div className="w-full bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {features.map((item, idx) => (
             <div key={idx} className="w-full md:w-1/4 py-8 px-6 flex items-center justify-center gap-4 hover:bg-gray-100/50 transition-colors cursor-default">
                <item.icon className="w-6 h-6 text-black opacity-80" />
                <div>
                   <h4 className="font-bold text-sm text-black">{item.title}</h4>
                   <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
