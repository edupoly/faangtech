import "./App.css";
import Counter from "./Counter";

function App() {
  function naistam(ar) {
    alert("Naistam babu" + ar);
  }
  return (
    <div className="border border-3 border-info p-2 m-2">
      <h2>App</h2>
      <Counter iv={100} s={10} n={naistam}></Counter>
      <Counter iv={200} s={5} n={naistam}></Counter>
    </div>
  );
}

export default App;
