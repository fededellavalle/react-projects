import { useRef } from "react";

export function PracticaUseRef() {
  const valor = useRef();

  const handleSelectText = () => {
    if (!valor.current) return;
    valor.current.focus();
    valor.current.select();
  };

  const showTextConsole = () => {
    if (!valor.current) return;
    console.log("El valor es: " + valor.current.value);
  };

  return (
    <>
      <input type="text" ref={valor} placeholder="Aca va el texto..." />
      <button onClick={handleSelectText}>Seleccinar texto</button>
      <button onClick={showTextConsole}>Mostra valor en consola</button>
    </>
  );
}
