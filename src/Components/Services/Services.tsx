import DiscussProject from "../Buttons/Discuss Project/DiscussProject";
import PersonalProjects from "../Indicators/Page Banners/Personal Project Banner/PersonalProject";
import MySkills from "../Indicators/Page Headings/My Skills/MySkills";
import Skills from "../Skills/Skills";

export default function Services() {
  return(
    <>
     <div>
      <br /><br /><br />
      <MySkills/>
            <br /><br />
            <Skills/>
            <br /><br />
            <PersonalProjects/>
            <DiscussProject/>
     </div>
    </>
  )
};
