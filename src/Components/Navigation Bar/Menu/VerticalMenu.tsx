import type { readerProps } from "../../../Props/devmahlatsi.props";

export default function VMenu({ isOpen}: readerProps){
  return(
    <>
    <div>
      <p>{isOpen ? "Fuck you": "Hello"}</p>
    </div>
      this would be the Vertical menu
    </>
  )
}