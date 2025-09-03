import React from "react";

function Header() {
  return (
    <div className="w-50 p-5 text-center mx-auto ">
      <div className="fs-1">Album example </div>
      <p className="fs-5 text-secondary">
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks don’t
        simply skip over it entirely.
      </p>
      <button className="btn btn-primary mx-2">Main Call To Action</button>
      <button className="btn btn-secondary">Secondary Action</button>
    </div>
  );
}

export default Header;
