import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementCount = useCallback(values => {
    setCounter(c => c + values);
  }, []);

  return (
    <>
      <h1>CallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementCount} />
    </>
  );
};
