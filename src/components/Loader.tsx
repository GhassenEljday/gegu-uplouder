import React from "react";

export default function Loader() {
  return (
    <div className="IU-container">
      <h3>Uploading...</h3>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
