import { memo } from "react";

export const Small = memo(({ counter }) => {
  console.log("Render Pa");
  return <small>{counter}</small>;
});
