import React from "react";
import { TodoItem } from "./todoItem";

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}
