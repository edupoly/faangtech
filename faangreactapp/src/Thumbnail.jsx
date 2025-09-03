import React from "react";

function Thumbnail() {
  return (
    <div style={{ width: "30%" }} className="bg-white border border-secondary">
      <div
        className="w-100 bg-secondary d-flex justify-content-center align-items-center text-light"
        style={{ height: "200px" }}
      >
        Thumbnail
      </div>
      <div className="p-3">
        <p>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <div className="d-flex justify-content-between">
          <div>
            <button>View</button>
            <button>Edit</button>
          </div>
          <span>9 min</span>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
