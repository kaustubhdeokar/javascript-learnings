import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{
    id:1,
    title:"todo1",
    description:"go to gym"
  },{
    id:2,
    title:"todo2",
    description: "study"
  }
  ]);

  function addTodo(){
    let len = todos.length;
    setTodos((todos) => ([...todos, {
      id: len+1,
      title:"todo"+ (len+1),
      description: "description" + (len+1)
    }]));
  }

  return (
    <>

      <Counter count={todos.length}></Counter>
      <div>
        {
          todos.map(
            (todo)=> 
              <p key={todo.id}> 
                {todo.title} : {todo.description} 
              </p>
          )
        }
      </div>
      <button onClick={addTodo}></button>
      <CustomButton/>
    </>
  );
}

function CustomButton(){
  console.log("Custom button");
  return <button>custom</button>
}

// we can call this state function passing any values, or state variables. (declared by useState hook)
// this is a state function, 
function Counter(props) {
  function increment() {
    props.setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>{props.count}</button>
    </div>
  );
}

export default App;
