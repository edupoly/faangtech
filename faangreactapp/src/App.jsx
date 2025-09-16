import { Link, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import OurProducts from "./OurProducts";
import OurServices from "./OurServices";
import Trainings from "./Trainings";

function App() {
  let navigate = useNavigate();
  function abc() {
    navigate("/services");
  }
  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h2>Hello Edupoly</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          gap: "10px",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/trainings">Trainings</Link>
        </li>
        <li>
          <Link to="/ecom">Ecommerce</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <button
            onClick={() => {
              abc();
            }}
          >
            Login
          </button>
        </li>
      </ul>
      <div className="border border-5 p-2 m-2 border-danger">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
