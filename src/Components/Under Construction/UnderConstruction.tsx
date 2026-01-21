import { useState } from "react";
import cancelButton from "../../assets/cancel.svg";

export default function UnderConstruction() {
  const [showBanner, setShowBanner] = useState(true); // Start with true to show banner

  const handleBanner = () => {
    setShowBanner(false); // Simply hide the banner on click
  }

  if (showBanner) {
    return (
      <div className="bg-red-600 flex justify-between items-center p-2">
        <h1 className="text-center text-2xl text-white">
          This website is still under construction.
        </h1>
        <img
          className="h-8 cursor-pointer"
          src={cancelButton}
          onClick={handleBanner}
          alt='Cancel Button'
        />
      </div>
    );
  }

  return null; // Or return nothing if banner is hidden
}