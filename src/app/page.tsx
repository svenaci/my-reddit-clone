import Header from "./components/Header";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      <title>Reddit 2.0 clone </title>
      {session && (
        <div>
          <p>Signed in as {session?.user?.name}</p>
        </div>
      )}

      {!session && <p>Not signed in</p>}
    </div>
  );
}
