import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <h1 className="text-5xl text-[#0AABF7]"> KAIZUNE </h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
