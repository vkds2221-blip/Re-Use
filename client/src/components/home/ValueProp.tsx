import { ArrowUpRight } from "lucide-react";

export function ValueProp() {
  const values = [
    { title: "Rigorous Testing", desc: "70+ point inspection by certified humans." },
    { title: "Fair Market Data", desc: "Real-time pricing based on global sales." },
    { title: "Circular Economy", desc: "Extending device lifecycles by 3.5 years." },
    { title: "Fraud Protection", desc: "Zero tolerance for stolen or locked devices." },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
           <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
                 We take the <br/> risk so you <br/> don't have to.
              </h2>
              <button className="flex items-center gap-2 text-lg font-medium hover:text-gray-300 transition-colors">
                 Read our Quality Report <ArrowUpRight className="w-5 h-5" />
              </button>
           </div>
           
           <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {values.map((val, idx) => (
                 <div key={idx}>
                    <div className="w-12 h-px bg-white/20 mb-6"></div>
                    <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{val.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
