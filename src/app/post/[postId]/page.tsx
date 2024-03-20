"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_POST_ID } from "../../../../graphql/queries";
import { useParams } from "next/navigation";
import Post from "@/app/components/Post";
import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  comment: string;
};

function PostPage() {
  const { postId } = useParams();
  const { data: session } = useSession();

  const { loading, data, error } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: postId,
    },
  });
  if (error) return `Error! ${error.message}`;
  const post: Post = data?.postByPostId;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("here");
  };

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />

      <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
        <p className="text-sm">
          Comment as <span>{session?.user?.name}</span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
          <textarea
            {...register("comment")}
            disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={
              session ? "what are your thoughts" : "Please sign in to comment"
            }
          />
          <button
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostPage;
