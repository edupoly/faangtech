import React, { useState } from "react";
import { useGetAllTheatresQuery } from "../../services/theatres";
import { useParams } from "react-router-dom";
import { useAddMovieToTheatresMutation } from "../../services/movieTheatres";

function AddMovieToTheatres() {
  var { mid } = useParams();
  var { isLoading, data } = useGetAllTheatresQuery();
  var [addMovieTheatresFn] = useAddMovieToTheatresMutation();
  var [movieTheatres, setMovieThreatres] = useState({
    movieId: mid,
    theatres: [],
  });
  function handleTheatre(ev) {
    console.log(ev);
    if (ev.target.checked) {
      setMovieThreatres({
        ...movieTheatres,
        theatres: [...movieTheatres.theatres, ev.target.value],
      });
    } else {
      setMovieThreatres((currentTheatres) => {
        var temp = { ...currentTheatres };
        temp.theatres = temp.theatres.filter((th) => {
          if (th === ev.target.value) {
            return false;
          } else {
            return true;
          }
        });
        return { ...temp };
      });
    }
  }
  return (
    <div>
      <h1>AddMovieToTheatres</h1>
      {<p>{JSON.stringify(movieTheatres)}</p>}
      {isLoading && <h1>Loading...</h1>}
      <ul className="d-flex flex-wrap list-unstyled">
        {!isLoading &&
          data.map((th) => {
            return (
              <li
                className="p-2 m-2 border border-secondary"
                style={{ width: "200px" }}
              >
                <input
                  type="checkbox"
                  value={th.id}
                  onChange={(e) => {
                    handleTheatre(e);
                  }}
                />
                <b>{th.tname}</b>
                <img
                  className=" rounded"
                  style={{ height: "50px" }}
                  src={th.timage}
                  alt=""
                />
                <div>{th.tplace}</div>
              </li>
            );
          })}
      </ul>
      <button
        onClick={() => {
          addMovieTheatresFn(movieTheatres);
        }}
      >
        Add Movie To Theatres
      </button>
    </div>
  );
}

export default AddMovieToTheatres;
