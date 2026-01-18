import { techToolsData } from "../../../Data/devmahlatsi.data";

export default function ToolsAndTechnologies(){
  return(
    <>
      
      <div>
        <div>
          <h1>
            Tools & Technologies
          </h1>
          <br/>
        </div>
        <div>
          <ul className="flex flex-wrap gap-3 ">
            {techToolsData.map((tool) => {
              return(
                <li className="text-sm p-1 px-2 border border-[#1a73e8] rounded-4xl tech-edit">
                  
                  {tool.title}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}