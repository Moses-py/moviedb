import Image from "next/image";
import Link from "next/link";
type LogoTheme = {
  theme: "light" | "dark";
};
export default function Logo({ theme }: LogoTheme) {
  return (
    <Link href={"/"} className="flex items-center gap-[10px] sm:gap-[24px]">
      <Image
        src={"/tv.png"}
        alt={"movie db logo"}
        width={40}
        height={40}
        data-testid="logo"
      />
      <h2
        className={`text-[18px] lg:text-[24px] font-[700] ${
          theme === "light" ? "text-white" : "text-black"
        }`}
      >
        Movie box
      </h2>
    </Link>
  );
}
