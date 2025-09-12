import React, { useReducer, useState } from "react";
const initialState = {
  todos: ["buy toys", "goto gym", "call friends"],
};
function reducer(state, action) {
  //   if (action.type === "ADDTODO") {
  //     return { todos: [...state.todos, action.payload] };
  //   }
  //   if (action.type === "DELETETODO") {
  //     var temp = [...state.todos];
  //     temp.splice(action.payload, 1);
  //     return { todos: [...temp] };
  //   }
  switch (action.type) {
    case "ADDTODO":
      return { todos: [...state.todos, action.payload] };
    case "DELETETODO":
      var temp = [...state.todos];
      temp.splice(action.payload, 1);
      return { todos: [...temp] };
  }
}
function Todolist() {
  var [ntd, setNtd] = useState("");
  var [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="border border-2 border-danger p-2 m-2">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNtd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADDTODO", payload: ntd });
        }}
      >
        Add Todo
      </button>
      <ul>
        {state.todos.map((todo, i) => {
          return (
            <li>
              {todo}
              <button
                onClick={() => {
                  dispatch({ type: "DELETETODO", payload: i });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
