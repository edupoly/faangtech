import React, { useEffect, useState } from "react";
import Todo from "./Todo";
function Todolist() {
  var [newtask, setNewTask] = React.useState("");
  var [allTodos, setAllTodos] = useState([
    { title: "firsttast", status: false },
    { title: "get toys", status: true },
    { title: "goto gym", status: true },
    { title: "goto goa", status: false },
    { title: "paybills", status: true },
  ]);

  var [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([...allTodos]);
  }, []);

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
    setAllTodos([...allTodos, { title: newtask, status: false }]);
  }
  function filterTodos(f) {
    if (f === "all") {
      setTodos([...allTodos]);
    }
    if (f === "completed") {
      let temp = allTodos.filter((todo) => {
        if (todo.status === true) {
          return true;
        }
      });
      setTodos([...temp]);
    }
    if (f === "pending") {
      let temp = allTodos.filter((todo) => {
        if (todo.status === false) {
          return true;
        }
      });
      setTodos([...temp]);
    }
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
      <br />
      <b>Filter::</b>
      <br />
      <input
        type="radio"
        name="fil"
        onChange={() => {
          filterTodos("all");
        }}
      />
      :All &nbsp;&nbsp;&nbsp;
      <input
        type="radio"
        name="fil"
        onChange={() => {
          filterTodos("completed");
        }}
      />
      :Completed &nbsp;&nbsp;&nbsp;
      <input
        type="radio"
        name="fil"
        onChange={() => {
          filterTodos("pending");
        }}
      />
      :Pending &nbsp;&nbsp;&nbsp;
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
