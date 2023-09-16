import Image from "next/image";
import Rating from "./components/Rating";
import { blurHash } from "@/app/utils/blurHash";
import { getRandomInt } from "@/app/utils/randomNumberGenerator";

type HeroProps = {
  name: string;
  desc: string;
  image: string;
  imdb: string;
  tomato: string;
};

export default function Hero({ name, desc, image, imdb, tomato }: HeroProps) {
  return (
    <div className="relative h-[80svh] md:h-[70svh] flex flex-col justify-center text-white">
      <Image
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt="hero image"
        width={1440}
        height={600}
        placeholder="blur"
        blurDataURL={blurHash}
        className="w-full h-full object-top object-cover absolute inset-0"
      />
      <div className="absolute inset-0 w-full bg-black opacity-40" />
      <div className="md:container mx-auto w-full p-5  mt-[2rem]">
        <div className="text_data relative z-20 flex flex-col gap-[16px] xl:w-1/3 lg:w-1/2 w-full">
          <h1 className="xl:text-[48px] lg:text-[40px] md:text-[36px] xs:text-[30px] text-[24px] font-[700] text-white xl:leading-[56px] md:leading-[40px] leading-[36px] text-left">
            {name}
          </h1>
          {/* ratings */}
          <div className="flex justify-between w-full xs:w-1/2 text-left">
            <Rating ratingCode={"imdb"} ratingValue={imdb} />
            <Rating ratingCode={"tomato"} ratingValue={tomato} />
          </div>
          {/* Description */}
          <p className="leading-[24px] text-[16px] md:text-[18px] font-[400] text-left">
            {desc.slice(0, 150)}....
          </p>
          {/* Trailer button */}
          {/* <Button icon="play">WATCH TRAILER</Button> */}
          <button className="bg-primary w-fit py-[6px] px-[16px] rounded-[6px] flex justify-between items-center gap-[6px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                fill="white"
              />
            </svg>
            <span className="text-[14px]">WATCH TRAILER</span>
          </button>
        </div>
      </div>
    </div>
  );
}
