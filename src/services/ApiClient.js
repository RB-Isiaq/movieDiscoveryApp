const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getData = async function (route = "") {
  const response = await fetch(`${API_BASE_URL}${route}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.json();
};

export const searchMovieOnYouTube = async (title) => {
  const queryString = `q=${title} official trailer&type=video&part=snippet&key=${YOUTUBE_API_KEY}`;

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?${queryString}`
  );
  if (response.ok) {
    const data = await response.json();
    const searchResults = data.items;

    if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      const videoId = firstResult.id.videoId;
      return videoId;
    } else {
      throw new Error("No matching video found");
    }
  } else {
    console.error("Failed to fetch data from YouTube API.");
    throw new Error("Failed to fetch data from YouTube API");
  }
};
