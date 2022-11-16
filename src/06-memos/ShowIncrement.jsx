import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Render Pa");
  return <button onClick={() => increment(5)}>Increment</button>;
});
