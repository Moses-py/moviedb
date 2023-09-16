import Link from "next/link";
import Image from "next/image";
import Box from "./Box";

export default function Logout() {
  return (
    <div className="flex flex-col gap-[44px] px-[20px]">
      <Box />
      <div className="w-full flex lg:mt-0 mt-[2rem]">
        <Link href="/" className="flex gap-[16px] items-center ">
          <Image
            src={`/Logout.png`}
            alt={`Logout icon`}
            width={30}
            height={30}
          />
          <span
            className={`text-[16px] lg:text-[20px] leading-[30px] text-[#666666] font-[700]`}
          >
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
}
