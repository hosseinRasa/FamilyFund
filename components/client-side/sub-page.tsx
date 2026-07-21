"use client";
import {
    DeleteOutlined,
    EditOutlined,
  FileAddOutlined,
  LogoutOutlined,
  PlusOutlined,
  SaveFilled,
  SaveOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  children: React.ReactNode;
  title: string;
  showSearch?: boolean;
  navigationButtons?: ("add" | "save" | "delete" | "edit")[];
  id: string;
  baseUrl: string;
}
const SubPage = ({
  children,
  title,
  showSearch = false,
  navigationButtons = [],
  baseUrl,
  id
}: Props) => {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className="modal-backdrop">
      <div onClick={(e) => e.stopPropagation()} className="modal-sheet ">
        <header className="sticky top-0 z-50 mb-2 bg-green-50 p-3 rounded-xl   grid  border-b-2-white border-b-gray-200 border-b  ">
          <div className="flex! flex-row! justify-between! w-full!  mb-2">
            <small>{title}</small>
            <LogoutOutlined onClick={() => router.back()} />
          </div>
          <div className="flex flex-row gap-1">

          {navigationButtons.find((b) => b === "add") && (
              <Link href={`/${baseUrl}/add`}>
              <Button icon={<PlusOutlined />} className="px-8!" />
            </Link>
          )}
          {navigationButtons.find((b) => b === "edit") && (
            <Link href={`/${baseUrl}/${id}/edit`}>
              <Button icon={<EditOutlined  />} className="px-8!" />
            </Link>
          )}
          {navigationButtons.find((b) => b === "save") && (
              <Link href="/${baseUrl}/save">
              <Button icon={<SaveOutlined />} className="px-8!" />
            </Link>
          )}
          {navigationButtons.find((b) => b === "delete") && (
              <Link href="/${baseUrl}/save">
              <Button icon={<DeleteOutlined />} className="px-8!" />
            </Link>
          )}
          </div>
          {showSearch && (
            <Input className="mt-2" placeholder="جستجو" allowClear={true} />
          )}
        </header>

        {children}
      </div>
    </div>
  );
};

export default SubPage;
