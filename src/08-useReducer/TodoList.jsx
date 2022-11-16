import React from "react";
import { TodoItems } from "./TodoItems";

export const TodoList = ({ todos, deleteTodo, onToggleTodo }) => {
  return (
    <ul>
      <TodoItems
        onToggleTodo={onToggleTodo}
        deleteTodo={deleteTodo}
        todos={todos}
      />
    </ul>
  );
};
