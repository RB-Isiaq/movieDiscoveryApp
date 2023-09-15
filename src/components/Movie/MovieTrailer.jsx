import React from "react";
import YouTube from "react-youtube";

const MovieTrailer = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default MovieTrailer;
