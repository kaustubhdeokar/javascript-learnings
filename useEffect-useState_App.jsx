import { useState } from 'react'
import { useEffect } from 'react';
function App() {
  const[num, setNum] = useState(0);
  function setNumFunc(num1){
    setNum(num1);
  }
  return (
    <>
      <button onClick={()=>setNum("67fb5b77eb897da7c16d7f2b")}>1</button>
      <button onClick={()=>setNum("67fb9e1cf97503e1b2fb7dff")}>2</button>
      <button onClick={()=>setNum("67fb5b24eb897da7c16d7f29")}>3</button>
      <Todo id={num}></Todo>
    </>
  )
}

function Todo({id}){

  const [todos, setTodos] = useState({})

  async function logRes(data) {
    let result = await data.json();
    // console.log("result:", result.todos);
    return result.todos;
  }

  useEffect(() => {
    const idStr = String(id);
    fetch(`http://localhost:3000/${idStr}`)
      .then((data) => logRes(data))
      .then((todo)=> {console.log(todo); setTodos(todo)})
      .catch((error) => console.log(error));
  }, [id]);


  return (<div>
    hello
      <p>
      {todos.title}
      </p>
      <p>
        {todos.description}
      </p>
  </div>)
}

export default App
