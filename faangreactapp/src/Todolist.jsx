import React from "react";

function Todolist() {
  //state
  let [todos, setTodos] = React.useState([
    "goto goa",
    "book tickets",
    "get viggies",
    "play cricket",
  ]);

  //action
  function addTodo() {
    var ntd = document.getElementById("d1").value;
    setTodos([...todos, ntd]);
  }

  //UI
  return (
    <div className="border border-3 border-primary p-2 m-2">
      <input type="text" id="d1" />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
