import { getMovieList } from "@/app/lib/getMoviesList";
import HeroSlider from "./Slider";

export default async function SliderWrapper() {
  const data = await getMovieList(1);
  return (
    <>
      <HeroSlider movies={data} />
    </>
  );
}
