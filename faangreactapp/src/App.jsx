import React, { useCallback, useEffect } from "react";
import ChildComp from "./ChildComp";

function App() {
  let [myname, setMyname] = React.useState("");
  //lifecycle hook
  useEffect(() => {
    console.log("App Re-rendered");
  });

  //performance hooks
  var t = React.useMemo(() => {
    return [10, 20];
  }, []);
  var abc = useCallback(function () {
    alert("HI");
  }, []);

  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h2>Hello Edupoly</h2>
      <input
        type="text"
        onChange={(e) => {
          setMyname(e.target.value);
        }}
      />
      <h3>My Name:{myname}</h3>
      <ChildComp a={t} b={abc}></ChildComp>
    </div>
  );
}

export default App;
