import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AiPricingStrip } from "@/components/home/AiPricingStrip";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustSafetyStrip } from "@/components/home/TrustSafetyStrip";
import { BuySellSplit } from "@/components/home/BuySellSplit";
import { ProductGrid } from "@/components/home/ProductGrid";
import { ValueProp } from "@/components/home/ValueProp";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AiPricingStrip />
        <FeaturedCategories />
        <HowItWorks />
        <TrustSafetyStrip />
        <BuySellSplit />
        <ProductGrid />
        <ValueProp />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
