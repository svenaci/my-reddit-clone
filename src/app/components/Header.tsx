"use client";

import {
  ChevronDownIcon,
  Bars3Icon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";

import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAmericasIcon,
  MegaphoneIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import React from "react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="sticky-top-0 z-50 flex px-4 py-2 shadow-sm items-center">
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

      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className=" text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAmericasIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              layout="fill"
              src="/vercel.svg"
              alt="Vercel Logo"
            />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>

          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              layout="fill"
              src="/vercel.svg"
              alt="Vercel Logo"
            />
          </div>
          <p className="text-gray-400">Sign in</p>
        </div>
      )}
    </div>
  );
}

export default Header;
