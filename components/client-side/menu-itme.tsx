"use client";
import { JSX } from "react/jsx-runtime";
interface Props{
    title: string;
    icon: JSX.Element,
}
const MenuItem = ({title, icon}: Props) => {
  return (
    <div className="border cursor-pointer shadow-2xl border-gray-300 text-black grid place-items-center 
    rounded-2xl w-25 h-23">
      {icon}
      <small>{title}</small>
    </div>
  );
};

export default MenuItem;
