export function HowItWorks() {
  const steps = [
    { number: "01", title: "List", desc: "Snap a photo. AI fills the details." },
    { number: "02", title: "Ship", desc: "We send a prepaid box to your door." },
    { number: "03", title: "Paid", desc: "Money in your account within 24h." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
           <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-black leading-none">
              Sell in <br/> Three Steps.
           </h2>
           <p className="text-gray-500 max-w-xs text-lg pb-2">
              We removed the friction. No meetups, no haggling, no scams.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative">
               <div className="text-[8rem] font-display font-bold text-gray-50 absolute -top-24 -left-4 -z-10 group-hover:text-gray-100 transition-colors duration-500 select-none">
                 {step.number}
               </div>
               <div className="pt-8 pl-4">
                 <h3 className="text-3xl font-bold text-black mb-4 group-hover:translate-x-2 transition-transform duration-300">{step.title}</h3>
                 <p className="text-gray-500 text-lg leading-relaxed max-w-[200px]">{step.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
