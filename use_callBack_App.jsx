import { useState, memo } from 'react'
function App() {

  const [val, setVal] = useState(10);
  const [counter, setCounter] = useState(0);
  function someFunc(a){
    return val*a;    
  }

  function setVals(){
      setVal(Math.random()*2);
  }
  return <div>
    <h1>Hello</h1>
    <p>
    <button onClick={setVals}>Function render</button>
    </p>
    <p>
    <button onClick={()=>setCounter(counter+1)}>Function won't re-render as memo is used.{counter}</button>
    </p>
    <Block func={someFunc(2)}></Block>
  </div>
}

const Block = memo(function({func}){
  console.log("function should render");
  return (<div>
      Hello - {func}
    </div>)
})

export default App;
