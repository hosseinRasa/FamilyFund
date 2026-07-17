"use client";
import { PlusCircleFilled } from "@ant-design/icons";
import SvgDie from "../icons/svg-die";
import { useState } from "react";

const Footer = () => {
  const [animate, setAnimate] = useState<string>("none");
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
      <span className="grid cursor-pointer place-items-center -mt-11 ">
        <SvgDie
          onClick={() =>
            animate === "none"
              ? setAnimate("animate-[spin_1s_linear_1]")
              : setAnimate("none")
          }
          className={`${animate} 
          shadow-gray-300 shadow-2xl rounded-full p-1 size-20`}
        />
        {/* <small>خانه</small> */}
      </span>
      <span className="grid cursor-pointer text-lg">
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
