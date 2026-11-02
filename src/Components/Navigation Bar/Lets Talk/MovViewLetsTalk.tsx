import { scrollToSection } from "../../../utils/scrollToSection";

export default function MobTalk(){
  return(
    <div>
      <button
        onClick={() => scrollToSection('contact')}
        className="w-full border border-[var(--border-strong)] bg-[var(--bg-raised)] text-[var(--text-primary)] font-medium py-3 px-4 rounded-[3px] transition-colors duration-200 hover:border-[var(--accent-mono)] hover:text-[var(--accent-mono)]"
      >
        lets talk →
      </button>
    </div>
  )
}