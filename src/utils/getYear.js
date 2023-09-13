export const getYear = (year) => new Date(year).getUTCFullYear();

export const getUtcTime = (year) => {
const utcDate = new Date(Date.UTC(year));
const isoString = utcDate.toISOString();
return isoString;
}

