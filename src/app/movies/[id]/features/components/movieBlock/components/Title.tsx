"use client";
import { formatNumber } from "@/app/lib/formatNumber";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type TitleProps = Pick<
  SingleMovieDetail,
  "name" | "runtime" | "releaseDate" | "vote" | "count"
>;

export default function TitleBlock({
  name,
  runtime,
  releaseDate,
  vote,
  count,
}: TitleProps) {
  const favorite = useSearchParams().get("favorite");
  const mobile = useSearchParams().get("drawer");
  return (
    <>
      <div className="flex justify-between w-full sm:flex-row flex-col mt-[1rem] px-5 pt-5 gap-y-[1rem]">
        {/* Title, runtime, year */}
        <div className="flex md:flex-row flex-col md:items-center gap-[10px] text-[23px] font-[600] text-[#404040]">
          <div className="flex gap-[10px] items-center">
            <h3 className="leading-[0.5]" data-testid="movie-title">
              {name}
            </h3>

            <span className="hidden sm:block rounded-full bg-black h-2 w-2" />
          </div>
          <div className="flex gap-[10px] items-center">
            <p data-testid="movie-release-date">{releaseDate}</p>
            <span className="hidden sm:block rounded-full bg-black h-2 w-2" />
            <p data-testid="movie-runtime">{runtime} mins</p>
          </div>
        </div>
        <Link
          href={`?favorite=${
            favorite === "true" ? false : true
          }&drawer=${mobile}`}
          className="flex gap-[10px] items-center"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 48 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M23.6875 0L29.2302 17.2746H47.1667L32.6558 27.9508L38.1984 45.2254L23.6875 34.5491L9.17655 45.2254L14.7192 27.9508L0.208292 17.2746H18.1448L23.6875 0Z"
              fill={favorite === "true" ? "#FFD703" : "#e8e8e8"}
            />
          </svg>
          <span className="text-[#666666] text-[23px] font-[600]">
            {+vote.toFixed(1)} | {formatNumber(count)}
          </span>
        </Link>
      </div>
    </>
  );
}
