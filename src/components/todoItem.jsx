import React from "react";

export function TodoItem({ todo }) {
  const { id, nombre, completed } = todo;
  return <li>{ nombre }</li>;
}
