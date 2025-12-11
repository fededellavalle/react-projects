import { useState } from "react";
import "./calculator.css";

export function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => setInput("");

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
      setTimeout(() => setInput(""), 1200);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>

      <div className="buttons">
        <button className="ac" onClick={handleClear}>
          AC
        </button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>

        {[7, 8, 9].map((n) => (
          <button key={n} onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
        <button onClick={() => handleClick("-")}>-</button>

        {[4, 5, 6].map((n) => (
          <button key={n} onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
        <button onClick={() => handleClick("+")}>+</button>

        {[1, 2, 3].map((n) => (
          <button key={n} onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
        <button className="equal" onClick={handleEqual}>
          =
        </button>

        <button className="zero" onClick={() => handleClick(0)}>
          0
        </button>
        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
}
