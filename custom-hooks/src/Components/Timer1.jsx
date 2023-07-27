import React, { useEffect, useState } from "react";

export const Timer1 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  });

  return <div>{show && <h1>This is Timer-1</h1>}</div>;
};
