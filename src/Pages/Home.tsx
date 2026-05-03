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
  return(
    <>
      <UnderConstruction/>
      <NavigationBar/>
      <br /><br />
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

      <br /><br />
      <Footer/>
    </>
  )
}