import React from "react";

export const ClickonMe = () => {
  const handleClick = () => {
    console.log("Network Request Made...");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
