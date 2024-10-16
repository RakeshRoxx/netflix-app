import React, { useState } from "react";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const [videoLink, setVideoLink] = useState(null);

  useGetMovieTrailer({ movieId, setVideoLink });

  console.log("video link :  " + videoLink);

  return (
    <div className="absolute z-10">
      {videoLink && (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" + videoLink + "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
