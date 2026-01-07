import { useMemo, useState } from "react";

const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function optimizarNumeroPares(numeros) {
  console.log("Calculando números pares...");
  return numeros.filter((num) => num % 2 === 0);
}

export function PracticaUseMemo() {
  const [mostrarPares, setMostrarPares] = useState(false);

  const numerosPares = useMemo(() => {
    return optimizarNumeroPares(numeros);
  }, [numeros]);

  return (
    <>
      <h2>useMemo</h2>

      <p>Números: {numeros.join(", ")}</p>

      <button onClick={() => setMostrarPares(!mostrarPares)}>
        {mostrarPares ? "Ocultar pares" : "Mostrar pares"}
      </button>

      {mostrarPares && <p>Números pares: {numerosPares.join(", ")}</p>}
    </>
  );
}
