import { useEffect } from "react";
import { menuData } from "../../../Data/devmahlatsi.data";
import MobTalk from "../Lets Talk/MovViewLetsTalk";
import { scrollToSection } from "../../../utils/scrollToSection";

interface VMenuProps {
  isOpen: boolean;
  onNavClick: (sectionId: string) => void;
}

export default function VMenu({ isOpen, onNavClick }: VMenuProps){
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onNavClick('');
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onNavClick]);

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
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        onClick={() => onNavClick('')}
      />
      
      {/* Slide-out menu - adjusted top position */}
      <div className="fixed top-10 right-0 h-[calc(100%-2.5rem)] w-64 bg-[#0a0a0a] border-l border-[#1a73e8]/30 shadow-2xl z-50 md:hidden animate-slide-in">
        
        {/* Header with logo and close */}
        <div className="flex justify-between items-center p-5 border-b border-gray-800">
          <div className="text-xl font-bold bg-gradient-to-r from-[#1a73e8] to-white bg-clip-text text-transparent">
            DevMahlatsi
          </div>
          <button 
            onClick={() => onNavClick('')}
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            ✕
          </button>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col py-4 overflow-y-auto h-[calc(100%-120px)]">
          {menuData.map((menu, index) => {
            const sectionId = getSectionId(menu.title);
            return(
              <button
                key={index}
                onClick={() => {
                  if (sectionId) {
                    scrollToSection(sectionId);
                    onNavClick('');
                  }
                }}
                className="text-left px-6 py-4 text-gray-300 hover:text-[#1a73e8] hover:bg-white/5 transition-all duration-200 border-l-2 border-transparent hover:border-[#1a73e8]"
              >
                <span className="text-sm font-medium">{menu.title}</span>
              </button>
            )
          })}
        </nav>
        
        {/* CTA Button */}
        <div className="absolute bottom-8 left-0 right-0 px-5">
          <MobTalk/>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}