import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="h-[80svh] md:h-[70svh] grid place-items-center">
      <MoonLoader color="#BE123C" />
    </div>
  );
}
