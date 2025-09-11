import React, { useReducer } from "react";
import { reducer, initialState } from "./counterSlice";
import CounterIncBtn from "./CounterIncBtn";
import CounterDecBtn from "./CounterDecBtn";

function Counter() {
  var [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="border border-2 border-success p-2 m-2">
      <h1>Counter:{state.count}</h1>
      <CounterIncBtn dispatch={dispatch}></CounterIncBtn>
      <CounterDecBtn dispatch={dispatch}></CounterDecBtn>
    </div>
  );
}

export default Counter;
