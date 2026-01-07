import { useState, useCallback } from "react";
import { BotonIncrementar } from "./BotonIncrementar";

export function PracticaUseCallback() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2>useCallback</h2>

      <p>Contador: {contador}</p>

      <BotonIncrementar incrementar={incrementar} />

      <hr />

      <input
        type="text"
        placeholder="Escribí algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
    </>
  );
}
