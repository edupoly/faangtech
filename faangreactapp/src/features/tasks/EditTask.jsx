import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} from "../../services/tasks";

function EditTask() {
  var { id } = useParams();
  var { isLoading, data } = useGetTaskByIdQuery(id);
  var [updateTaskFn] = useUpdateTaskMutation();
  var [updatedTask, setUpdatedTask] = React.useState({
    id: id,
    title: "data?.title",
    status: "",
  });
  useEffect(() => {
    if (!isLoading) {
      setUpdatedTask({ ...data });
    }
  }, [isLoading]);
  function updateTask() {
    console.log(updatedTask);
    updateTaskFn(updatedTask).then((res) => console.log(res));
  }
  function handleUpdateTask(e) {
    setUpdatedTask((cv) => {
      console.log("cv", cv);
      return {
        ...cv,
        title: e.target.value,
      };
    });
  }
  return (
    <div>
      <h1>EditTask</h1>
      {!isLoading && (
        <>
          <input
            type="text"
            defaultValue={data.title}
            onChange={(e) => {
              handleUpdateTask(e);
            }}
          />
          <button
            onClick={() => {
              updateTask();
            }}
          >
            Update Task
          </button>
        </>
      )}
    </div>
  );
}

export default EditTask;
