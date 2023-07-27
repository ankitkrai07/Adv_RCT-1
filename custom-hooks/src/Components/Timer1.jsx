import React, { useEffect, useState } from "react";
import { useTimer } from "../hooks/useTimer";

export const Timer1 = () => {
  const show = useTimer(4000);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setShow(true);
  //     }, 3000);
  //   });

  return <div>{show && <h1>This is Timer-1</h1>}</div>;
};
