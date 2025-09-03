import React from "react";

function Counter(props) {
  console.log(props);
  let [count, setCount] = React.useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <div className="border border-3 border-danger p-2 m-2">
      <h2>Counter:{count}</h2>
      <button
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
