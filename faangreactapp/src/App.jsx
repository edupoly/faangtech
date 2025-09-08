import { useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import Products from "./Products";

function App() {
  useEffect(() => {
    console.log("App :: Hello useEffect with no dep array");
  });
  useEffect(() => {
    console.log("App :: Hello useEffect with empty dep array");
  }, []);
  return (
    <div className="border border-2 border-danger p-2 m-2">
      <h2>Hello Edupoly</h2>
      <Products></Products>
      <Counter></Counter>
    </div>
  );
}

export default App;
