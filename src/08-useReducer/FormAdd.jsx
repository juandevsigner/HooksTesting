import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormAdd = ({ handleTodo }) => {
  const { description, onInputChange, onHandleReset } = useForm({
    description: "",
  });

  const onSubmit = e => {
    e.preventDefault();

    if (description === "") return;

    const todo = {
      id: new Date().getTime() * 5,
      description,
      done: false,
    };

    handleTodo(todo);
    onHandleReset();
  };

  return (
    <form>
      <input
        onChange={onInputChange}
        value={description}
        name="description"
        type="text"
        placeholder="add todo here!"
      />
      <button onClick={onSubmit} type="submit">
        Add TODO{" "}
      </button>
    </form>
  );
};
