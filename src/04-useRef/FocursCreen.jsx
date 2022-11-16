import React, { useRef } from "react";

export const FocursCreen = () => {
  const inputRef = useRef();

  const inputClick = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        style={{ marginTop: 10 }}
        type="text"
        placeholder="ingrese su nombre"
      />
      <button onClick={inputClick}>Set Focus</button>
    </>
  );
};
