import React from "react";
import img from "./spinner.gif";

const Spinner = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={img} style={{ width: "500px" }} />
    </div>
  );
};

export default Spinner;
