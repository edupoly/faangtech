import React from "react";

function Counter(props) {
  console.log(props);
  let [count, setCount] = React.useState(props.iv);
  function inc() {
    setCount(count + props.s);
  }
  function dec() {
    setCount(count - props.s);
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
      <button
        onClick={() => {
          props.n(count);
        }}
      >
        Call your parents
      </button>
    </div>
  );
}

export default Counter;
