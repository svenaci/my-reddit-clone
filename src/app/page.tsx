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
          <div className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
            <p>Top Communities</p>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
