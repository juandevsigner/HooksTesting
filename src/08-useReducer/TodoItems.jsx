import React from "react";

export const TodoItems = ({ todos, deleteTodo, onToggleTodo }) => {
  return (
    <>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            onClick={() => onToggleTodo(todo.id)}
            style={{ display: "block" }}
            aria-label="span"
          >
            {todo.done ? "✅" : null}
            {todo.description}
          </span>
          <button aria-label="delete" onClick={() => deleteTodo(todo.id)}>
            Delete Todo
          </button>
        </li>
      ))}
    </>
  );
};
