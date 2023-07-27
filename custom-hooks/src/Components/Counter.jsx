import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
