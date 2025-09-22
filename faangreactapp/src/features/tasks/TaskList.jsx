import React from "react";
import {
  useAddNewTaskMutation,
  useGetAllTasksQuery,
  useLazyGetAllTasksQuery,
} from "../../services/tasks";
import { useNavigate } from "react-router-dom";

function TaskList() {
  var navigate = useNavigate();
  var [newTask, setNewTask] = React.useState({
    title: "",
    status: false,
  });
  let { isLoading, data } = useGetAllTasksQuery();
  var [latestTasksFn] = useLazyGetAllTasksQuery();
  var [addNewTaskFn] = useAddNewTaskMutation();
  function addTask() {
    addNewTaskFn(newTask).then((res) => {
      console.log(res);
      latestTasksFn();
    });
  }
  return (
    <div>
      <h1>TaskList:</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewTask({ ...newTask, title: e.target.value });
        }}
      />
      <button
        onClick={() => {
          addTask();
        }}
      >
        Add Task
      </button>
      {isLoading && <h1>Loading</h1>}
      {!isLoading &&
        data.map((task) => {
          return (
            <li>
              {task.title}
              <button
                onClick={() => {
                  navigate(`/editTask/${task.id}`);
                }}
              >
                Edit
              </button>
            </li>
          );
        })}
    </div>
  );
}

export default TaskList;
