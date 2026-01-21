import { useState } from "react";
import Burger from "./Burger/BurgerIcon";
import LetsTalk from "./Lets Talk/LetsTalk";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import VMenu from "./Menu/VerticalMenu";


export default function NavigationBar(){
  const [isOpen, setIsOpen] = useState(false);

  return(
    <>
    <header>
      <div className="mx-4 mt-4 flex justify-between px-7 items-center  bg-[rgba(63,63,63,0.62)] rounded-4xl
      shadow-2xl ">
      <Logo/>
      <Menu/>
      <LetsTalk/>
      <Burger/>
      </div>
      <VMenu
        />
      

    </header>
      
    </>
  )
}