import React, { useReducer } from "react";
import { formReducer, initialState } from "../Reducers/formReducer";

export const Form = () => {
  const [data, dispatch] = useReducer(formReducer, initialState);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={handleSumbit} action="">
      <input
        value={data.name}
        onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })}
        type="text"
        placeholder="name"
      />
      <input
        value={data.batch}
        onChange={(e) => dispatch({ type: "BATCH", payload: e.target.value })}
        type="text"
        placeholder="batch"
      />
      <input
        value={data.code}
        onChange={(e) => dispatch({ type: "CODE", payload: e.target.value })}
        type="text"
        placeholder="student code"
      />
      <input
        value={data.course}
        onChange={(e) => dispatch({ type: "COURSE", payload: e.target.value })}
        type="text"
        placeholder="Course"
      />
      <button>Submit</button>
    </form>
  );
};
