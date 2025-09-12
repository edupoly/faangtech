import { useEffect, useRef } from "react";
import "./App.css";
import Address from "./Address";

function App() {
  var ref1 = useRef();
  var ref2 = useRef();
  var ref3 = useRef();
  var aref = useRef();
  var ref4 = useRef();
  useEffect(() => {
    // document.getElementById("d1").focus();
    ref1.current.focus();
  }, []);
  function checkEnter(ev) {
    if (ev.key === "Enter") {
      ref2.current.focus();
    }
  }
  function checkenter2(ev) {
    if (ev.key === "Enter") {
      ref3.current.focus();
    }
  }
  function checkEnter3(ev) {
    if (ev.key === "Enter") {
      aref.current.focus();
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
      <input
        type="text"
        ref={ref2}
        onKeyUp={(e) => {
          checkenter2(e);
        }}
      />
      <br />
      <input
        type="text"
        ref={ref3}
        onKeyUp={(e) => {
          checkEnter3(e);
        }}
      />
      <Address a={10} b={"praveen"} ref={[aref, ref4]}></Address>
      <br />
      <input type="text" ref={ref4} placeholder="Enter your state" />
    </div>
  );
}

export default App;
// useState
// useReducer
// useContext

// useEffect

// useCallback
// useMemo

// useRef
