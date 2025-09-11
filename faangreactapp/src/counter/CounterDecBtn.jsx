import React from "react";

function CounterDecBtn(props) {
  return (
    <button
      onClick={() => {
        props.dispatch({ type: "dec" });
      }}
    >
      Decerement
    </button>
  );
}

export default CounterDecBtn;
