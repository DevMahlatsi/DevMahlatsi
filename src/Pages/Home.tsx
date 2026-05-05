import { useState, useEffect } from "react";
import Available from "../Components/Indicators/Available For Work/WorkAvailability";
import Hero from "../Components/Hero/Hero";
import NavigationBar from "../Components/Navigation Bar/NavigationBar";
import About from "../Components/About/About";
import UnderConstruction from "../Components/Under Construction/UnderConstruction";
import Contact from "../Components/Contact/Contact";
import Services from "../Components/Services/Services";
import Portfolio from "../Components/Portfolio/Portfolio";
import Design from "../Components/Design Process/Design";
import Footer from "../Components/Footer/Footer";

export default function Home(){
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const checkBanner = () => {
      const bannerDismissed = localStorage.getItem("bannerDismissed");
      setBannerVisible(bannerDismissed !== "true");
    };
    checkBanner();
    
    window.addEventListener('storage', checkBanner);
    return () => window.removeEventListener('storage', checkBanner);
  }, []);

  return(
    <>
      <UnderConstruction/>
      <NavigationBar/>
      {/* Large padding to push content below both fixed elements */}
      <div className={bannerVisible ? "pt-40 md:pt-44" : "pt-28 md:pt-32"}>
        <div className="container mx-auto px-4">
          <Available/>
          <section id="home">
            <Hero/>
          </section>
          <section id="about">
            <About/>
          </section>
          <section id="skills">
            <Services/>
          </section>
          <section id="portfolio">
            <Portfolio/>
          </section>
          <section id="process">
            <Design/>
          </section>
          <section id="contact">
            <Contact/>
          </section>
          <Footer/>
        </div>
      </div>
    </>
  )
}