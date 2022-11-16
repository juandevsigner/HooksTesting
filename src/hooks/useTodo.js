import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReduce";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};


export const useTodo =() =>{

const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

const handleTodo = todo => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const deleteTodo = id => {
    const action = {
      type: "Delete Todo",
      payload: id,
    };
    dispatch(action);
  };

  const onToggleTodo = id => {
    const action = {
      type: "Toggle Todo",
      payload: id,
    };
    dispatch(action);
  };

  const todoCount = todos.length
  const todoPendingCount = todos.filter(todo => !todo.done).length

    return{
        todos, handleTodo, deleteTodo, onToggleTodo, todoCount, todoPendingCount
    }
}