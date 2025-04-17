import { useState } from 'react'
import { useMemo } from 'react';
function App() {
  const[num, setNum] = useState(0);
  return (
    <>
      <input type='number' value={num} onChange={(e)=>setNum(e.target.value)}/>
      <Todo inputVal={num}></Todo>
    </>
  )
} 

function Todo({inputVal}){

  const[counter, setCounter] = useState(0);

  let count = useMemo(() => {
    console.log("recounter");
    let count = 0;
    for(let i=1;i<=inputVal;i++){
      count += i;
    }
    return count;
  }, [inputVal]);

  return (<div>
      <p>
      {count}
      </p>
      <p>
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
      </p>
  </div>)
}

export default App
