import CustomButton from "./CustomButton";
import { Logo } from "./Logo";

export default function NavBar() {
  return (
    <header className="w-full z-10 bg-gray-800 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-1 py-4 bg-transparent">
        <Logo />
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-white rounded-full bg-primary-blue min-w-[130px]"
        />
      </nav>
    </header>
  );
}
