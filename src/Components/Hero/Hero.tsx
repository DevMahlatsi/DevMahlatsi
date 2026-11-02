import { useState, useEffect } from "react";
import DownCV from "../Buttons/Download CV/DownCV";
import ViewWork from "../Buttons/View My Work/ViewMyWork";
import HeroStats from "../Indicators/Hero stats/HeroStats";

export default function Hero(){
  const name = "Lugisani Jeremiah Mahlatsi";
  
  // Typing animation state
  const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "The One Who Reads the Docs",
  "Not Here to Network",
  "Occasionally Wrong. Rarely Unsure.",
  "Writes Tests When It Matters"
];
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
      <p className="text-xs tracking-[0.2em] uppercase text-[#5c2a2a] mb-2">status: shipping. questions after.</p>
      <div className="grid sm:grid-cols-2 text-[var(--text-primary)] gap-8 items-center">
        {/* Left side - Content */}
        <div>
          <p className="text-sm text-[var(--text-muted)] uppercase tracking-widest mb-1">{name}</p>
          <h1 className="text-4xl md:text-6xl leading-tight">
            <span className="border-r-2 border-[var(--border-strong)] pr-1">
              {currentText}
            </span>
            <span className="animate-pulse text-[var(--accent-mono)]">|</span>
          </h1>
          <br />
          <p className="text-[var(--text-body)]">
            Django, Next.js, React Native, whatever the problem actually needs. If your last developer left you with a pile of unfinished tickets, that's not my problem to feel bad about — it's the one I fix.
          </p>
        </div>

        {/* Right side - terminal card */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="bg-[var(--bg-raised)] border border-[var(--border)] rounded-[3px] p-6">
              <div className="flex gap-2 mb-4 text-[10px] uppercase tracking-widest text-[var(--text-dim)]">
                ~/root
              </div>
              <div className="font-mono text-sm">
                <p className="text-[var(--text-muted)]">const <span className="text-[var(--text-primary)]">developer</span> = {"{"}</p>
                <p className="ml-4 text-[var(--text-body)]">name: <span className="text-[var(--text-primary)]">"Lugisani"</span>,</p>
                <p className="ml-4 text-[var(--text-body)]">role: <span className="text-[var(--text-primary)]">"Full Stack"</span>,</p>
                <p className="ml-4 text-[var(--text-body)]">opinions: <span className="text-[var(--text-primary)]">"correct"</span>,</p>
                <p className="text-[var(--text-primary)]">{"}"};</p>
                <br />
                <p className="text-[var(--accent-mono)] animate-pulse">
                  &gt; developer.work()
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex gap-5 text-sm">
        <ViewWork/>
        <DownCV/>
      </div>
      <p className="text-xs text-[var(--text-dim)] italic mt-2">(it's good. that's not up for discussion.)</p>
      <br />
      <div>
        <HeroStats/>
      </div>
    </>
  )
}