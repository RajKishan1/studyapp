import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

interface prop {
  title: string;
  subtitle: string;
  image: string;
}
export const Features = ({ title, subtitle, image }: prop) => {
  return (
    <div className="rounded-lg bg-neutral-800 px-3 py-2.5  gap-4 flex items-center">
      <img className="size-10" src={image} alt="" />
      <div className="flex flex-col pr-10">
        <h1 className="text-lg font-semibold"> {title}</h1>
        <h3 className="text-sm font-extralight">{subtitle}</h3>
      </div>
      <IoIosArrowForward size={32} fontWeight={12} className=""/>
    </div>
  );
};
const page = () => {
  return (
    <div className="flex ">
      <div className="h-screen pl-2 pr-20 pt-4 bg-black">
        <div className="text-white text-2xl flex items-center pl-3">
          TurboAI
        </div>
        <div className="py-6">
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
      <div className="w-full h-screen bg-neutral-900 p-6">
        <div className="w-full flex flex-col pb-6 ">
          <h1 className="text-5xl font-bold">Dashboard</h1>
          <p className="text-lg text-neutral-300">Create new notes</p>
        </div>
        <div className="w-full flex gap-6">
          <Features
            title="Record or upload audio"
            subtitle="Upload an audio file"
            image="/record.svg"
          />
          <Features
            image="/utube.svg"
            title="Youtube video"
            subtitle="paste your youtube link"
          />
          <Features
            image="/doc.svg"
            title="Document upload"
            subtitle="Any PDF,DOC,PPT, etc!"
          />
        </div>
        <div>All Notes</div>
      </div>
    </div>
  );
};
export default page;
