// ;subreddit/nextjs
"use client";

import { useParams } from "next/navigation";
import React from "react";
import Avatar from "../../components/Avatar";

function Subreddit() {
  const { topic } = useParams();
  return (
    <div>
      <div>
        <div>
          <Avatar seed={topic as string} large />
        </div>
      </div>
    </div>
  );
}

export default Subreddit;
