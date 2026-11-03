import Navbar from "./components/navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Overview from "./sections/Overview.jsx";
import Templates from "./sections/Templates.jsx";
import UseCase from "./sections/useCase.jsx";
import Demos from "./sections/Demos.jsx";
import Benefits from "./sections/Benefits.jsx";
import Counters from "./sections/Counters.jsx";
import InnerPages from "./sections/InnerPages.jsx";
import Marquee from "./sections/Marquee.jsx";
import Layouts from "./sections/Layouts.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import CustomDesignCta from "./sections/CustomDesignCta.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import ReactFeatures from "./sections/ReactFeatures.jsx";
import FooterCta from "./sections/FooterCta.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Templates />
      <UseCase />
      <Demos />
      <Benefits />
      <Counters />
      <InnerPages />
      <Marquee />
      <Layouts />
      <Pricing />
      <Faq />
      <CustomDesignCta />
      <Testimonials />
      <ReactFeatures />
      <FooterCta />
    </>
  );
}