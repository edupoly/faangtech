import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function E() {
  var d = useContext(MyContext);
  return (
    <div className="border border-2 border-success p-3 m-3 rounded">
      <h1>E:{d}</h1>
    </div>
  );
}

export default E;
