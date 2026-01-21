import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from "react";
import type { updateProps } from '../../../Props/devmahlatsi.props';

export default function Burger({onToggle, currentValue}: updateProps) {

  const handleClick =() =>{
    onToggle();
  }
  

  return(
    <>
      <div>
        <button
          onClick={handleClick}
          className=' text-4xl'
          >
          {currentValue ? <FiX /> : <FiMenu/>}
        </button>
      </div>
    </>

  )
}