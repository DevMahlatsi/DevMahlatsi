import { useState, useEffect } from "react";
import cancelButton from "../../assets/cancel.svg";

export default function UnderConstruction() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const bannerDismissed = localStorage.getItem("bannerDismissed");
    if (bannerDismissed === "true") {
      setShowBanner(false);
    }
  }, []);

  const handleBanner = () => {
    setShowBanner(false);
    localStorage.setItem("bannerDismissed", "true");
    window.dispatchEvent(new Event('storage'));
  }

  if (!showBanner) {
    return null;
  }

  return (
    <div className="banner-top fixed top-0 left-0 right-0 bg-amber-500 flex justify-between items-center p-2.5 z-50">
      <h1 className="text-center text-sm md:text-base text-white flex-1 font-medium">
        🚧 Website under construction. Some features are still being built. 🚧
      </h1>
      <button
        onClick={handleBanner}
        className="hover:opacity-80 transition-opacity p-1"
        aria-label="Dismiss banner"
      >
        <img className="h-5 md:h-6 cursor-pointer" src={cancelButton} alt='Cancel Button' />
      </button>
    </div>
  );
}