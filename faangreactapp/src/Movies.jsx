import React from "react";
import movies from "./movies.json";
function Movies() {
  var [allmovies, setAllMovies] = React.useState(movies);
  function sortByYear() {
    movies.sort(function (a, b) {
      if (a.year > b.year) {
        return 1;
      } else {
        return -1;
      }
    });
    setAllMovies([...movies]);
    // setAllMovies(function (currentData) {
    //   currentData.sort(function (a, b) {
    //     if (a.year > b.year) {
    //       return 1;
    //     } else {
    //       return -1;
    //     }
    //   });
    //   return [...currentData];
    // });
  }
  return (
    <div class="border border-2 border-danger p-2 m-3">
      <h1>Movies</h1>
      <button
        onClick={() => {
          sortByYear();
        }}
      >
        Sort By Year
      </button>
      <ul class="d-flex flex-wrap list-unstyled">
        {allmovies.map(function (movie) {
          return (
            <li class="w-20">
              <b>
                {movie.title.slice(0, 20)}({movie.year})
              </b>
              <br />
              <img src={movie.imageUrl} class="w-75" alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Movies;
