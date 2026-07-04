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
