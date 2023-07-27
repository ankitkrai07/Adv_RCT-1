import { useEffect, useState } from "react";

export const useTimer = (delay) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay);
  });
  return show;
};
