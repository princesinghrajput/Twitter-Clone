import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import {
  BiHomeCircle,
  BiHash,
  BiBell,
  BiMessageRoundedDots,
  BiBookmarks,
  BiUserPin
} from "react-icons/bi";
import FeedCard from "../components/FeedCard/index";


// const inter = Inter({subsets:['latin']})
interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}
const sideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BiBell />,
  },
  {
    title: "Messages",
    icon: <BiMessageRoundedDots />,
  },
  {
    title: "Bookmarks",
    icon: <BiBookmarks />,
  }, {
    title: "Twitter Blue",
    icon: <AiFillTwitterSquare />,
  }, {
    title: "Profile",
    icon: <BiUserPin />,
  }, {
    title: "More",
    icon: < CgMoreO />,
  },
];

export default function Home() {
  return (
    <div >
      <div className=" grid grid-cols-12 h-screen w-screen px-56px">
        <div className="col-span-3 pt-1 px-4 pl-14 h-screen overflow-y-hidden">
          <div className="text-3xl h-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all w-fit">
            <BsTwitter />
          </div>
          <div className="mt-2 text-xl font-semibold ">
          <ul>
  {sideBarMenuItems.map((item, index) => ( // Add index parameter to map function
    <li key={index} className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer"> {/* Add key prop */}
      <div className="flex items-center">
        {item.icon}
        <span className="ml-2">{item.title}</span>
      </div>
    </li>
  ))}
</ul>

            <div className=" mt-4">
              <button className="bg-sky-500 p-4 rounded-full py-2 px-5 w-full text-lg ">Tweet</button>

            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border border-gray-500 h-screen overflow-y-scroll no-scrollbar ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />

        </div>
        <div className="col-span-3">
          <h1>Hello</h1>
</div>
      </div>
    </div>
  );
}
