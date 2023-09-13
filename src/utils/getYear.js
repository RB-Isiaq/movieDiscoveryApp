export const getYear = (year) => new Date(year).getUTCFullYear();

export const getUtcTime = (inputDate) => {
  const parts = inputDate.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Month is 0-based in JavaScript
  const day = parseInt(parts[2], 10);

  const utcDate = new Date(Date.UTC(year, month, day));

  const utcDateString = utcDate.toISOString().split('T')[0];

  return utcDateString;
}
