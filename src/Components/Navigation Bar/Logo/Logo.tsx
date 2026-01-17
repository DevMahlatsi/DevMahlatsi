import logo from "../../../../public/DevMahlatsi no background Logo.png";

export default function Logo(){
  return(
    <div>
      <img 
        className="min-h-25 max-h-25"
        src={logo} 
        alt="DevMahlatsi logo" />
    </div>
  )
}