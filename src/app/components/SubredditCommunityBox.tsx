"use client";

import { useQuery } from "@apollo/client";
import React from "react";
import { GET_SUBREDDITS_WITH_LIMIT } from "../../../graphql/queries";
import SubredditCommunityRow from "./SubredditCommunityRow";

function TopCommunity() {
  const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });

  const subreddits: Subreddit[] = data?.getSubredditListLimit;
  return (
    <div>
      <p className="text-md mb-1 p-4 pb-3 font-bold">Reddit Communities</p>

      <div>
        {subreddits?.map((subreddit, i) => (
          <SubredditCommunityRow
            key={subreddit.id}
            topic={subreddit.topic}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default TopCommunity;
