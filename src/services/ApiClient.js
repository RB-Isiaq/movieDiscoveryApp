const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

export const getData = async function (route = "") {
  const response = await fetch(`${API_BASE_URL}${route}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.json();
};
