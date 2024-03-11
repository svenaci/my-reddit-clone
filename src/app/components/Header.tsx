import { ChevronDownIcon, HomeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="sticky-top-0 z-50 flex px-4 py-2 shadow-sm">
      <div className="relative flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </div>
  );
}

export default Header;
