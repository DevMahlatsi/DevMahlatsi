import { FiMenu, FiX } from 'react-icons/fi';
import type { updateProps } from '../../../Props/devmahlatsi.props';

export default function Burger({onToggle, currentValue}: updateProps) {

  const handleClick = () => {
    onToggle();
  }
  
  return(
    <>
      <div className='block md:hidden'>
        <button
          onClick={handleClick}
          className='text-3xl text-[var(--text-primary)] hover:text-[var(--accent-mono)] transition-colors p-2 rounded-lg hover:bg-white/10'
          aria-label={currentValue ? "Close menu" : "Open menu"}
        >
          {currentValue ? <FiX /> : <FiMenu/>}
        </button>
      </div>
    </>
  )
}