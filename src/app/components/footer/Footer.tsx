import Image from "next/image";
import Link from "next/link";

let socials = ["facebook", "twitter", "instagram", "youtube"];
let links = ["Conditions of use", "Privacy & Policy", "Press room"];
export default function Footer() {
  return (
    <footer className="grid place-items-center mt-[150px] mb-[2rem] p-5">
      <div className="container w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-[2rem]">
        {/* Socials */}
        <div className="grid grid-cols-2 xs:grid-cols-4 justify-items-center gap-y-[1rem] w-full items-center">
          {socials.map((social, index) => {
            return (
              <Link href={"/"} key={index}>
                <Image
                  src={`/${social}.svg`}
                  alt={`${social} icon`}
                  width={20}
                  height={20}
                />
              </Link>
            );
          })}
        </div>
        {/* Links */}
        <div className="flex flex-col xs:flex-row gap-y-[1rem] justify-between w-full items-center">
          {links.map((link, index) => {
            return (
              <Link href={"/"} key={index} className="text-[14px] font-[700]">
                {link}
              </Link>
            );
          })}
        </div>
        {/* Copyright */}
        <div className="text-center">
          <p className="text-[14px] font-[700]">
            © 2021 MovieBox by Adriana Eka Prayudha{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
