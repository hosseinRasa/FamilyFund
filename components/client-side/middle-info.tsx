'use client'
import { HomeOutlined } from "@ant-design/icons";
import React from "react";

const MiddleInfo = () => {
  return (
    <div className="p-2 h-1/4 flex flex-row w-full justify-around">
      <div className="flex  flex-row justify-start items-center gap-2  md:gap-5">
        <HomeOutlined className="text-4xl"/>
        <ul>
          <li><strong>نام مشتری :</strong> حسن دوست</li>
          <li><strong>بدهی :</strong>      456 ریال </li>
          <li>   <strong>وضعیت :</strong>     خوش حساب 🙂         </li>  
        </ul>
      </div>
      <div
      className="grid place-content-center text-center " 
      >
        <ul className="bg-red-300 p-2 px-7 rounded-2xl ">
            <li className="whitespace-nowrap"><strong>مهلت پرداخت</strong></li>
            <small>1405/02/02</small>
        </ul>

      </div>
    </div>
  );
};

export default MiddleInfo;
