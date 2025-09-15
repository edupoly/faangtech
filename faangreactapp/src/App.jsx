import { Outlet } from "react-router-dom";
import "./App.css";
import OurProducts from "./OurProducts";
import OurServices from "./OurServices";
import Trainings from "./Trainings";

function App() {
  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h2>Hello Edupoly</h2>
      <div className="border border-5 p-2 m-2 border-danger">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
