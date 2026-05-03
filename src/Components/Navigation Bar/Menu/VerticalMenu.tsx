import { menuData } from "../../../Data/devmahlatsi.data";
import MobTalk from "../Lets Talk/MovViewLetsTalk";
import Logo from "../Logo/Logo";

interface VMenuProps {
  isOpen: boolean;
  onNavClick: (sectionId: string) => void;
}

export default function VMenu({ isOpen, onNavClick }: VMenuProps){
  const getSectionId = (title: string) => {
    const mapping: Record<string, string> = {
      'Home': 'home',
      'About': 'about',
      'Skills': 'skills',
      'Portfolio': 'portfolio',
      'Services': 'skills',
      'Contact': 'contact'
    };
    return mapping[title] || title.toLowerCase();
  };

  if(!isOpen) return null;

  return(
    <div className="bg-[#272727] w-36 absolute right-0 mt-0.5 flex flex-col justify-between mr-2.5 z-50">
      <div>
        <div className="flex justify-center border-b">
          <Logo/>
        </div>
        <div className="text-sm gap-1 justify-center grid grid-cols-[max-content]">
          {menuData.map((menu, index) => {
            return(
              <div key={index} className="border-b">
                <ul>
                  <li 
                    onClick={() => onNavClick(getSectionId(menu.title))}
                    className="text-xl p-3 cursor-pointer hover:text-[#1a73e8] transition-colors"
                  >
                    {menu.title}
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
        <div>
          <MobTalk/>
        </div>
      </div>
    </div>
  )
}