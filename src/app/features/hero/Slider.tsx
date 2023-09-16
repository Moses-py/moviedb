"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Hero from "./Hero";
import { getRandomInt } from "@/app/utils/randomNumberGenerator";

type HeroSliderProps = {
  movies: MovieData[];
};
export default function HeroSlider({ movies }: HeroSliderProps) {
  return (
    <>
      <>
        <Carousel
          className="text-left"
          autoPlay
          centerMode={false}
          axis="horizontal"
          infiniteLoop
          showArrows={false}
          showIndicators
          showStatus={false}
          verticalSwipe="natural"
          showThumbs={false}
          interval={6000}
        >
          {movies.map((movie: MovieData, index: number) => {
            return (
              <Hero
                imdb={"89.0"}
                tomato={"97"}
                key={index}
                name={movie.original_title}
                desc={movie.overview}
                image={movie.backdrop_path}
              />
            );
          })}
        </Carousel>
      </>
    </>
  );
}
