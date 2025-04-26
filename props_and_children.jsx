import React from "react";

function Welcome({ props, children }) {

    const childStyle = {
        border: '2px solid red',
        padding: '10px',
        margin: '5px',
        display: 'block'
    };

    return (
        <div>
            <h1>Hello, {props.name}</h1>
            {React.Children.map(children, (child) => (
                <>
                    <div style={childStyle}>
                        {child}
                        <small>Fuck you</small>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Welcome;