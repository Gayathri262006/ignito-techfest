import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Events from "./components/Events";
import Competitions from "./components/Competitions";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CosmicBackground from "./components/CosmicBackground";
import ScrollProgress from "./components/ScrollProgress";
import RocketToTop from "./components/RocketToTop";

export default function App() {
  
  useEffect(() => {
    function onClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const scroll = () =>
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", `#${id}`);
      
      if (anchor.closest(".glass-menu")) {
        window.setTimeout(scroll, 340);
      } else {
        scroll();
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip font-body text-white-a antialiased">
      <CosmicBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Events />
        <Competitions />
        <Schedule />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <RocketToTop />
    </div>
  );
}