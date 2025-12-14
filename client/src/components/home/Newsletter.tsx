import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="bg-black rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.3),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Join the Circular Movement.
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Get weekly drops of rare tech, selling tips, and market insights. 
              Join 50,000+ subscribers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="h-14 rounded-full bg-white/10 border-white/10 text-lg px-6 text-white placeholder:text-gray-500 focus:bg-white/20 focus:border-white/30 transition-all w-full"
                />
              </div>
              <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 text-lg font-bold shrink-0">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-6">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
