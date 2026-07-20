"use client";
import { Button, Drawer, Menu, MenuProps } from "antd";
import logo from "@/public/images/logo.jpg";
import {
  MenuOutlined,
  PlusCircleFilled,
  ProfileFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { yekan } from "@/utils/font";
import Image from "next/image";
const SideMenu = () => {
  const itemClass =
    "border border-x-0 border-t-0 border-gray-300 w-full! rounded-none! m-0! text-gray-600!";
  const items: MenuProps["items"] = [
    
    {
      key: "accounts",
      label: "مدیریت حساب",
      icon: <ProfileFilled />,
      className: itemClass,
    },
    {
      key: "profile",
      label: "پروفایل کاربر",
      icon: <ProfileFilled />,
      className: itemClass,
    },
    {
      key: "settings",
      label: "ظاهر برنامه",
      icon: <PlusCircleFilled />,
      className: itemClass,
    },
  ];

  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        type="text"
        icon={<MenuOutlined />}
        className="  "
      />
      <Drawer
        closeIcon={""}
        title={
          <figure className="text-center w-full grid place-content-center pl-7 text-gray-600">
            <Image
              src={logo}
              alt="لوگو"
              width={200}
              height={200}
              className="rounded-full"
            />
            <figcaption>سامانه قرض الحسنه</figcaption>
            <small>کاربر: مدیر</small>
          </figure>
        }
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        classNames={{ body: "p-0!", header: "bg-linear-to-r  from-pink-300 to-red-400" }}
        className={`w-3/4! md:w-full! ${yekan.className} `}
      >
        <Menu items={items} className={`w-full ${yekan.className} `} />
      </Drawer>
    </>
  );
};

export default SideMenu;
