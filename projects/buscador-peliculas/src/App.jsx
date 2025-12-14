import { useRef, useCallback, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const inputRef = useRef();
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };
  /* Otra forma de hacerlo pero que sea mas de JS
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = new window.FormData(event.target);
    const value = fields.get("query")
    console.log(value);
  };

  Otra forma de hacerlo pero recuperando mas inputs, lo transforma en un objeto entonces podes acceder a esos inputs sin tener que crear muchas referencias usando el useRef
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new window.FormData(event.target));
    console.log(fields);
  };*/

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    []
  );

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{ border: error ? "1px solid red" : "1px solid black" }}
            name="query"
            ref={inputRef}
            type="text"
            placeholder="Avengers, Star Wars"
            value={search}
            onChange={handleChange}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
