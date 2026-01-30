import Available from "../Components/Indicators/Available For Work/WorkAvailability";
import Hero from "../Components/Hero/Hero";
import NavigationBar from "../Components/Navigation Bar/NavigationBar";
import GetToKnowMe from "../Components/Indicators/Page Headings/Get To know me/GetToKnowMe";
import About from "../Components/About/About";
import UnderConstruction from "../Components/Under Construction/UnderConstruction";
import MySkills from "../Components/Indicators/Page Headings/My Skills/MySkills";
import Skills from "../Components/Skills/Skills";
import PersonalProjects from "../Components/Indicators/Page Banners/Personal Project Banner/PersonalProject";
import DiscussProject from "../Components/Buttons/Discuss Project/DiscussProject";
import RecentWork from "../Components/Indicators/Page Headings/Recent Work/RecentWork";
import SelectedProjectsBanner from "../Components/Indicators/Page Banners/Selection Projects in Mind/SelectedProjectsBanner";
import DesignProcess from "../Components/Indicators/Page Headings/Design Process/DesignProcess";
import ProcessDesign from "../Components/Design Process/DesignProcess";
import ContactMe from "../Components/Indicators/Page Headings/Contact Me/ContactMe";
import Contact from "../Components/Contact/Contact";

export default function Home(){
  return(
    <>
      <UnderConstruction/>
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
      <br /><br /><br />
        {/* ////
        // The skills page */}
      <MySkills/>
      <br /><br />
      <Skills/>
      <br /><br />
      <PersonalProjects/>
      <DiscussProject/>
      <br /><br />
      <RecentWork/>
      <br /><br />
      <SelectedProjectsBanner/>
      <br /><br />
      <DesignProcess/>
      <br /><br />
      <ProcessDesign/>
      <br /><br />
      <ContactMe/>
      <br /><br />
      <Contact/>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </>

  )
}