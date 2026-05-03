import { scrollToSection } from "../../../utils/scrollToSection";

export default function MobTalk(){
  return(
    <div>
      <button 
        onClick={() => scrollToSection('contact')}
        className="w-full"
      >
        <h1 className='border-none text-white border p-3 w-full bg-[#1a73e8]'>Let's Talk</h1>
      </button>
    </div>
  )
}