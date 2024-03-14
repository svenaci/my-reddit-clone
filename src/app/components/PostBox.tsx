"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Avatar from "./Avatar";

import { LinkIcon, PhotoIcon } from "@heroicons/react/24/outline";

function PostBox() {
  const { data: session } = useSession();
  return (
    <form className="sticky top-16 z-50 bg-white border border-gray-300 rounded-md p-2">
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          disabled={!session}
          className="rounded-md flex-1 bg-gray-50 p-2 pl-5 outline-none"
          type="text"
          placeholder={
            session ? `Create a post by entering a title` : "Sign in to post "
          }
        />

        <PhotoIcon className={`h-6 text-gray-300 cursor-pointer`} />
        <LinkIcon className="h-6 text-gray-300" />
      </div>
    </form>
  );
}

export default PostBox;
