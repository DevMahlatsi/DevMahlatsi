import AboutProjectsShipped from "../Projects Shipped/AboutProjectsShipped/AboutProjectsShipped";
import AboutYearsExperience from "../Years Of Experience/About/AboutYearsExperience";

export default function AboutStats(){
  return(
    <>
      <div className="grid grid-cols-2 gap-2">
        <AboutYearsExperience/>
        <AboutProjectsShipped/>
      </div>
    </>
  )
}