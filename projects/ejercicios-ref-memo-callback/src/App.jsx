import "./App.css";
import { PracticaUseCallback } from "./components/PracticaUseCallback";
import { PracticaUseMemo } from "./components/PracticaUseMemo";
import { PracticaUseRef } from "./components/PracticaUseRef";

function App() {
  return (
    <>
      <h1>Ejercicios para useRef, useMemo, useCallback</h1>
      <PracticaUseRef />
      <PracticaUseMemo />
      <PracticaUseCallback />
    </>
  );
}

export default App;
