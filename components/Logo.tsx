import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex hover:opacity-75 transition items-center ">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={40}
          
        />
      </div>
    </Link>
  );
};
