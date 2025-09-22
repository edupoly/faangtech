import React from "react";
import { useGetAllTheatresQuery } from "../../services/theatres";

function Theatres() {
  var { isLoading, data } = useGetAllTheatresQuery();
  return (
    <div>
      <h1>Theatres:</h1>
      {isLoading && <h1>Loading...</h1>}
      <ul className="d-flex flex-wrap justify-content-evenly list-unstyled">
        {!isLoading &&
          data.map((th) => {
            return (
              <li className="w-25 p-2 m-2 border border-secondary">
                <h4>{th.tname}</h4>
                <img
                  className="w-100 rounded"
                  style={{ height: "150px" }}
                  src={th.timage}
                  alt=""
                />
                <i>{th.tplace}</i>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Theatres;
