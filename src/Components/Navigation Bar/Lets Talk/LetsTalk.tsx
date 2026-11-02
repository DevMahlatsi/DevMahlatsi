import { scrollToSection } from "../../../utils/scrollToSection";

export default function Talk(){
  return(
    <>
      <div className="hidden sm:block">
        <button
          onClick={() => scrollToSection('contact')}
          className="group flex items-center gap-2 rounded-[3px] border border-[var(--border-strong)] bg-[var(--bg-raised)] px-5 py-2
                   text-[var(--text-primary)] text-sm font-medium
                   transition-colors duration-200
                   hover:border-[var(--accent-mono)] hover:text-[var(--accent-mono)]"
        >
          <span>lets talk →</span>
        </button>
      </div>
    </>
  )
}