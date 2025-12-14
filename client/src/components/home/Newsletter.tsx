import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-6 tracking-tight">
          Join the Circular Movement.
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          Get weekly drops of rare tech and selling tips. Zero spam.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Input 
            type="email" 
            placeholder="email@example.com" 
            className="h-14 rounded-full bg-gray-50 border-gray-200 text-lg px-6 focus:ring-black focus:border-black transition-all"
          />
          <Button className="h-14 px-8 rounded-full bg-black text-white hover:bg-gray-800 text-lg font-medium shrink-0">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
