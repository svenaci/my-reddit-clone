"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_POST_ID } from "../../../../graphql/queries";
import { useParams } from "next/navigation";
import Post from "@/app/components/Post";

function PostPage() {
  const { postId } = useParams();
  console.log(typeof postId);
  const { loading, data, error } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: postId,
    },
  });
  if (error) return `Error! ${error.message}`;
  const post: Post = data?.postByPostId;
  //   console.log(data);
  return (
    <div>
      <Post post={post} />
    </div>
  );
}

export default PostPage;
