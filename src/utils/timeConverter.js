export const convertTime = (min) => {
  const hour = min / 60;
  const rhour = Math.trunc(hour);
  const mins = (hour - rhour) * 60;
  const rmins = Math.round(mins);
  return `${rhour}H : ${rmins}M`;
};
