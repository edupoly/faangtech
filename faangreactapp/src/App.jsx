import "./App.css";
import Counter from "./counter/Counter";
import Todolist from "./Todolist";
function App() {
  return (
    <div className="border border-2 border-danger p-2 m-2">
      <h2>Hello Edupoly</h2>
      <Todolist></Todolist>
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
// display the data
// state,action,//useReducer(reducer)//to maintain the state and actions
// UI and triggeting actions inside component
