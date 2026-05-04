import { useEffect } from "react";
import Home from "./Pages/Home"
import emailjs from "@emailjs/browser"


function App() {
    useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  return (
    <>
      <Home/>
      
    </>
  )
}

export default App
