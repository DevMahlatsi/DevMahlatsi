import { projectTypes } from "../../Data/devmahlatsi.data";

export default function ContactForm(){
  return(
    <>
    <div>
      <form action="" method="post" className="flex flex-col gap-4">
        <div className="lblnEdt">
          <label className="lblForm" htmlFor="clientName">
          Name: 
        </label>
        <input className="edtInput" type="text" name="clientName" id="clientName" />
        </div>
        <div className="lblnEdt">
          <label className="lblForm" htmlFor="clientEmail">
          Email: 
        </label>
        <input className="edtInput" type="email" name="clientEmail" id="clientEmail" />
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
          <textarea className="edtInput" name="userMessage" id="userMessage"></textarea>
        </div>
        

      </form>
    </div>
    </>
  )
}