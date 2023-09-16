import Button from "@/app/components/button/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-items-center h-[100svh] p-5">
      <div className="flex flex-col items-center gap-[24px] text-center">
        <h2 className="text-[24px] font-[700]">Not Found</h2>
        <p className="text-[20px] font-[500]">
          Oops! Sorry, could not find this requested resource
        </p>
        <Link href="/">
          <Button
            className="text-[16px] px-[48px] py-[12px]"
            theme={"deep"}
            color={"white"}
          >
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
