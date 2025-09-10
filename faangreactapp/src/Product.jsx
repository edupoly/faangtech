import React from "react";

function Product(props) {
  return (
    <div>
      <li className="border border-3 border-info m-2 p-2">
        <img src={props.pr.thumbnail} alt="" />
        <h4>{props.pr.title}</h4>
      </li>
    </div>
  );
}

export default Product;
