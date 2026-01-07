import React from "react";

export const BotonIncrementar = React.memo(function BotonIncrementar({
  incrementar,
}) {
  console.log("Render BotonIncrementar");

  return <button onClick={incrementar}>Incrementar</button>;
});
