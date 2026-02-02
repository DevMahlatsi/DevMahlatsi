import { menuData } from "../../../Data/devmahlatsi.data";
import type { readerProps } from "../../../Props/devmahlatsi.props";
import MobTalk from "../Lets Talk/MovViewLetsTalk";
import Logo from "../Logo/Logo";

export default function VMenu({ isOpen}: readerProps){
  if(isOpen)
  return(
    <>
    
    <div className="bg-[#272727] w-36 absolute right-0 mt-0.5 flex flex-col justify-between mr-2.5">
      <div >
        <div className="flex justify-center border-b">
          <Logo/>
        </div>
      <div className="text-sm gap-1  justify-center grid grid-cols-[max-content]">
                {menuData.map((menu, index) => {
                  return(
                    <>
                    <div className=" border-b ">
                      <ul>
                        <li key={index} className="text-xl p-3 " >{menu.title}</li>
                      </ul>
                    </div>
                    </>
                  )
                })}
              </div>
              <div>
                <MobTalk/>
              </div>
              
      </div>
    </div>
      
    </>
  )
}