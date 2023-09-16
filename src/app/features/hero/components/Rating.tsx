import Image from "next/image";

type RatingProps = {
  ratingCode: "imdb" | "tomato";
  ratingValue: string;
};
export default function Rating({ ratingCode, ratingValue }: RatingProps) {
  return (
    <div className="flex items-center gap-[10px]">
      <Image
        src={`${ratingCode}.svg`}
        alt={`${ratingCode} logo`}
        width={ratingCode === "imdb" ? 35 : 16}
        height={ratingCode === "imdb" ? 17 : 16}
      />
      <p className="text-[14px]">
        {ratingCode === "imdb" ? `${ratingValue}/100` : `${ratingValue}%`}
      </p>
    </div>
  );
}
