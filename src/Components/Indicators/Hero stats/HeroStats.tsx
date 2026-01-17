import ClientsServed from "../Clients Served/Clients";
import ProjectsShipped from "../Projects Shipped/ProjectsShipped";
import YearOfExperience from "../Years Of Experience/YearsExperience";

export default function HeroStats(){
  return(
    <>
      <div className="flex gap-3">
        <YearOfExperience/>
        <ClientsServed/>
        <ProjectsShipped/>
      </div>
    </>
  )
}