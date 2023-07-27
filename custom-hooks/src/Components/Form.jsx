import React, { useReducer } from "react";
import { useMyUseReducer } from "../hooks/myUseReducer";

const initialState = {
  username: "",
  password: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "USERNAME":
      return { ...state, username: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    default:
      return state;
  }
};

export const Form = () => {
  //   const [data, dispatch] = useReducer(reducer, initialState);

  const [data, dispatch] = useMyUseReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "USERNAME", payload: e.target.value })
          }
          type="text"
          placeholder="UserName"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "PASSWORD", payload: e.target.value })
          }
          type="text"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
