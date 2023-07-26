import React, { useEffect, useRef } from "react";

export const FormRef = () => {
  const inputRef = useRef([]);

  console.log(inputRef);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={(e) => {
          inputRef.current[0] = e;
        }}
      />

      <input
        type="text"
        ref={(e) => {
          inputRef.current[1] = e;
        }}
      />
    </div>
  );
};
