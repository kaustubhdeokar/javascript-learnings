import React, { useState } from "react";

function CreateTodo() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function addTodo(){
        await fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description })
        })
    }

    return (
    <div>
        <input type="text" placeholder="title" onChange={function(e){
            const val = e.target.value;
            setTitle(val);
        }}/>
        <br />
        <input type="text" placeholder="description" onChange={function(e){
            const val = e.target.value;
            setDescription(val);
        }}/>
        <br />
        <button onClick={addTodo}>Add a todo</button>
    </div>
    );
}

export default CreateTodo;
