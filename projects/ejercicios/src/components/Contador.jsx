import { useState } from "react";

export function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <button onClick={() => setCount(0)}>Reiniciar</button>
    </div>
  );
}
