import Logo from "@/app/features/logo/Logo";
import SidebarNav from "./components/SidebarNav";
import Logout from "./components/Logout";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col flex-initial justify-between h-[100svh] w-[250px] border border-black/30 rounded-tr-[45px] rounded-br-[45px] py-[50px]">
      <div className=" px-[20px]">
        <Logo theme="dark" />
      </div>

      <SidebarNav />
      <Logout />
    </aside>
  );
}
