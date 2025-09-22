import React from "react";
import { useGetTheatreByIdQuery } from "../../services/theatres";

function SmallTheatre(props) {
  var { isLoading, data } = useGetTheatreByIdQuery(props.theatreId);
  console.log(isLoading);
  console.log(data);
  return (
    <div>
      {!isLoading && (
        <div>
          <b>{data.tname}</b>
        </div>
      )}
    </div>
  );
}

export default SmallTheatre;
