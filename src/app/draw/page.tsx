"use client";

import { Drawer } from "vaul";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Logo from "../features/logo/Logo";
import Logout from "../movies/[id]/features/components/sidebar/components/Logout";
import SidebarNav from "../movies/[id]/features/components/sidebar/components/SidebarNav";
import Image from "next/image";
const Mobile = () => {
  const searchParams = useSearchParams();
  const drawer = searchParams.get("drawer") || false;
  const favorite = searchParams.get("favorite");

  return (
    <Drawer.Root
      shouldScaleBackground
      open={drawer === "true" ? true : false}
      dismissible={false}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 lg:hidden block" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[20px] h-[60%] mt-24 fixed bottom-0 left-0 right-0 pt-[1.5rem]">
          <div className="bg-gray-3 px-5 py-4 overflow-y-scroll">
            <Link
              href={`?drawer=false&favorite=${favorite}`}
              className="flex justify-between items-center float-right"
            >
              <Image
                src={"/close.svg"}
                alt="close menu button"
                width={25}
                height={25}
              />
            </Link>
            <div className="mt-[2rem] flex flex-col items-center">
              <div className=" px-[20px] mb-[1rem]">
                <Logo theme="dark" />
              </div>

              <SidebarNav />
              <Logout />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Mobile;
