export default function ViewWork(){
  return(
    <button
      onClick={() => {
        const el = document.getElementById("portfolio");
        el?.scrollIntoView({ behavior: "smooth" });
      }}
      className="hero-buttons items-center"
    >
      view the work →
    </button>
  )
}