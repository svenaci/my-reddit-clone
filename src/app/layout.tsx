import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import Header from "./components/Header";

import { ApolloProvider } from "./apolloProvider";
import PostBox from "./components/PostBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider>
      <html lang="en">
        <body className={inter.className}>
          <Provider>
            <Header />
            {children}
          </Provider>
        </body>
      </html>
    </ApolloProvider>
  );
}
