import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
      <Logo />

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="text-white rounded-full bg-primary-blue min-w-[130px]"
      />
    </nav>
  </header>
);

export default NavBar;
