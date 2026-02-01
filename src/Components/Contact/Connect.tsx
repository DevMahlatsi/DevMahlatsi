import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function LetsConnect(){
  return(
    <>
      <div className="grid grid-cols-1 gap-4 border border-[#1a73e8] p-4 md:p-6 rounded-2xl">
        <div>
          <h1 className="text-xl font-bold">Let's Connect</h1>
        </div>
        
        {/* Email */}
        <div className="bg-[#272727] rounded-xl flex items-center gap-4 p-3">
          <div className="bg-[#1a73e8] p-3 rounded-full">
            <MdAlternateEmail className="text-white text-2xl"/>
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium">Email</h2>
            <h3 className="text-sm md:text-base">DevMahlatsi@gmail.com</h3>
          </div>
        </div>
        
        {/* Location */}
        <div className="bg-[#272727] rounded-xl flex items-center gap-4 p-3">
          <div className="bg-[#1a73e8] p-3 rounded-full">
            <CiLocationOn className="text-white text-2xl"/>
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium">Location</h2>
            <h3 className="text-sm md:text-base">Gauteng</h3>
          </div>
        </div>
        
        {/* LinkedIn */}
        <div className="bg-[#272727] rounded-xl flex items-center gap-4 p-3">
          <div className="bg-[#1a73e8] p-3 rounded-full">
            <CiLinkedin className="text-white text-2xl"/>
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium">LinkedIn</h2>
            <h3 className="text-sm md:text-base">Lugisani J Mahlatsi</h3>
          </div>
        </div>
        
        {/* GitHub */}
        <div className="bg-[#272727] rounded-xl flex items-center gap-4 p-3">
          <div className="bg-[#1a73e8] p-3 rounded-full">
            <FaGithub className="text-white text-2xl"/>
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium">GitHub</h2>
            <h3 className="text-sm md:text-base">DevMahlatsi</h3>
          </div>
        </div>
      </div>
    </>
  )
}