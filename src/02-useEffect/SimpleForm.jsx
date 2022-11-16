import { useState, useEffect, useMemo } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "juanda",
    email: "email@email.com",
  });

  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {}, [formState]);

  return (
    <>
      <h1>Form</h1>
      <hr />
      <input
        onChange={onInputChange}
        value={username}
        placeholder="username"
        name="username"
        type="text"
      />
      <input
        onChange={onInputChange}
        value={email}
        placeholder="email@email.com"
        name="email"
        type="email"
      />
      <input
        onChange={onInputChange}
        value={email}
        placeholder="password aqui"
        name="password"
        type="password"
      />
    </>
  );
};
