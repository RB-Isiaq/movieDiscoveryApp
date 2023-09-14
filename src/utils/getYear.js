export const getYear = (year) => new Date(year).getUTCFullYear();

export const getUtcDate = (time) => {
  if (time) {
    const newDate = new Date(time);
    const utcDate = newDate.toISOString();
    return utcDate;
  }
};

// Will use this later
// export const getUtcDate = (inputDate) => {
//   const parts = inputDate?.split("-");
//   const year = parseInt(parts?.[0], 10);
//   const month = parseInt(parts?.[1], 10) - 1; // Month is 0-based in JavaScript
//   const day = parseInt(parts?.[2], 10);

//   const utcDate = new Date(Date.UTC(year, month, day));

//   // Create an array of month names
//   const monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   // Format the date as "Day, DD Month YYYY"
//   const formattedDate = `${getDayName(utcDate)}, ${String(
//     utcDate.getUTCDate()
//   ).padStart(2, "0")} ${
//     monthNames[utcDate.getUTCMonth()]
//   } ${utcDate.getUTCFullYear()}`;

//   return formattedDate;
// };

// // Helper function to get the day name (e.g., "Fri")
// function getDayName(date) {
//   const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   return dayNames[date.getUTCDay()];
// }
