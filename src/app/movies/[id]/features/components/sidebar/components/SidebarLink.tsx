import Image from "next/image";
import Link from "next/link";

export type LinkProps = {
  icon: "Show" | "Home" | "Movie" | "Calendar";
  selected: boolean;
  content: string;
};
export default function SidebarLink({ icon, selected, content }: LinkProps) {
  return (
    <li
      className={`py-[6px] lg:py-[24px] flex px-[24px] w-full ${
        selected && "bg-primary/10 border-r-primary border-r-[6px]"
      }`}
    >
      <Link href="/" className="flex gap-[16px] items-center">
        <Image
          src={`/${icon}.png`}
          alt={`${icon} icon`}
          width={25}
          height={25}
        />
        <span
          className={`text-[16px] md:text-[20px] leading-[30px] ${
            selected ? "text-primary" : "text-[#666666]"
          } font-[700]`}
        >
          {content}
        </span>
      </Link>
    </li>
  );
}
