import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  var ref1 = useRef();
  var ref2 = useRef();
  useEffect(() => {
    // document.getElementById("d1").focus();
    ref1.current.focus();
  }, []);
  function checkEnter(ev) {
    if (ev.key === "Enter") {
      ref2.current.focus();
    }
  }
  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h2>Hello Edupoly</h2>
      <input
        type="text"
        ref={ref1}
        onKeyUp={(e) => {
          checkEnter(e);
        }}
      />
      <br />
      <input type="text" ref={ref2} />
      <br />
      <input type="text" />
    </div>
  );
}

export default App;
