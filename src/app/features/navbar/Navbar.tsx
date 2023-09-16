import Logo from "../logo/Logo";
import Input from "./components/Input";
import SignIn from "./components/SignIn";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-[50%] translate-x-[-50%] z-20 w-full md:container mx-auto py-[15px] px-5">
      <nav className="flex justify-between items-center w-full">
        <Logo theme="light" />
        <div className="hidden lg:block w-[525px]">
          <Input />
        </div>

        <SignIn />
      </nav>
      <div className="lg:hidden flex justify-center my-[1rem]">
        <Input />
      </div>
    </div>
  );
}
