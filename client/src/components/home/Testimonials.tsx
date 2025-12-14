import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h2 className="text-3xl font-display font-bold text-dark-gray mb-4">Trusted by 50,000+ Users</h2>
           <p className="text-gray-500">Don't just take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[1, 2, 3].map((i) => (
             <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-vibrant-orange text-vibrant-orange" />)}
                </div>
                <p className="text-lg text-dark-gray font-medium mb-6 leading-relaxed">
                  "Honestly the best experience I've had buying used tech. The laptop looked brand new and the packaging was premium."
                </p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                   <div>
                      <div className="font-bold text-sm">Alex Johnson</div>
                      <div className="text-xs text-gray-500">Verified Buyer</div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
