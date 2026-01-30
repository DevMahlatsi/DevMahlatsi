import ContactForm from "./ContactForm";

export default function Contact(){
  return(
    <>
      <div className="grid grid-cols-2">
        <div className="left-side">
        You must tell it to relax
        </div>
        <div className="right-side">
          <ContactForm/>
        </div>
      </div>
    </>
  )
}