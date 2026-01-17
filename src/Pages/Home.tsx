import Available from "../Components/Indicators/Available For Work/WorkAvailability";
import Hero from "../Components/Hero/Hero";
import NavigationBar from "../Components/Navigation Bar/NavigationBar";

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
    </>
  )
}