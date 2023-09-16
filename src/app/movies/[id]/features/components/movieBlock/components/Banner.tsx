import Image from "next/image";
import Play from "./Play";
import { blurHash } from "@/app/utils/blurHash";

export default function Banner({ image }: { image: string }) {
  return (
    <div className="w-full relative h-[50svh] rounded-[20px] p-5">
      <Image
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt="hero image"
        width={1440}
        height={600}
        placeholder="blur"
        blurDataURL={blurHash}
        className="w-full h-full object-cover object-top rounded-[20px]"
      />
      {/* Play trailer */}
      <div className="absolute inset-0 top-0 left-0 z-20 grid place-items-center">
        <div className="flex flex-col items-center">
          <Play />
          <p className="text-white text-[25px] font-[600] my-[1rem]">
            Watch Trailer
          </p>
        </div>
      </div>
    </div>
  );
}
