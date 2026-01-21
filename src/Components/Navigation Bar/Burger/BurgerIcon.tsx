import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from "react";

export default function Burger() {

  
  

  return(
    <>
      <div>
        <button
          // onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=' text-4xl'
          >
          {/* {isMenuOpen ? <FiX /> : <FiMenu/>} */}
        </button>
      </div>
    </>

  )
}