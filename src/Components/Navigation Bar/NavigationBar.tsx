import LetsTalk from "../Buttons/Lets Talk/LetsTalk";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";


export default function NavigationBar(){
  return(
    <>
    <header>
      <div className="mx-4 mt-4 flex justify-between px-7 items-center  bg-[rgba(63,63,63,0.62)] rounded-4xl
      shadow-2xl ">
      <Logo/>
      <Menu/>
      <LetsTalk/>
      </div>
      

    </header>
      
    </>
  )
}