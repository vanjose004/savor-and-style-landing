import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import EventTypes from "./components/EventTypes";
import MenuHighlights from "./components/MenuHighlights";
import DefaultInclusions from "./components/DefaultInclusions";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <EventTypes />
        <MenuHighlights />
        <DefaultInclusions />
        <Gallery />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
