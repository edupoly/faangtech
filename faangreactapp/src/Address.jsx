import React from "react";

var Address = React.forwardRef(function (props, refs) {
  function checkEnter4(e) {
    if (e.key === "Enter") {
      refs[1].current.focus();
    }
  }
  return (
    <div className="border border-3 p-2 m-2 border-primary">
      <h1>Address</h1>
      <input
        type="text"
        ref={refs[0]}
        onKeyUp={(ev) => {
          checkEnter4(ev);
        }}
      />
    </div>
  );
});

export default Address;
