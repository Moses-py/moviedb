import Link from "next/link";
import MovieCard from "./components/MovieCard";
import Image from "next/image";
import { getMovieList } from "@/app/lib/getMoviesList";
export default async function Featured() {
  const data = await getMovieList(2);
  return (
    <section className="p-5 mt-[70px]">
      <div className="md:container mx-auto">
        <div className="flex justify-between items-center mb-[44px]">
          <h2 className="text-[18px] xs:text-[24px] sm:text-[28px] md:text-[36px] font-[700] text-black">
            Featured Movie
          </h2>
          <Link
            href={"/"}
            className="text-primary text-[14px] xs:[text-16px] md:text-[18px] flex items-center gap-[6px]"
          >
            See more <Image src={"/right.png"} alt="" width={20} height={20} />
          </Link>
        </div>

        <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center justify-items-center gap-[20px] md:gap-[80px] ">
          {data &&
            data.map((movie: any, index: number) => {
              return (
                <MovieCard
                  key={index}
                  image={process.env.TMDB_POSTER_PATH + movie.poster_path}
                  name={movie.original_title}
                  date={movie.release_date}
                  id={movie.id}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
