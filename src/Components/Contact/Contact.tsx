import ContactMe from "../Indicators/Page Headings/Contact Me/ContactMe";
import LetsConnect from "./Connect";
import ContactForm from "./ContactForm";

export default function Contact(){
  return(
    <>
    <br /><br />
      <ContactMe/>
      <p className="text-center text-sm text-[var(--text-muted)] max-w-md mx-auto">
        I check messages. Whether you get a reply depends on whether there's an actual project in there.
      </p>
      <br /><br />
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