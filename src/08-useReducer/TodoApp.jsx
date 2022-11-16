import { useTodo } from "../hooks/useTodo";
import { FormAdd } from "./FormAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const {
    deleteTodo,
    handleTodo,
    onToggleTodo,
    todos,
    todoCount,
    todoPendingCount,
  } = useTodo();

  return (
    <>
      <h1>TodoApp {todoCount}</h1>
      <p>pending: {todoPendingCount}</p>
      <hr />
      <div>
        <FormAdd handleTodo={handleTodo} />
      </div>
      <div>
        <h4>All Todos</h4>
        <hr />
        <TodoList
          onToggleTodo={onToggleTodo}
          deleteTodo={deleteTodo}
          todos={todos}
        />
      </div>
    </>
  );
};
