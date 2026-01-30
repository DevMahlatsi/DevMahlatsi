import { IoIosSend } from "react-icons/io";
import { projectTypes } from "../../Data/devmahlatsi.data";

export default function ContactForm(){
  return(
    <>
    <div>
      <form action="" method="post" className="flex flex-col gap-4 border border-[#1a73e8] p-4 rounded-2xl">
        <div className="lblnEdt">
          <label className="lblForm" htmlFor="clientName">
          Your Name: 
        </label>
        <input placeholder="John Doe" className="edtInput" type="text" name="clientName" id="clientName" />
        </div>
        <div className="lblnEdt">
          <label className="lblForm" htmlFor="clientEmail">
          Email Address: 
        </label>
        <input placeholder="JohnDoe@email.com" className="edtInput" type="email" name="clientEmail" id="clientEmail" />
        </div>
        <div className="lblnEdt">
          <label className="lblForm" htmlFor="clientProject">
          Project Type: 
        </label>
        <select className="edtInput bg-[#272727]" name="clientProject" id="clientProject">
          {
            projectTypes.map((type) => {
              return(
                <>
                  <option key={type.id} value={type.value}>{type.name}</option>
                </>
              )
            })
          }
        </select>
        </div>
        <div className="lblnEdt">
          <label htmlFor="userMessage">
            Message
          </label>
          <textarea placeholder="Describe the selected project from above a bit more." className="edtInput2" name="userMessage" id="userMessage" rows={8}>
            
          </textarea>
        </div>
        
          <div className="flex justify-center">
            <button className="w-full p-1 rounded-2xl bg-[#1a73e8] flex justify-center items-center" type="submit">
              <span>Submit</span>
              <IoIosSend />
            </button>
            
          </div>
      </form>
    </div>
    </>
  )
}