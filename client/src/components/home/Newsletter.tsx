import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="bg-emerald-green py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-emerald-50 mb-8 max-w-xl mx-auto text-lg">
          Get the latest deals, tech tips, and exclusive offers delivered straight to your inbox.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="bg-white border-none h-12 text-gray-800 placeholder:text-gray-400"
          />
          <Button className="bg-vibrant-orange hover:bg-orange-600 text-white h-12 px-8 font-bold">
            Subscribe
          </Button>
        </div>
        <p className="text-emerald-100 text-xs mt-4">No spam, unsubscribe at any time.</p>
      </div>
    </section>
  );
}
