"use client";
import { PlusCircleFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="flex flex-row flex-nowrap justify-around">
      <span className="grid cursor-pointer ">
        <PlusCircleFilled />
        <small>خانه</small>
      </span>
      <span className="grid cursor-pointer ">
        <PlusCircleFilled />
        <small>خانه</small>
      </span>
      <span className="grid cursor-pointer place-items-center -mt-8 ">
        <PlusCircleFilled className="text-5xl " />
        {/* <small>خانه</small> */}
      </span>
      <span className="grid cursor-pointer text-lg ">
        <PlusCircleFilled />
        <small>خانه</small>
      </span>
      <span className="grid cursor-pointer ">
        <PlusCircleFilled />
        <small>خانه</small>
      </span>
    </div>
  );
};

export default Footer;
