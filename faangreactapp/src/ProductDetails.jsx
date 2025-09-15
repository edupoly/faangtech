import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  var { id } = useParams();
  var [productDetails, setProductDetails] = React.useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails({ ...data });
      });
  }, []);
  return (
    <div>
      <h1>ProductDetails</h1>
      <div className="d-flex flex-wrap ">
        <div>
          <img src={productDetails.thumbnail} alt="" />
        </div>
        <div>
          <h1>{productDetails.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
