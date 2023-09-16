import Image from "next/image";

export default function Input() {
  return (
    <div className={`w-full flex justify-center relative bg-transparent `}>
      <input
        type="text"
        className="w-full px-[10px] py-[6px] rounded-[6px] text-white outline-none focus:outline-none caret-white ring-2 ring-white border-none bg-transparent placeholder:text-white placeholder:text-[14px]"
        placeholder="What do you want to watch?"
      />
      <Image
        src={"/search.png"}
        alt="search icon"
        width={15}
        height={15}
        className="absolute right-[10px] top-[50%] translate-y-[-50%]"
      />
    </div>
  );
}
