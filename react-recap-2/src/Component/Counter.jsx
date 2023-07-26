import React, { useState } from "react";

function value() {
  return 20;
}

export const Counter = ({ param = "even" }) => {
  // const state = useState(value);
  const state = useState(() => {
    if (param === "even") {
      return 0;
    } else {
      return 1;
    }
  });

  const count = state[0];
  const SetCount = state[1];

  const handleAdd = () => {
    // SetCount(prev) => prev + 1);
    state[1]((prev) => prev + 1);
  };
  const handleReduce = () => {
    // SetCount((prev) => prev - 1);
    state[1]((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter:{state[0]}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};
