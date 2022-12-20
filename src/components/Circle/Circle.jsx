import React from "react";
import "./Circle.css";

export default function Circle({ height = "100vh", marginBottom = "30px" }) {
  return (
    <div style={{ height, marginBottom }} className="spinnerContainer">
      <div className="loadingSpinner"></div>
    </div>
  );
}
