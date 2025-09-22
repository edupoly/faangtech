import React from "react";
import { useGetMovieByIdQuery } from "../../services/movies";
import { useParams } from "react-router-dom";
import { useGetMovieTheatresByMovieIdQuery } from "../../services/movieTheatres";
import SmallTheatre from "../theatres/SmallTheatre";

function MovieDetails() {
  var { id } = useParams();
  var { isLoading, data } = useGetMovieByIdQuery(id);
  var { isLoading: isTheatresLoading, data: movieTheatres } =
    useGetMovieTheatresByMovieIdQuery(id);
  console.log(isTheatresLoading);
  console.log(movieTheatres);
  return (
    <div>
      <h1>MovieDetails</h1>
      {isLoading && <b>Loading...</b>}
      {!isLoading && (
        <div className="d-flex">
          <div>
            <h1>{data.title}</h1>
            <img src={data.imageUrl} alt="" />
          </div>
          <div>
            {isTheatresLoading && <b>Theatres Loading..</b>}
            {!isTheatresLoading &&
              movieTheatres[0].theatres.map((theatre) => {
                return <SmallTheatre theatreId={theatre}></SmallTheatre>;
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
