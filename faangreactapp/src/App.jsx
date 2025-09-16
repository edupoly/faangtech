import "./App.css";
import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h2>Hello Edupoly</h2>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
