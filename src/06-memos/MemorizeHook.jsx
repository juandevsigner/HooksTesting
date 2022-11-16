import { useMemo, useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

const heavyStuff = (numberIteration = 100) => {
  for (let i = 0; i < numberIteration; i++) {
    console.log("hola pa...");
  }
  return `${numberIteration} iteracion hechas`;
};

export const MemorizeHook = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);
  const memorizeValue = useMemo(() => {
    heavyStuff(counter);
  }, [counter]);
  return (
    <>
      Counter: <Small counter={counter} />
      <hr />
      <h4>{memorizeValue}</h4>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => setShow(!show)}>
        Show-Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
