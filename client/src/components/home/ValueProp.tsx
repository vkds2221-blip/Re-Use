import { BadgeCheck, Zap, Leaf, HeadphonesIcon } from "lucide-react";

export function ValueProp() {
  const props = [
    {
      icon: BadgeCheck,
      title: "Certified Quality",
      desc: "Every device undergoes a 70-point inspection by expert technicians."
    },
    {
      icon: Zap,
      title: "Fast & Easy",
      desc: "Buy instantly or sell in minutes with our AI-powered listing tool."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      desc: "Extending the life of tech reduces e-waste and carbon footprint."
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      desc: "Our dedicated team is here to help you 7 days a week."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-display font-bold text-royal-blue mb-4">Why Choose ElectroMarket?</h2>
           <p className="text-gray-500">We're building the most trusted way to trade tech.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((prop, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
               <div className="w-14 h-14 mx-auto bg-emerald-green/10 rounded-full flex items-center justify-center mb-6 text-emerald-green">
                 <prop.icon className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-dark-gray mb-3">{prop.title}</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 {prop.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
