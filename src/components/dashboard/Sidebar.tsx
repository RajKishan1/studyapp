import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="h-screen w-80 pl-2 pr-6 pt-6 bg-black">
      <div className="text-white text-2xl flex items-center justify-between pl-3">
        <span> TurboAI</span>
        <MdKeyboardDoubleArrowLeft size={30} />
      </div>
      <div className="py-6 gap-2">
        <div className="w-full flex items-center  gap-2 hover:bg-neutral-800 px-3 py-2 rounded-lg">
          <IoHomeOutline color="white" size={20} /> Dashboard
        </div>
        <div className="flex items-center  gap-2 hover:bg-neutral-800 px-3 py-2 rounded-lg">
          <IoSettingsSharp size={20} /> Settings
        </div>
      </div>
      <div className="bg-purple-600 text-md rounded-lg flex items-center justify-center px-2 py-2">
        Upgrade to premium
      </div>
    </div>
  );
};

export default Sidebar;
