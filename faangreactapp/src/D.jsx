import React, { useContext } from "react";
import { MyContext } from "./MyContext";
function D() {
  var p = useContext(MyContext);
  console.log(p);
  return (
    <div className="border border-2 border-success p-3 m-3 rounded">
      <h1>D:{p.username}</h1>
    </div>
  );
}

export default D;
