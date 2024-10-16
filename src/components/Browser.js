import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browser = () => {
  useNowPlayingMovies();
  return (
    <div className="w-full h-42 overflow-y-scroll no-scrollbar">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browser;
