import React, { useCallback } from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import {
  BiImage,
  BiHomeCircle,
  BiHash,
  BiBell,
  BiMessageRoundedDots,
  BiBookmarks,
  BiUserPin
} from "react-icons/bi";
import FeedCard from "../components/FeedCard/index";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import Image from "next/image";


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

  const handleLoginWithGoogle = useCallback((cred:CredentialResponse)=>{
    
  },[])

  const handleSelectImage = useCallback(
    () => {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.click();
    }, []
  )
  
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

          <div>
            <div className="border border-gray-500 border-r-0 border-b-0 border-l-0 p-4 hover:bg-slate-800 transition-all cursor-pointer" />

            <div className="grid grid-cols-12 gap-3 ml-4">
              <div className="col-span-1">
                <Image
                  className="border rounded-full "
                  src="https://avatars.githubusercontent.com/u/83268492?v=4"
                  alt="user-image"
                  height={50}
                  width={50}
                />
              </div>
              <div className="col-span-11 ">
                <textarea className=" w-full bg-transparent text-lg px-3 border-b-slate-900" rows={2}  placeholder="What's happening?"></textarea>
                <div className="text-2xl flex justify-between items-center mb-2 mr-2">
                <BiImage onClick={handleSelectImage} />
                <button className="bg-sky-500 p-4 rounded-full py-2 px-4 text-sm ">Tweet</button>

               

                </div>
              </div>

            </div>



          </div>
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
        <div className="col-span-3 p-5">
          <div className=" border p-5 bg-slate-700 rounded-lg">
            <h1 className="pb-2 text-xl">New to Twitter</h1>

            <GoogleLogin
onSuccess={(credentialResponse) => {
  console.log(credentialResponse);
}}
onError={() => {
  console.log('Login Failed');
}}
/>
          </div>
        </div>
      </div>
    </div>
  );
}
