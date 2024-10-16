import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-80 pl-10 z-20 text-white  w-screen aspect-video bg-gradient-to-r from-black pointer-events-none">
      <h1 className="font-sans font-bold text-6xl">{title}</h1>
      <p className="w-1/2 mt-4 font-mono">{overview}</p>
      <div className="mt-2">
        <button className="px-6 py-3 bg-red-400 rounded-lg font-bold text-white mr-1 pointer-events-auto">
          Play
        </button>
        <button className="px-6 py-3 bg-red-400 rounded-lg font-bold text-white ml-1 pointer-events-auto">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
