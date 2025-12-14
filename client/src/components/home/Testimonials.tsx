import { Star, CheckCircle2 } from "lucide-react";
import userImg from "@assets/stock_images/happy_young_person_p_636ae91a.jpg";

export function Testimonials() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
           <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-black leading-none">
                 Trusted by <br/> 50,000+ Users.
              </h2>
           </div>
           <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-black text-black" />)}
              </div>
              <span className="font-bold text-lg">4.9/5 Average Rating</span>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[1, 2, 3].map((i) => (
             <div key={i} className="bg-gray-50 rounded-[2rem] p-10 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-gray-100 group">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                     <img src={userImg} alt="User" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <div className="font-bold text-lg">Alex Johnson</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-blue-500" /> Verified Buyer
                      </div>
                   </div>
                </div>
                
                <div className="mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-orange-500 text-orange-500 inline-block mr-1" />)}
                </div>

                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  "Honestly the best experience I've had buying used tech. The laptop looked brand new and the packaging was premium."
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
