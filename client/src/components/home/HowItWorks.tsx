export function HowItWorks() {
  const steps = [
    { number: "01", title: "List Your Device", desc: "Snap a few photos and get an instant AI price valuation." },
    { number: "02", title: "Get Verified", desc: "Our team checks the quality and specs of your item." },
    { number: "03", title: "Ship It Free", desc: "Use our prepaid shipping label to send your device." },
    { number: "04", title: "Get Paid Fast", desc: "Receive payment directly to your bank within 24 hours." },
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-royal-blue mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Selling your old tech has never been easier. We handle the hard parts so you can get paid quickly and securely.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-gray-50 md:bg-transparent pt-4 md:pt-0">
                <div className="w-16 h-16 rounded-full bg-vibrant-orange text-white text-xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20 border-4 border-white">
                  {step.number}
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-semibold text-dark-gray mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
