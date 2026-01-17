import Available from "../Components/Indicators/Available For Work/WorkAvailability";
import Hero from "../Components/Hero/Hero";
import NavigationBar from "../Components/Navigation Bar/NavigationBar";
import GetToKnowMe from "../Components/Indicators/Get To know me/GetToKnowMe";
import About from "../Components/About/About";

export default function Home(){
  return(
    <>
      <NavigationBar/>
      <br />
      <br />
      <Available/>
      <br />
      <br />
      <Hero/>
      <br />
      <br />
      <br />
      {/* ////// 
      // The about page*/}
      <GetToKnowMe/>
      <br /><br />
      <About/>
    </>
  )
}