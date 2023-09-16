import Button from "@/app/components/button/Button";
import Image from "next/image";
import { SingleMovie } from "../../../Detail";

export default function MovieDetails({ movie }: SingleMovie) {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:items-center my-[25px] gap-y-[2rem] lg:gap-y-0 px-5 leading-[30px] text-[20px]">
      <div className="flex flex-col gap-[24px] lg:w-1/2">
        <p data-testid="movie-overview">{movie.overview}</p>
        <p>
          Budget: <span className="text-primary">${movie.budget}</span>
        </p>
        <p>
          Production companies:
          {movie.prod_comp.map((comp, index) => {
            return (
              <span key={index} className="text-primary">
                {comp.name},{" "}
              </span>
            );
          })}
        </p>
        <p>
          Spoken Languages:{" "}
          {movie.languages.map((lang, index) => {
            return (
              <span key={index} className="text-primary">
                {lang.name},{" "}
              </span>
            );
          })}
        </p>
      </div>

      <div className="flex-initial">
        <div className=" mb-[10px]">
          <Button
            className="py-[10px] md:py-[16px]"
            color="white"
            icon="ticket"
            theme={"deep"}
            fullWidth={true}
          >
            See showtimes
          </Button>
        </div>
        <div className=" mb-[30px]">
          <Button
            className="py-[10px] md:py-[16px]"
            color="black"
            icon="list"
            theme={"light"}
            fullWidth
          >
            More watch options
          </Button>
        </div>

        <Image
          src={"/blande.png"}
          alt=""
          width={1280}
          height={768}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}
