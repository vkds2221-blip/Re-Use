export function HowItWorks() {
  const steps = [
    { number: "01", title: "List", desc: "Snap a photo. AI fills the details." },
    { number: "02", title: "Ship", desc: "We send a prepaid box to your door." },
    { number: "03", title: "Verify", desc: "Our experts check and certify it." },
    { number: "04", title: "Paid", desc: "Money in your account within 24h." },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
           <div>
             <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Process</span>
             <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-black leading-none">
                Sell in <br/> Four Steps.
             </h2>
           </div>
           <p className="text-gray-500 max-w-sm text-xl pb-2 leading-relaxed">
              We removed the friction. No meetups, no haggling, no scams. Just simple, secure selling.
           </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[3.5rem] left-0 w-full h-px bg-gray-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="group relative pt-8">
                 {/* Dot on line */}
                 <div className="hidden md:block absolute top-[3.25rem] left-0 w-3 h-3 bg-white border-2 border-black rounded-full z-10 group-hover:scale-150 group-hover:bg-black transition-all duration-300"></div>
                 
                 <div className="text-[6rem] font-display font-bold text-gray-50 absolute top-0 right-0 -z-10 group-hover:text-blue-50 transition-colors duration-500 select-none opacity-50">
                   {step.number}
                 </div>
                 
                 <div className="relative z-10">
                   <h3 className="text-3xl font-bold text-black mb-4 mt-8 group-hover:translate-x-2 transition-transform duration-300">{step.title}</h3>
                   <p className="text-gray-500 text-lg leading-relaxed">{step.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
