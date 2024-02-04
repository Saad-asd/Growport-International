import React, { useEffect, useState } from "react";

function Spinner() {
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    // Spinner
    if (!showSpinner) {
      const spinnerElement = document.querySelector("#spinner");
      if (spinnerElement) {
        spinnerElement.classList.remove("show");
      }
    }
  }, [showSpinner]);

  return (
    <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        className="spinner-grow text-primary"
        style={{ width: 3 + "rem", height: 3 + "rem", color: "white" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
