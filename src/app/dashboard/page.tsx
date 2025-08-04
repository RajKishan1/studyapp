"use client"
import Sidebar from "@/components/dashboard/Sidebar";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface prop {
  title: string;
  subtitle: string;
  image: string;
}
export const Features = ({ title, subtitle, image }: prop) => {
  const [link, setLink] = useState();
  return (
    <a href={link}>
      {" "}
      <div className="rounded-lg bg-neutral-800 px-3 py-2.5  gap-4 flex items-center">
        <img className="size-9" src={image} alt="" />
        <div className="flex flex-col pr-10">
          <h1 className="text-lg font-semibold"> {title}</h1>
          <h3 className="text-sm font-extralight">{subtitle}</h3>
        </div>
        <IoIosArrowForward size={32} fontWeight={12} className="" />
      </div>
    </a>
  );
};
const page = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full h-screen bg-neutral-900 pt-12 pl-12">
        <div className="w-full flex flex-col pb-6 ">
          <h1 className="text-4xl font-extrabold">Dashboard</h1>
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
        <div className="mt-20 ">
          <h2 className="text-2xl">All Notes</h2>
        </div>
      </div>
    </div>
  );
};
export default page;
