import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex hover:opacity-75 transition items-center ">
        <img
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={40}
          
        />
      </div>
    </Link>
  );
};
