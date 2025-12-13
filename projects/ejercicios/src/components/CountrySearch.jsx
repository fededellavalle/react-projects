import { useState, useEffect } from "react";

export function CountrySearch() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length === 0) {
      setCountries([]);
      return;
    }
    setLoading(true);

    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {
        setCountries([]);
        setLoading(false);
      });

    return () => {
      setCountries([]);
    };
  }, [query]);

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h2>Buscador de Paises</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe el nombre de un pais"
      />

      {loading === true && <p>Cargando...</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {countries.map((country) => (
          <li
            key={country.cca3}
            style={{
              margin: "10px 0",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <strong>{country.name.common}</strong> - Poblacion:{" "}
            {country.population.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
