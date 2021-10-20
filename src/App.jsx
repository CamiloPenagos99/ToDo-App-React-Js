import React, { useRef } from "react"
import { TodoList } from "./components/todoList"
import { useState } from "react"

export function App() {

    const [todos, setTodos] = useState([
        {id:1, nombre: "aprender react", complete: false},
        {id:2, nombre: "aprender graphql", complete: false},
        {id:3, nombre: "aprender redis", complete: false},
    ])

    const todoTaskRef = useRef();
    const hadleTodoAdd = () =>{
        const task = todoTaskRef.current.value;
        if(task === '') return;

        setTodos((prev)=>{
            const id= Date.now();
            return [...prev, { id , nombre: task, complete: false}]
        })
        todoTaskRef.current.value = null;
    }
    return <React.Fragment>
    <TodoList todos={todos} />
    <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
    <button onClick={ hadleTodoAdd }>✅</button>
    <button>🗑️</button>
    </React.Fragment>
}