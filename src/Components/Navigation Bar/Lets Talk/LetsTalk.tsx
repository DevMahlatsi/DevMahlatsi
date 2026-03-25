import { HiArrowRight } from "react-icons/hi2";

export default function Talk(){
  return(
    <>
      <div className="hidden sm:block">
        <button className="group flex items-center gap-2 rounded-full bg-[#1a73e8] px-6 py-2.5 
                   text-white font-semibold shadow-md
                   transition-all duration-300 ease-in-out
                   hover:bg-[#1e88e5] hover:scale-105 hover:shadow-[0_0_20px_rgba(26,115,232,0.6)]
                   active:scale-95">
          <span>Lets talk</span>
          <HiArrowRight
          className="text-lg transition-transform duration-300 group-hover:translate-x-1"/>
        </button>
      </div>
    </>
  )
}