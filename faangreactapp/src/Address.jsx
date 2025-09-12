import React from "react";

var Address = React.forwardRef(function (props, refs) {
  return (
    <div className="border border-3 p-2 m-2 border-primary">
      <h1>Address</h1>
      <input type="text" ref={refs} />
    </div>
  );
});

export default Address;
