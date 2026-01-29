
import type { skillsProps } from "../../Props/devmahlatsi.props";

export default function({id, title, icon, description}: skillsProps){
  return(
    <div key={id} className="border w-60 flex flex-col border-[#1a73e8] rounded-xl p-4">
      <div><img className="h-14 p-1 bg-[#1a73e8] rounded-xl" src={icon} alt="" />
      <br />
      </div>
      
      <div><h1 className="">
        <strong>
          {title}
        </strong>
        
        </h1>
        
      </div>
      <div className="text-sm">{description.map((item, index) => {
        return(
          <>
            <li key={index}>
              {item}
            </li>
          </>
        )
      })}</div>
    </div>
  )
}