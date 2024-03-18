"use client";
import { useQuery } from "@apollo/client";
import React from "react";
import {
  GET_ALL_POSTS_BY_TOPIC,
  GET_POST_LIST,
} from "../../../graphql/queries";
import Post from "./Post";

type Props = {
  topic?: string;
};

function Feed({ topic }: Props) {
  const { loading, data, error } = !topic
    ? useQuery(GET_POST_LIST)
    : useQuery(GET_ALL_POSTS_BY_TOPIC, {
        variables: {
          topic: topic,
        },
      });

  if (error) return `Error! ${error.message}`;

  const posts: Post[] = !topic ? data?.postList : data?.postListByTopic;

  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
