import { menuData } from "../../../Data/devmahlatsi.data";
import type { readerProps } from "../../../Props/devmahlatsi.props";

export default function VMenu({ isOpen}: readerProps){
  if(isOpen)
  return(
    <>
    <div className="bg-[#272727]">
      <ul className="text-sm grid grid-cols-[max-content]">
                {menuData.map((menu, index) => {
                  return(
                    <>
                      <li key={index} className="border" >{menu.title}</li>
                    </>
                  )
                })}
              </ul>
    </div>
      
    </>
  )
}