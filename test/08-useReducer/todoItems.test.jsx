import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItems } from "../../src/08-useReducer/TodoItems";

describe("Todo items test", () => {
  const todos = [
    {
      id: 1,
      description: "piedra",
      done: false,
    },
  ];

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el todo pendiente", () => {
    render(
      <TodoItems
        todos={todos}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodoMock={onDeleteTodoMock}
      />
    );
    expect(screen.getByText("piedra")).toBeTruthy();
    const liElement = screen.getByRole("listitem");
  });

  test("debe de mostrar el componente completado", () => {
    todos[0].done = true;
    render(
      <TodoItems
        todos={todos}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodoMock={onDeleteTodoMock}
      />
    );
  });

  test("span debe llamar el toggle con el click", () => {
    render(
      <TodoItems
        todos={todos}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodoMock={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todos[0].id);
  });

  test("span debe llamar el delete con el click", () => {
    render(
      <TodoItems
        todos={todos}
        onToggleTodo={onToggleTodoMock}
        deleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByLabelText("delete");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todos[0].id);
  });
});
