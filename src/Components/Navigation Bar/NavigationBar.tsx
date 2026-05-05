import { useState, useEffect } from "react";
import Burger from "./Burger/BurgerIcon";
import LetsTalk from "./Lets Talk/LetsTalk";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import VMenu from "./Menu/VerticalMenu";
import { scrollToSection } from "../../utils/scrollToSection";

export default function NavigationBar(){
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return(
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-[rgba(63,63,63,0.62)] backdrop-blur-sm'
      }`}>
        <div className="flex justify-between px-4 md:px-7 items-center py-3 md:py-4">
          <Logo/>
          <div className="hidden md:block">
            <Menu onNavClick={handleNavClick}/>
          </div>
          <div className="hidden md:block">
            <LetsTalk/>
          </div>
          <div className="block md:hidden">
            <Burger onToggle={handleToggle} currentValue={isOpen} />
          </div>
        </div>
      </header>

      <VMenu isOpen={isOpen} onNavClick={handleNavClick}/>
    </>
  )
}