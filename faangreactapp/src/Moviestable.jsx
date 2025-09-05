import React, { useState } from "react";
import movies from "./movies.json";
function Moviestable() {
  var [allmovies, setAllmovies] = useState(movies);
  let [perPage, setPerPage] = useState(10);
  function sortByKey(k) {
    var temp = [...allmovies];
    temp.sort(function (a, b) {
      if (a[k] > b[k]) {
        return 1;
      } else {
        return -1;
      }
    });
    setAllmovies([...temp]);
  }
  return (
    <div class="border border-2 border-danger p-2 m-3">
      <label htmlFor="">Per Page</label>
      <select
        name=""
        id=""
        onChange={(e) => {
          setPerPage(e.target.value);
        }}
      >
        <option value="5">5</option>
        <option value="10" selected>
          10
        </option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <br />
      <button>Prev</button>
      <button>Next</button>
      <table className="table table-striped table-bordered  m-5 w-100">
        <thead>
          <tr>
            <th>Image</th>
            <th
              onClick={() => {
                sortByKey("title");
              }}
            >
              Title
            </th>
            <th
              onClick={() => {
                sortByKey("year");
              }}
            >
              Year
            </th>
            <th>Genre</th>
            <th
              onClick={() => {
                sortByKey("director");
              }}
            >
              Director
            </th>
            <th>Plot</th>
          </tr>
        </thead>
        <tbody>
          {allmovies.slice(0, perPage).map((movie) => {
            return (
              <tr>
                <td>
                  <img src={movie.imageUrl} width="50px" alt="" />
                </td>
                <td>{movie.title.slice(0, 10)}</td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>{movie.director}</td>
                <td>{movie.plot.slice(0, 20)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Moviestable;
// {
//     "id": 19,
//     "title": "The Lion King",
//     "year": 1994,
//     "genre": ["Animation", "Adventure", "Drama"],
//     "director": "Roger Allers, Rob Minkoff",
//     "plot": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
//     "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NDI@._V1_SX300.jpg"
//   },
