import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browser = () => {
  const nowPlayingMovies = useNowPlayingMovies();
  return (
    <div>
      <Header />
      <div className="text-red-400 font-bold">
        Hello{process.env.TMDB_API_TOKEN}
      </div>
    </div>
  );
};

export default Browser;
