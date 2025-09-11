import { useState } from "react";
import A from "./A";
import { MyContext } from "./MyContext";
import E from "./E";
function App() {
  const [x] = useState({
    username: "Praveen",
    age: 42,
  });
  return (
    <>
      <MyContext.Provider value={x}>
        <div className="border border-2 border-info p-3 m-3 rounded">
          <h2>Hello Edupoly:{x.username}</h2>
          <A></A>
        </div>
      </MyContext.Provider>
      <MyContext.Provider value={"na istam"}>
        <E></E>
      </MyContext.Provider>
    </>
  );
}

export default App;
