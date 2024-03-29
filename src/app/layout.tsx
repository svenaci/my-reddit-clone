import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import Header from "./components/Header";

import { ApolloProvider } from "./apolloProvider";
import { Toaster } from "react-hot-toast";

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
            <Toaster />
            <Header />
            {children}
          </Provider>
        </body>
      </html>
    </ApolloProvider>
  );
}
