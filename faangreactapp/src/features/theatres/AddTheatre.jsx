import React from "react";
import {
  useAddNewTheatreMutation,
  useLazyGetAllTheatresQuery,
} from "../../services/theatres";
import { v4 as uuidv4 } from "uuid";

function AddTheatre() {
  let [newTheatre, setNewTheatre] = React.useState({
    id: uuidv4(),
    tname: "",
    timage: "",
    tplace: "",
  });
  var [addTheatreFn] = useAddNewTheatreMutation();
  var [getLatestTheatresFn] = useLazyGetAllTheatresQuery();
  function handleSubmit(ev) {
    ev.preventDefault();
    addTheatreFn(newTheatre).then(() => {
      getLatestTheatresFn();
    });
  }
  return (
    <div>
      <h1>AddTheatre</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="theatreName"
          placeholder="Enter Theatre Name"
          onChange={(e) => {
            setNewTheatre({ ...newTheatre, tname: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          name="theatreName"
          placeholder="Enter Theatre Image URL"
          onChange={(e) => {
            setNewTheatre({ ...newTheatre, timage: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          name="theatreName"
          placeholder="Enter Theatre Place"
          onChange={(e) => {
            setNewTheatre({ ...newTheatre, tplace: e.target.value });
          }}
        />
        <br />
        <button>Add Theatre</button>
      </form>
    </div>
  );
}

export default AddTheatre;
