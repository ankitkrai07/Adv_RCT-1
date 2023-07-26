import React, { useRef } from "react";

export const Counter3 = () => {
  const ref = useRef(0);

  const handleAdd = () => {};

  const handleReduce = () => {};

  return (
    <div>
      <h1>Counter:{ref.current}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};
