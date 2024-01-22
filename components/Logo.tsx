import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex hover:opacity-75 transition items-center  px-2 py-1 ">
        <p className="bg-gradient-to-r from-logo-g-left to-logo-g-right  text-transparent bg-clip-text text-lg font-bold">
          SICAR
        </p>
      </div>
    </Link>
  );
};
