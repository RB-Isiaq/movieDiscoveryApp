import React from "react";
import YouTube from "react-youtube";

const MovieTrailer = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // You can specify additional player options here if needed
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default MovieTrailer;
