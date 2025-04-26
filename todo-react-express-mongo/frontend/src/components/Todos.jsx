import React from 'react'
import { useEffect } from 'react';
import { todosListState, filterAtom, filteredTodosState } from './store/atoms/todos';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

function Todos() {

    const [todos, setTodos] = useRecoilState(todosListState);

    useEffect(() => {
        
        fetch("http://localhost:3000/")
        .then(async function (res) {
          const json = await res.json();
          setTodos(json.todos);
        })
        .catch((error) => {
          console.log("error:", error);
        });
        
        console.log("HERERE", todos);
        
    }, [])

    async function toggle(todo) {
        try {
            const id = todo._id;
            const title = todo.title;
            const description = todo.description;
            const completed = todo.completed;

            const response = await fetch(`http://localhost:3000/`, {
                method: 'PUT', // Use PUT or PATCH for updates
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, title, description, completed: !completed })
            });
        }
        catch (error) {

        }
    }

    return (


        <div>

            {
                todos.map((todo) => {
                    return <div key={todo._id} id={todo._id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <h3>{todo.completed == true ? "Completed" : "Mark as complete"}</h3>
                        <button onClick={() => {
                            toggle(todo);
                        }}>Toggle</button>
                    </div>
                })}
        </div>
    )
}


export default Todos