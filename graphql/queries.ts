import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    subredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_POST_LIST = gql`
  query MyQuery($topic: String!) {
    postList {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
    }
  }
`;
