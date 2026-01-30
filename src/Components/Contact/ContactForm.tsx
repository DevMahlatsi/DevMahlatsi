import { projectTypes } from "../../Data/devmahlatsi.data";

export default function ContactForm(){
  return(
    <>
    <div>
      <form action="" method="post">
        <div className="flex flex-col">
          <label htmlFor="clientName">
          Name: 
        </label>
        <input className="edtInput" type="text" name="clientName" id="clientName" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="clientEmail">
          Email: 
        </label>
        <input className="edtInput" type="email" name="clientEmail" id="clientName" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectType">
          Project Type: 
        </label>
        <select className="bg-[#272727]" name="projectType" id="projectType">
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
        <div>
          <textarea name="userMessage" id="userMessage"></textarea>
        </div>
        

      </form>
    </div>
    </>
  )
}