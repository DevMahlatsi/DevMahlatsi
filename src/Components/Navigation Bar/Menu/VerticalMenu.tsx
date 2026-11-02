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
      <div className="fixed top-10 right-0 h-[calc(100%-2.5rem)] w-64 bg-[var(--bg-raised)] border-l border-[var(--border)] z-50 md:hidden animate-slide-in">

        {/* Header with logo and close */}
        <div className="flex justify-between items-center p-5 border-b border-[var(--border)]">
          <div className="text-xl font-bold text-[var(--text-primary)]">
            ~/root
          </div>
          <button
            onClick={() => onNavClick('')}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-2xl"
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
                className="text-left px-6 py-4 text-[var(--text-muted)] hover:text-[var(--accent-mono)] hover:bg-white/5 transition-all duration-200 border-l-2 border-transparent hover:border-[var(--accent-mono)]"
              >
                <span className="text-sm font-medium">{menu.title.toLowerCase()}</span>
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