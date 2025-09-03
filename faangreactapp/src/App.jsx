import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="border border-3 border-info p-2 m-2">
      <h2>App</h2>
      <Counter iv={100}></Counter>
      <Counter iv={200}></Counter>
    </div>
  );
}

export default App;
