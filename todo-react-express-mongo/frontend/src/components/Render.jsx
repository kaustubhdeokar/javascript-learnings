import React from "react";
import { useState } from "react";
function Render() {
    return (
        <div style={{ margin: "30px", padding: "10px" }}>
        <HeaderWithButton>My name is raman.</HeaderWithButton>
        <Header>My name is raghav.</Header>
        </div>
    );
}

function HeaderWithButton() {
    const [num, setNum] = useState(0);
    function setRandom() {
    setNum((prevValue) => Math.random(0, 1));
    }
    return (
    <>
        <button onClick={setRandom}>My name is {num}</button>
        <Header>
        <div>My name is also{num}</div>
        </Header>
    </>
    );
}

function Header(props) {
    return <div>{props.children}</div>;
}

export default Render;
