import React from "react"
import { TodoList } from "./components/todoList"
import { useState } from "react"

export function App() {

    const [todos, setTodos] = useState([
        {id:1, nombre: "aprender react", complete: false},
        {id:2, nombre: "aprender graphql", complete: false},
        {id:3, nombre: "aprender redis", complete: false},
    ])
    return <React.Fragment>
    <TodoList todos={todos} />
    <input type="text" placeholder="Nueva tarea" />
    <button>➕</button>
    <button>🗑️</button>
    </React.Fragment>
}