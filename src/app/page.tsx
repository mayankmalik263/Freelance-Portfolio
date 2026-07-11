import Hero from "@/components/Hero";
import DesktopIcons from "@/components/DesktopIcons";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <DesktopIcons />
      <Hero />
      <About />
      <Tools />
      <Work />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
