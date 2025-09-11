import React, { useEffect } from "react";

function Todo(props) {
  useEffect(() => {
    console.log("Todo compoent::", props.task);
  });
  return (
    <li
      className="p-2 m-2 border border-2 border-info"
      style={
        props.task.status === true
          ? { backgroundColor: "lightgreen" }
          : { backgroundColor: "lightcoral" }
      }
    >
      {props.task.title}
      <button
        onClick={() => {
          props.toggleTask(props.task.id);
        }}
      >
        {props.task.status ? "Undo" : "Done"}
      </button>
      <button
        onClick={() => {
          props.delTask(props.task.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default React.memo(Todo);
