import { useState, useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";

export function SearchBox() {
  // -----------------------
  // 1️⃣ ESTADO
  // -----------------------
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [searching, setSearching] = useState(false);

  const isFirstRender = useRef(true);

  // -----------------------
  // 2️⃣ DEBOUNCE (decide CUÁNDO)
  // -----------------------
  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value.trim() === "") {
        setSearching(false);
        return;
      }

      setHistory((prev) => [...prev, value]);
      setSearching(false);
    }, 500),
    []
  );

  // -----------------------
  // 3️⃣ ACCIÓN DEL USUARIO
  // -----------------------
  const handleChange = (e) => {
    const newQuery = e.target.value;

    setQuery(newQuery);
    setSearching(true);
    debouncedSearch(newQuery);
  };

  // -----------------------
  // 4️⃣ EFECTO SECUNDARIO
  // -----------------------
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  // -----------------------
  // 5️⃣ RENDER
  // -----------------------
  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Ingrese su búsqueda aquí"
        onChange={handleChange}
      />

      {searching && <p>Buscando...</p>}

      <h2>Búsquedas recientes</h2>
      <ul>
        {history.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
}
