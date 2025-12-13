import { useState } from "react";

export function ToggleText() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Ocultar" : "Mostrar"} Texto
      </button>

      {show && <p>Este texto muestra que funciona correctamente</p>}
    </div>
  );
}
