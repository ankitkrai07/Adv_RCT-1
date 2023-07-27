export const timerlogic = () => {
  let show = true;
  setTimeout(() => {
    show = false;
  }, 3000);

  return show;
};
