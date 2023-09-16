import Image from "next/image";
export default function SignIn() {
  return (
    <div className="flex gap-[10px] sm:gap-[24px] items-center text-white">
      <h2 className="hidden xs:block font-[700] text-[16px]">Sign in</h2>
      <div className="p-2 rounded-full bg-primary">
        <Image src={"/menu.svg"} alt="menu icon" width={20} height={20} />
      </div>
    </div>
  );
}
