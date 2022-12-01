import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("Todo App Test", () => {
  useTodo.mockReturnValue({
    deleteTodo: jest.fn(),
    handleTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    todos: [
      { id: 1, description: "demo1", done: false },
      { id: 2, description: "demo2", done: false },
      { id: 3, description: "demo3", done: true },
    ],
    todoCount: 3,
    todoPendingCount: 2,
  });
  test("mostrar el componente correctamente", () => {
    const componenteApp = render(<TodoApp />);
    expect(componenteApp.container).toMatchSnapshot();
    expect(screen.getByText("demo1")).toBeTruthy();
    expect(screen.getByText("demo2")).toBeTruthy();
    expect(screen.getByText("✅demo3")).toBeTruthy();
  });
});
