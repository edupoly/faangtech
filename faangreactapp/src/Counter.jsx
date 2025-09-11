import React, { useReducer, useState } from "react";

const initialState = { count: 0 };
function reducer(state, action) {
  if (action.type === "inc") {
    return { count: state.count + 1 };
  }
}
function Counter() {
  var [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="border border-2 border-success p-2 m-2">
      <h1>Counter:{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch();
        }}
      >
        Decerement
      </button>
    </div>
  );
}

export default Counter;
