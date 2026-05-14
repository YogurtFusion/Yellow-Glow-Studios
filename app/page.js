import Hero from "@/components/section/home/Hero";
import Projects from "@/components/section/home/Projects";
import Services from "@/components/section/home/Services";
import About from "@/components/section/home/About";
import CTA from "@/components/section/home/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <About />
      <CTA />
    </div>
  );
}
