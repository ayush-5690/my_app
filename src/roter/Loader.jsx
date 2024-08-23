import React from "react";

function loader() {
  return (
    <div className="justify-content-center align-items-center position-fixed top-0 w-100 bgloader" style={{height:"100vh"}}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default loader;
