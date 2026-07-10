import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import AboutContact from "@/components/AboutContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <Work />
      <Pricing />
      <AboutContact />
      <Footer />
    </main>
  );
}
