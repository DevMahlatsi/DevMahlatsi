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

      <Hero/>
      {/* //////The about page*/}
      <About/>
      
        {/* ////// The skills page */}
        <Services/>
      
      {/* Portfolio page */}

      <Portfolio/>
      
      {/* Design process page */}

      <Design/>

        {/* contact page */}

      
      <Contact/>
      <br /><br />
      <Footer/>
      
    </>

  )
}