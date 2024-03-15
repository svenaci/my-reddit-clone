import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TPOIC = gql`
  query MyQuery($topic: String!) {
    subredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;
