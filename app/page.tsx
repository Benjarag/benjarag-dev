import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
