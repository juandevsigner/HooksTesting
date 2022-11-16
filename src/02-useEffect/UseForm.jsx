import { useForm } from "../hooks/useForm";

export const UseForm = () => {
  const { onInputChange, username, password, email, onHandleReset, formState } =
    useForm({
      username: "",
      password: "",
      email: "",
    });

  return (
    <>
      <h1>Use Form</h1>
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
        value={password}
        placeholder="password aqui"
        name="password"
        type="password"
      />
      <button onClick={onHandleReset}>reset</button>
    </>
  );
};
