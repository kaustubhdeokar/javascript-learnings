import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import Render from "./components/Render";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/")
    .then(async function(res){
      const json = await res.json();
      console.log(json.todos);
      setTodos(todos => json.todos);
    })
    .catch((error)=>{
      console.log("error:", error);
    });
  },[])
  

  return (
    <>
      <div>
        <Render></Render>
      </div>
    </>
  );
}

export default App;
