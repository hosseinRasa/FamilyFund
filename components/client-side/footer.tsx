"use client";
import {
  ApartmentOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import SvgDie from "../icons/svg-die";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const [animate, setAnimate] = useState<string>("none");
  return (
    <footer className="h-15 p-2 w-full sticky bottom-0 text-black bg-white">
      <div className="flex flex-row flex-nowrap justify-around">
        <span className="flex flex-col items-center cursor-pointer ">
          <HomeOutlined onClick={() => router.push('/')} />
          <small>خانه</small>
        </span>
        <span className=" cursor-pointer flex flex-col items-center ">
          <ApartmentOutlined /> <small>موسسه</small>
        </span>
        <span className="  cursor-pointer flex flex-col items-center -mt-11 ">
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
        <span className="flex flex-col items-center cursor-pointer ">
          <MoneyCollectOutlined />
          <small>وام</small>
        </span>
        <span className="flex flex-col items-center cursor-pointer ">
          <TeamOutlined /> <small>اشخاص</small>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
