import Image from "next/image";
import Rating from "../../hero/components/Rating";
import { blurHash } from "@/app/utils/blurHash";
import { getRandomInt } from "@/app/utils/randomNumberGenerator";
import Link from "next/link";

type MovieCardProps = {
  image: string;
  name: string;
  date: string;
  id: string;
};
export default function MovieCard({ image, name, date, id }: MovieCardProps) {
  return (
    <div className="w-full " data-testid="movie-card">
      <Link
        href={`/movies/${id}`}
        className="flex flex-col gap-[6px] cursor-pointer"
      >
        <Image
          src={image}
          alt={name}
          width={250}
          height={370}
          className="w-full min-w-[150px] min-h-[200px]"
          placeholder="blur"
          blurDataURL={blurHash}
          data-testid="movie-poster"
        />
        {/* location and date */}
        <div className="">
          <p
            className="text-gray-400 text-[12px]"
            data-testid="movie-release-date"
          >
            {date}
          </p>
        </div>

        <h5 className="font-[700]" data-testid="movie-title">
          {name}
        </h5>
        <div className="flex justify-between">
          <Rating ratingCode="imdb" ratingValue={getRandomInt().toFixed(1)} />
          <Rating ratingCode="tomato" ratingValue={getRandomInt().toFixed(1)} />
        </div>
      </Link>
    </div>
  );
}
