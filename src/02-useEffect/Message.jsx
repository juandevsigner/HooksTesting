import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const mouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <>
      <h3>Usuario ya Existe</h3>
    </>
  );
};
