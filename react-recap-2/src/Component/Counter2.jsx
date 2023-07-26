import React, { useReducer, useState } from "react";

const reducer = (state, { type, payload }) => {
  //   console.log(a);
  //   console.log(b);
  //   return 11;
  //   if (b === "ADD") {
  //     return { ...a, counter: a.counter + 1 };
  //   } else if (b === "REDUCE") {
  //     return { ...a, counter: a.counter - 1 };
  //   } else {
  //     return a;
  //   }
  //   switch (action) {
  //     case "ADD":
  //       return { ...state, counter: state.counter + action[1] };
  //     case "REDUCE":
  //       return { ...state, counter: state.counter - action[1] };
  //     default:
  //       return state;
  //   }

  switch (type) {
    case "ADD":
      return { ...state, counter: state.counter + payload };
    case "REDUCE":
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};

const initialState = {
  counter: 0,
};

export const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    //   dispatch(["ADD", 2]);
    dispatch({ type: "ADD", payload: 1 });
  };
  const handleReduce = () => {
    // dispatch(["REDUCE", 3]);
    dispatch({ type: "REDUCE", payload: 1 });
  };

  return (
    <div>
      <h1>Counter:{state.counter}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};
