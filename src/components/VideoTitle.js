import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video z-40">
      <div className="pt-96 pl-10 text-white pointer-events-none">
        <h1 className="font-sans font-bold text-6xl">{title}</h1>
        <p className="w-1/2 mt-4 font-mono">{overview}</p>
        <div className="mt-2 pointer-events-auto">
          <button className="px-6 py-3 bg-white rounded-lg font-bold text-black mr-1 hover:bg-opacity-80">
            Play
          </button>
          <button className="px-6 py-3 bg-gray-500/50 text-white rounded-lg font-bold ml-1 pointer-events-auto">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
