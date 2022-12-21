import {
  ChatBubbleOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

const Navbar = () => {
 
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="flex h-[50px] px-6 items-center justify-between">
        <div className="border-[0.5px] border-gray-200">
          <input
            type="text"
            className="px-2 border-none rounded-md"
            placeholder="Search..."
          />
          <SearchOutlined className=" " />
        </div>
        <ul className="flex items-center">
          <li>
            <LanguageOutlined className="mx-2" />
            <span>English</span>
          </li>
          <li onClick={()=> dispatch({type: "TOGGLE"})}>
            <DarkModeOutlined className="mx-2 cursor-pointer"   />
          </li>
          <li>
            <FullscreenExitOutlined className="mx-2" />
          </li>
          <li className="relative">
            <NotificationsNoneOutlined className="mx-2" />
            <div className="absolute -top-2 flex justify-center items-center -right-1 text-sm bg-red-600 w-6 h-6 rounded-full text-white">2</div>
          </li>
          <li className="relative">
            <ChatBubbleOutlined className="mx-2 " />
            <div className="absolute -top-2 flex justify-center items-center -right-1 text-sm bg-red-600 w-6 h-6 rounded-full text-white">2</div>
          </li>
          <li>
            <ListOutlined className="mx-2" />
          </li>
          <li>
            <div src="" alt="User" className="h-6 w-6 rounded-full flex bg-black items-center justify-center text-white">A</div>
          </li>
        </ul>
      </div>
      <hr className="h-0  border-[0.5px] border-gray-200" />
    </div>
  );
};

export default Navbar;
