import React, { useEffect, useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Counter:: Hello useEffect with no dep array");
  });
  useEffect(() => {
    console.log("Counter:: Hello useEffect with empty dep array");
  }, []);
  return (
    <div className="border border-2 border-success p-2 m-2">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
