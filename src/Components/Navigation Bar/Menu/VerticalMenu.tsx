import { menuData } from "../../../Data/devmahlatsi.data";
import type { readerProps } from "../../../Props/devmahlatsi.props";
import MobTalk from "../Lets Talk/MovViewLetsTalk";
import Logo from "../Logo/Logo";

export default function VMenu({ isOpen}: readerProps){
  if(isOpen)
  return(
    <>
    
    <div className="bg-[#272727] absolute right-0 mt-0.5  flex flex-col justify-between">
      <div >
        <div className="flex justify-center">
          <Logo/>
        </div>
      <ul className="text-sm grid grid-cols-[max-content]">
                {menuData.map((menu, index) => {
                  return(
                    <>
                    <div className="">
                      <ul className="">
                        <li key={index} className="border px-20 py-5" >{menu.title}</li>
                      </ul>
                    </div>
                    </>
                  )
                })}
              </ul>
              <div>
                <MobTalk/>
              </div>
              
      </div>
    </div>
      
    </>
  )
}