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
          <h1 className=' border-none text-white border rounded-4xl p-3 bg-[#1a73e8]'>Lets Talk</h1>
        </button>
      </div>
    </>
  )
}