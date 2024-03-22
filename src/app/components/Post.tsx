"use client";
import React, { useEffect, useState } from "react";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Avatar from "./Avatar";
import TimeAgo from "react-timeago";
import { Jelly } from "@uiball/loaders";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_VOTES_BY_POST_ID } from "../../../graphql/queries";
import { ADD_VOTE } from "../../../graphql/mutations";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  const [vote, setVote] = useState<boolean>();
  const { data: session } = useSession();

  const { loading, data, error } = useQuery(GET_ALL_VOTES_BY_POST_ID, {
    variables: {
      post_id: post?.id,
    },
  });

  useEffect(() => {
    const votes: Vote[] = data?.votesByPostId;

    //Latest vote as we sorted by newely created first in SQL query
    //Note: you could improve this by moving it to the original query
    const vote = votes?.find(
      (vote) => vote.username == session?.user?.name
    )?.upvote;

    //see if user has voted
    setVote(vote);
  }, [data]);

  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_ALL_VOTES_BY_POST_ID, "votesByPostId"],
  });

  const upVote = async (isUpvote: boolean) => {
    if (!session) {
      toast("You need to sign in to vote!");
    }

    //if user has already voted on a post and trying to upvote do nothing and return
    if (vote && isUpvote) return;

    //if user has already downvoted and is trying to downvote again then do nothing and return
    if (vote === false && !isUpvote) return;

    await addVote({
      variables: {
        post_id: post.id,
        username: session?.user?.name,
        upvote: isUpvote,
      },
    });
  };

  const displayVotes = (data: any) => {
    const votes: Vote[] = data?.votesByPostId;
    const displayNumer = votes?.reduce(
      (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
      0
    );

    if (votes?.length === 0) return 0;

    if (displayNumer === 0) {
      return votes[0]?.upvote ? 1 : -1;
    }

    return displayNumer;
  };

  if (!post)
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Jelly size={50} color="#FF4501" />
      </div>
    );

  return (
    // <Link href={`/post/${post.id}`}>
    <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon
          onClick={() => upVote(true)}
          className={`voteButtons hover:text-blue-400 ${
            vote && "text-blue-400"
          }`}
        />
        <p className="text-xs font-bold text-black">{displayVotes(data)}</p>
        <ArrowDownIcon
          onClick={() => upVote(false)}
          className={`voteButtons hover:text-red-400 ${
            vote === false && "text-red-400"
          }`}
        />
      </div>

      <div className="p-3 pb-1">
        <div className="flex items-center space-x-2">
          <Avatar seed={post.subreddit[0]?.topic} />
          <p className="text-xs text-gray-400">
            <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
              <span className="font-bold text-black hover:text-blue-400 hover:underline">
                r/{post.subreddit[0]?.topic}
              </span>
            </Link>{" "}
            • Posted by u/
            {post.username} <TimeAgo date={post.created_at} />
          </p>
        </div>

        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm font-light">{post.body}</p>
        </div>

        <img className="w-full" src={post.image} alt="" />

        <div className="flex space-x-4 text-gray-400">
          <div className="postButtons">
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
            <p className="">{post.comments.length} Comments</p>
          </div>
          <div className="postButtons">
            <GiftIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Award</p>
          </div>
          <div className="postButtons">
            <ShareIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Share</p>
          </div>
          <div className="postButtons">
            <BookmarkIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Save</p>
          </div>
          <div className="postButtons">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default Post;
