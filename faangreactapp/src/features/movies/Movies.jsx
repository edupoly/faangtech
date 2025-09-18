import React from "react";
import { useGetAllMoviesQuery } from "../../services/movies";
import { Link } from "react-router-dom";

function Movies() {
  var { isLoading, data } = useGetAllMoviesQuery();
  console.log(data);
  return (
    <div className="border border-4 p-2 m-2 border-danger">
      <h1>Movies {isLoading && "Loading..."}</h1>
      <ul>
        {!isLoading &&
          data.map((movie) => {
            return (
              <li>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Movies;
