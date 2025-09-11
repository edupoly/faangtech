import React from "react";

function CounterIncBtn(props) {
  return (
    <button
      onClick={() => {
        props.dispatch({ type: "inc" });
      }}
    >
      Increment
    </button>
  );
}

export default CounterIncBtn;
