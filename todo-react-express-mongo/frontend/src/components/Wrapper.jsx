import React, { useEffect } from 'react'

function Wrapper() {

  useEffect(()=>{
    console.log("some logic");
  },[])
  
  return (
    <CardWrapper>
      <TextComp></TextComp>
    </CardWrapper>
  )
}


function TextComp(){
    return <div><p>Text1</p><p>Text2</p></div>
}

function CardWrapper({children}){
    return <div style={{border:'2px solid black'}}>
        <p>Heading</p>
        {children}
        <p>Footer</p>
    </div>
}   

export default Wrapper