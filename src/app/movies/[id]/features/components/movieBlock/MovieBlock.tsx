import Banner from "./components/Banner";
import TitleBlock from "./components/Title";
import MovieDetails from "./components/MovieDetails";
import { SingleMovie } from "../../Detail";

export default function MovieBlock({ movie }: SingleMovie) {
  return (
    <div className="flex-1 w-full relative">
      <Banner image={movie.backdrop} />
      <TitleBlock
        name={movie.name}
        runtime={movie.runtime}
        releaseDate={movie.releaseDate}
        vote={movie.vote}
        count={movie.count}
      />
      <MovieDetails movie={movie} />
    </div>
  );
}
