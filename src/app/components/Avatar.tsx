import React from "react";

type Props = {
  seed?: string;
  large?: boolean;
};
function Avatar({ seed, large }: Props) {
  return (
    <div
      className={`relative overflow-hidden h-10 w-10 rounded-full border-gray-300 bg-white ${
        large && "h-20 w-20"
      }`}
    >
      <img
        src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Dusty"
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
