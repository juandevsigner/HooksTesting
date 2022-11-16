import React, { useCallback, useMemo } from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";

export const Padre = () => {
  const [valor, setValor] = useState(0);
  /* const numeros = useMemo(() => [2, 4, 6, 8, 10], [valor]); */
  const numeros = [2, 4, 6, 8, 10];

  const incrementar = useCallback(num => {
    setValor(c => c + num);
  }, []);
  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map(n => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
