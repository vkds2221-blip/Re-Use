import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { BuySellSplit } from "@/components/home/BuySellSplit";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-black selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        <ProductGrid />
        <BuySellSplit />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
