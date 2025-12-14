import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AiPricingStrip } from "@/components/home/AiPricingStrip";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustSafetyStrip } from "@/components/home/TrustSafetyStrip";
import { BuySellSplit } from "@/components/home/BuySellSplit";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-royal-blue/20 selection:text-royal-blue">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        <BuySellSplit />
        <ProductGrid />
        <AiPricingStrip />
        <HowItWorks />
        <Testimonials />
        <TrustSafetyStrip />
      </main>
      <Footer />
    </div>
  );
}
