import ClientsServed from "../Clients Served/Clients";
import HeroProjectsShipped from "../Projects Shipped/HeroProjectsShipped/HeroProjectsShipped";
import HeroYearOfExperience from "../Years Of Experience/Hero/HeroYearsExperience";

export default function HeroStats(){
  return(
    <>
      <div className="flex gap-3">
        <HeroYearOfExperience/>
        <ClientsServed/>
        <HeroProjectsShipped/>
      </div>
    </>
  )
}