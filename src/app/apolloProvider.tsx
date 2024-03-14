"use client";
import { ApolloProvider as Provider } from "@apollo/client";
import createApolloClient from "../../apollo-client";

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  const client = createApolloClient();
  return <Provider client={client}>{children}</Provider>;
}
