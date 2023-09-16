"use client";
import Sidebar from "./components/sidebar/Sidebar";
import MovieBlock from "./components/movieBlock/MovieBlock";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export type SingleMovie = {
  movie: SingleMovieDetail;
};
export default function Detail({ movie }: SingleMovie) {
  const favorite = useSearchParams().get("favorite");
  return (
    <div className="flex gap-[24px] relative">
      <Sidebar />
      <MovieBlock movie={movie} />

      <Link
        href={`?drawer=true&favorite=${favorite}`}
        className="lg:hidden fixed bottom-[2rem] left-[50%] translate-x-[-50%] w-[50px] h-[50px] rounded-full bg-primary grid place-items-center cursor-pointer"
      >
        <Image
          src={"/menu_open.svg"}
          alt="menu open button"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
