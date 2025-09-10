import React, { useState } from "react";
import Todo from "./Todo";
function Todolist() {
  var [newtask, setNewTask] = React.useState("");
  var [todos, setTodos] = useState([
    { title: "firsttast", status: false },
    { title: "get toys", status: true },
    { title: "goto gym", status: true },
    { title: "goto goa", status: false },
    { title: "paybills", status: true },
  ]);

  function toggleTask(id) {
    setTodos((todos) => {
      return todos.map((todo, i) => {
        if (i === id) {
          todo.status = !todo.status;
        }
        return todo;
      });
    });
  }

  var delTask = React.useCallback(function (ind) {
    setTodos((oldtodos) => {
      return oldtodos.filter((td, i) => {
        if (i == ind) {
          return false;
        } else {
          return true;
        }
      });
    });
  }, []);
  function addTodo() {
    setTodos([...todos, newtask]);
  }
  return (
    <div className="border border-4 p-2 m-2">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((task, i) => {
          return (
            <Todo
              task={task}
              id={i}
              delTask={delTask}
              toggleTask={toggleTask}
              key={i}
            ></Todo>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
// state,action,ui
