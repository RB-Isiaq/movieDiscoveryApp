export const getYear = (year) => new Date(year).getUTCFullYear();


export const getUtcTime = (inputDate) => {
  const localDate = new Date(inputDate);
  const utcDate = new Date(localDate.getTime() + localDate.getTimezoneOffset() * 60000);
  const isoString = utcDate.toISOString();
  
  return isoString;
}


