import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-500 border-r-0 border-b-0 border-l-0 p-4 hover:bg-slate-800 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1">
          <Image
            className="border rounded-full"
            src="https://avatars.githubusercontent.com/u/83268492?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h4>Prince Singh</h4>
          <p>
            Is it just me or evryone? Do u feel the same as sometimes we feel
            more tired without doing much
          </p>
          <div className="flex justify-between mt-7 text-xl items-center p-2 pr-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
