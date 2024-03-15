import Feed from "./components/Feed";
import PostBox from "./components/PostBox";

export default async function Home() {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <div className="">
        <title>Reddit 2.0 clone </title>
        <PostBox />
        <div className="flex">
          <Feed />
        </div>
      </div>
    </div>
  );
}
