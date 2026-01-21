import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from "react";

export default function Burger(){

    const[isMenuOpen, setIsMenuOpen] = useState(false);

  return(
    <>
      <div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=' text-4xl'
          >
          {isMenuOpen ? <FiX /> : <FiMenu/>}
        </button>
      </div>
    </>

  )
}