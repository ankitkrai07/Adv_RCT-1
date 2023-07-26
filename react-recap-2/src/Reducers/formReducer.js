export const initialState = {
  name: "",
  course: "",
  batch: "",
  code: "",
};

export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return { ...state, name: payload };
    case "COURSE":
      return { ...state, course: payload };
    case "BATCH":
      return { ...state, batch: payload };
    case "CODE":
      return { ...state, code: payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
