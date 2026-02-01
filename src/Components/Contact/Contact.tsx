import LetsConnect from "./Connect";
import ContactForm from "./ContactForm";

export default function Contact(){
  return(
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="left-side">
          <LetsConnect/>
        </div>
        <div className="right-side">
          <ContactForm/>
        </div>
      </div>
    </>
  )
}