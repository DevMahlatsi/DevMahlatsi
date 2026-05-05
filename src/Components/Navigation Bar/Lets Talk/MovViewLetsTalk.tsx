import { scrollToSection } from "../../../utils/scrollToSection";

export default function MobTalk(){
  return(
    <div>
      <button 
        onClick={() => scrollToSection('contact')}
        className="w-full bg-gradient-to-r from-[#1a73e8] to-[#0d5bbf] hover:from-[#0d5bbf] hover:to-[#1a73e8] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#1a73e8]/50"
      >
        Let's Talk
      </button>
    </div>
  )
}