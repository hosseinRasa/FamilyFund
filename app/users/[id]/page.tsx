"use client";
import { CloseCircleFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function UserModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params); // unwrap the Promise

  return (
    <div
      onClick={() => router.back()}
      className="modal-backdrop text-black"
       
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-sheet"
        
      >
        <header className="flex flex-row justify-between border-b-2-white ">
                  {/* <p className="absolute top-2 right-10">کاربران</p> */}
            <CloseCircleFilled  onClick={() => router.back()} className="absolute top-20 left-2"/>
                </header>
        <h2>کاربر شماره {id}</h2>
        <p>این یک مودال نمونه است.</p>
        <button onClick={() => router.back()}>بستن</button>
      </div>
    </div>
  );
}