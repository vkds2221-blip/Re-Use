import { BadgeCheck, Zap, Leaf, HeadphonesIcon, ArrowUpRight } from "lucide-react";

export function ValueProp() {
  const values = [
    { 
      icon: BadgeCheck,
      title: "Rigorous Testing", 
      desc: "70+ point inspection by certified humans. We check everything from battery health to pixel density." 
    },
    { 
      icon: Zap,
      title: "Fair Market Data", 
      desc: "Real-time pricing based on global sales data. No low-ball offers, no price gouging." 
    },
    { 
      icon: Leaf,
      title: "Circular Economy", 
      desc: "Extending device lifecycles by 3.5 years. Reducing e-waste one gadget at a time." 
    },
    { 
      icon: HeadphonesIcon,
      title: "Expert Support", 
      desc: "Real humans, not bots. Our tech experts are ready to help 7 days a week." 
    },
  ];

  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d4e89_1px,transparent_1px),linear-gradient(to_bottom,#1d4e89_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
           <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-8 leading-[0.9]">
                   We take the <br/> risk so you <br/> <span className="text-brand-blue">don't have to.</span>
                </h2>
                <p className="text-xl text-brand-gray-light mb-10 max-w-sm leading-relaxed">
                  Buying used used to be a gamble. We turned it into a science.
                </p>
                <button className="group flex items-center gap-3 text-lg font-medium hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full w-fit backdrop-blur-sm border border-white/10 hover:bg-white/10">
                   Read our Quality Report 
                   <ArrowUpRight className="w-5 h-5 text-brand-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
           </div>
           
           <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-16">
              {values.map((val, idx) => (
                 <div key={idx} className="group">
                    <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors border border-brand-blue/20">
                       <val.icon className="w-7 h-7 text-brand-blue" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{val.title}</h3>
                    <p className="text-brand-gray-light leading-relaxed text-base">{val.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
