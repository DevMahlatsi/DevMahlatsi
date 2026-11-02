import { scrollToSection } from "../../../utils/scrollToSection";

export default function DiscussProject(){
  return(
    <>
    <br />
      <div className="flex justify-center">
        <button
          onClick={() => scrollToSection('contact')}
          className="hero-buttons"
        >
          let's discuss your project →
        </button>
      </div>
    </>
  )
}