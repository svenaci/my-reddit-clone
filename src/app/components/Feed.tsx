"use client";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_LIST } from "../../../graphql/queries";
import Post from "./Post";

function Feed() {
  const { loading, data, error } = useQuery(GET_POST_LIST);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const posts: Post[] = data?.postList;

  return (
    <div>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
