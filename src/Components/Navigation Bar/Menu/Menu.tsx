import { menuData } from "../../../Data/devmahlatsi.data";

export default function Menu(){
  return(
    <>
      <div className="hidden md:block">
        <ul className="text-sm md:text-xl flex md:gap-8 gap-5">
          {menuData.map((menu, index) => {
            return(
              <>
                <li key={index} className="" >{menu.title}</li>
              </>
            )
          })}
        </ul>
      </div>
      
    </>
  )
}