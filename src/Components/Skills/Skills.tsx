import { skills } from "../../Data/devmahlatsi.data";
import SkillsCard from "./SkillsCard";

export default function Skills(){
  return(
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {skills.map((skill) => {
          return(
            <>
            <div>
              <SkillsCard
                id={skill.id}
                icon={skill.icon}
                title= {skill.title}
                description={skill.description}
                />
            </div>
              
            </>
          )
        })}
      </div>
    </>
  )
}