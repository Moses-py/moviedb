import Image from "next/image";

export default function Play() {
  return (
    <div className="w-[110px] h-[110px] rounded-full bg-[#e8e8e8]/20 grid place-items-center cursor-pointer">
      <Image src="/PlayBtn.png" alt="play icon" width={50} height={50} />
    </div>
  );
}
