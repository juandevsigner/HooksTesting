import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counter, increment, decrement, reset } = useCounter(5);
  return (
    <>
      <h1>Counter Hook: {counter}</h1>
      <hr />
      <button onClick={() => increment(10)}>+10</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
