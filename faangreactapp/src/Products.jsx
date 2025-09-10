import React, { useEffect } from "react";
import Product from "./Product";
function Products() {
  var [products, setProducts] = React.useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts([...data.products]));
  }, []);
  return (
    <div className="border border-5 border-danger m-2 p-2">
      <h1>Products</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((pr) => {
          return <Product pr={pr}></Product>;
        })}
      </ul>
    </div>
  );
}

export default Products;
