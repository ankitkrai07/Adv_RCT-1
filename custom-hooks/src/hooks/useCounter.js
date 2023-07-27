import { useState } from "react";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState);

  const handleAdd = (payload) => {
    setCount((prev) => prev + payload);
  };

  const handleReduce = (payload) => {
    setCount((prev) => prev - payload);
  };

  return [count, handleAdd, handleReduce];
};
