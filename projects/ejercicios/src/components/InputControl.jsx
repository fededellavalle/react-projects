import { useState } from "react";

export function InputControl() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Escrito: {text}</p>
    </div>
  );
}
