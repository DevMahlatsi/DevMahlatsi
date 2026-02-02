import { useState } from "react";
import Burger from "./Burger/BurgerIcon";
import LetsTalk from "./Lets Talk/LetsTalk";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import VMenu from "./Menu/VerticalMenu";


export default function NavigationBar(){
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () =>{
    setIsOpen(prev => !prev);
  }

  return(
    <>
    <header>
      <div className="  flex justify-between px-7 items-center  bg-[rgba(63,63,63,0.62)]
      shadow-2xl ">
      <Logo/>
      <Menu/>
      <LetsTalk/>
      <Burger
        onToggle={handleToggle} currentValue={isOpen} />
      </div>
      <div className="w-60">
        <VMenu
        isOpen = {isOpen}
        />
      </div>
      
      

    </header>
      
    </>
  )
}