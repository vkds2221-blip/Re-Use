import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import userImg from "@assets/stock_images/happy_young_person_p_636ae91a.jpg";

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Sold a MacBook Pro",
      text: "I was skeptical about selling online, but the process was incredibly safe and easy. Got paid within 24 hours!",
      highlight: "safe and easy"
    },
    {
      name: "Mike Ross",
      role: "Bought an iPhone 13",
      text: "The phone arrived in perfect condition, exactly as described. Saved me over $300 compared to buying new.",
      highlight: "perfect condition"
    },
    {
      name: "Elena Rodriguez",
      role: "Frequent Buyer",
      text: "I love the 30-day warranty. It gives me peace of mind that I'm not buying a lemon. Highly recommend!",
      highlight: "peace of mind"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-royal-blue text-center mb-12">What Our Users Say</h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                <div className="p-1">
                  <Card className="border-none shadow-none bg-gray-50 rounded-2xl">
                    <CardContent className="flex flex-col items-center text-center p-8">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-white shadow-md">
                        <img src={userImg} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-vibrant-orange text-vibrant-orange" />)}
                      </div>

                      <blockquote className="text-lg text-dark-gray italic mb-6">
                        "{review.text.split(review.highlight)[0]}
                        <span className="text-emerald-green font-medium not-italic bg-emerald-green/10 px-1 rounded">
                          {review.highlight}
                        </span>
                        {review.text.split(review.highlight)[1]}"
                      </blockquote>

                      <div>
                        <h4 className="font-bold text-royal-blue">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
