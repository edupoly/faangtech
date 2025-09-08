import React, { useEffect, useState } from "react";

function Products() {
  let [allproducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data.products);
      });
  }, []);

  return (
    <div className="border border-2 border-info p-2 m-2">
      <h1>Products</h1>
      <ul>
        {allproducts?.map((prod) => {
          return <li>{prod.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
