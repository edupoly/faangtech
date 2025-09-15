import React, { useEffect } from "react";

function ChildComp() {
  useEffect(() => {
    console.log("Child re-rendered");
  });

  return (
    <div className="border border-2 p-2 m-2 border-primary">
      <h2>ChildComp Nenenduku</h2>
    </div>
  );
}

export default React.memo(ChildComp);
