import { getMovieList } from "@/app/lib/getMoviesList";
import Detail from "./features/Detail";
import Mobile from "@/app/draw/page";
import { notFound } from "next/navigation";
import singleMovieDetail from "@/app/lib/getSingleMovieDetail";

type Params = {
  params: {
    id: string;
  };
};

export default async function MovieDetail({ params: { id } }: Params) {
  const data: Promise<void | SingleMovieDetail> = singleMovieDetail(id);
  const [movies] = await Promise.all([data]);

  if (!movies?.name) return notFound();

  return (
    <>
      <Detail movie={movies} />;
      <Mobile />
    </>
  );
}

export async function generateStaticParams() {
  const data: Promise<MovieData[]> = getMovieList(2);
  const movies = await data;

  return movies.map((movie) => {
    return {
      id: movie.id.toString(),
    };
  });
}
