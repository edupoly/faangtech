import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Ecom() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts([...data.products]));
  }, []);
  return (
    <div>
      <h1>Ecommerce</h1>

      <ul class="d-flex flex-wrap list-unstyled text-center justify-content-between">
        {products?.map((pr) => {
          return (
            <li>
              <Link to={`/productDetails/${pr.id}`}>
                <img src={pr.thumbnail} style={{ width: "250px" }} alt="" />
                <h6>{pr.title}</h6>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Ecom;
