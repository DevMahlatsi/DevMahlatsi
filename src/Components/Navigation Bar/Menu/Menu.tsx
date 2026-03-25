import { menuData } from "../../../Data/devmahlatsi.data";

export default function Menu(){
  return(
      <div className="hidden sm:block">
        <ul className="flex items-center text-sm md:text-xl  md:gap-16 gap-5">
          {menuData.map((menu, index) => {
            return(
              <>
                <li key={index} className="cursor-pointer font-medium text-white transition-all duration-300 
                       hover:scale-105 hover:text-[#1a73e8] hover:drop-shadow-[0_0_8px_rgba(26,115,232,0.8)]" >{menu.title.toUpperCase()}</li>
              </>
            )
          })}
        </ul>
      </div>
  )
}