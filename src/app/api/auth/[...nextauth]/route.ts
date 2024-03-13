import NextAuth, { NextAuthOptions } from "next-auth";
import RedditProvider from "next-auth/providers/reddit";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  //https://medium.com/@rezahedi/using-nextauth-authentication-provider-in-next-js-by-app-router-f50cb23282c9
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
