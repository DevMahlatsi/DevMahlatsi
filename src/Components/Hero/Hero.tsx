import { useState, useEffect } from "react";
import DownCV from "../Buttons/Download CV/DownCV";
import ViewWork from "../Buttons/View My Work/ViewMyWork";
import HeroStats from "../Indicators/Hero stats/HeroStats";

export default function Hero(){
  const name = "Lugisani Jeremiah Mahlatsi";
  
  // Typing animation state
  const roles = ["Full Stack Software Developer", "Problem Solver", "Tech Learner", "Code Creator"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }
      
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return(
    <>
      <div className="grid sm:grid-cols-2 text-[#ffffff] gap-8 items-center">
        {/* Left side - Content */}
        <div>
          <h1 className="text-5xl md:text-7xl">
            Hi, I'm <span className="name-deco">{name}</span>
          </h1>
          <br />
          <h3 className="text-2xl md:text-3xl">
            <span className="border-r-2 border-[#1a73e8] pr-1">
              {currentText}
            </span>
            <span className="animate-pulse text-[#1a73e8]">|</span>
          </h3>
          <br />
          <p className="text-gray-300">
            I solve problems with code, learning new tech and continuously improve my skills.
            <br />
            Currently seeking a Work Integrated Learning (WIL) or Software Development Internship.
          </p>
        </div>
        
        {/* Right side - Now with content! */}
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Decorative code bracket */}
            <div className="absolute -top-6 -left-6 text-6xl text-[#1a73e8]/20 font-mono">{`<`}</div>
            
            {/* Code card */}
            <div className="bg-[#1a1a1a] border border-[#1a73e8]/30 rounded-2xl p-6 shadow-2xl shadow-[#1a73e8]/10">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm">
                <p className="text-[#1a73e8]">const <span className="text-white">developer</span> = {"{"}</p>
                <p className="ml-4 text-gray-300">name: <span className="text-green-400">"Lugisani"</span>,</p>
                <p className="ml-4 text-gray-300">role: <span className="text-yellow-400">"Full Stack"</span>,</p>
                <p className="ml-4 text-gray-300">passion: <span className="text-pink-400">"Building things that matter"</span>,</p>
                <p className="text-white">{"}"};</p>
                <br />
                <p className="text-gray-400 animate-pulse">
                  <span className="text-[#1a73e8]">&gt;</span> developer.work()
                </p>
              </div>
            </div>
            
            {/* Decorative code bracket */}
            <div className="absolute -bottom-6 -right-6 text-6xl text-[#1a73e8]/20 font-mono">{`/>`}</div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex gap-5 text-sm">
        <ViewWork/>
        <DownCV/>
      </div>
      <br />
      <div>
        <HeroStats/>
      </div>
    </>
  )
}