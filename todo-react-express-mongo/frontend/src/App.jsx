import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import Render from "./components/Render";

import Wrapper from "./components/Wrapper";

function App() {
  const [todos, setTodos] = useState([]);
  const [timer, setTimer] = useState(0);


useEffect(()=> {

  setInterval(()=>{
    fetch("http://localhost:3000/")
    .then(async function(res){
      const json = await res.json();
      console.log(json.todos);
      setTodos(todos => json.todos);
    })
    .catch((error)=>{
      console.log("error:", error);
    });
  },10000);

  //use async effect.

  },[])

  
  return (
    <>
      <div>
        {/* <Todos todos={todos}></Todos> */}
        <Wrapper></Wrapper>
      </div>
    </>
  );
}

export default App;
