import { menuData } from "../../../Data/devmahlatsi.data";

export default function Menu(){
  return(
    <>
      <div>
        <ul className="text-sm md:text-3xl flex gap-1 sm:gap-3">
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