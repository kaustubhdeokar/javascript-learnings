import React from 'react'
import { useState } from 'react';

function RenderAll() {
    const [num, setNum] = useState(0);
    function setRandom(){
        setNum((prevValue)=> Math.random(0,1));
    }
    return (
        <div style={{padding:'10px'}}>
            <button onClick={setRandom}>Click to change title.</button>
            <Header>
            <div>My name is also{num}</div>
            </Header>
            <Header title="asdas">
            <div>My</div>
            </Header>
            <Header title="asdas">
            <div>My</div>
            </Header>
            <Header title="asdas">
            <div>My</div>
            </Header>
        </div>
    )
}

const Header = React.memo(function Header({title}) {
    return <div>{title}</div>;
});

export default RenderAll;