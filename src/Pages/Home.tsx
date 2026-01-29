import Available from "../Components/Indicators/Available For Work/WorkAvailability";
import Hero from "../Components/Hero/Hero";
import NavigationBar from "../Components/Navigation Bar/NavigationBar";
import GetToKnowMe from "../Components/Indicators/Get To know me/GetToKnowMe";
import About from "../Components/About/About";
import UnderConstruction from "../Components/Under Construction/UnderConstruction";
import MySkills from "../Components/Indicators/My Skills/MySkills";
import Skills from "../Components/Skills/Skills";
import PersonalProjects from "../Components/Indicators/Personal Project Banner/PersonalProject";
import DiscussProject from "../Components/Buttons/Discuss Project/DiscussProject";
import RecentWork from "../Components/Indicators/Recent Work/RecentWork";
import SelectedProjectsBanner from "../Components/Indicators/Selection Projects in Mind/SelectedProjectsBanner";
import DesignProcess from "../Components/Indicators/Design Process/DesignProcess";
import ProcessDesign from "../Components/Design Process/DesignProcess";

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
    </>

  )
}