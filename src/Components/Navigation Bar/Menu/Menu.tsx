import { menuData } from "../../../Data/devmahlatsi.data";

interface MenuProps {
  onNavClick: (sectionId: string) => void;
}

export default function Menu({ onNavClick }: MenuProps){
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

  return(
    <div className="hidden sm:block">
      <ul className="flex items-center text-sm md:text-xl md:gap-16 gap-5">
        {menuData.map((menu, index) => {
          return(
            <li
              key={index}
              onClick={() => onNavClick(getSectionId(menu.title))}
              className="cursor-pointer font-medium text-[var(--text-muted)] transition-colors duration-200
                       hover:text-[var(--accent-mono)]"
            >
              {menu.title.toLowerCase()}
            </li>
          )
        })}
      </ul>
    </div>
  )
}