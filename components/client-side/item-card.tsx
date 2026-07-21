"use client";
import {
  EditFilled,
  EditOutlined,
  EyeFilled,
  EyeOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import Link from "next/link";
interface Props {
  id: number;
  title: string;
  children: React.ReactNode;
}
export default function ItemCard({ id, title, children }: Props) {
  return (
    <Link href={`users/${id}`}>
      <Card
        title={title}
        className="w-full border-b-green-200! border-b-2! mb-2!"
      >
        {children}
        <div className="flex flex-row justify-end gap-3">
          <EyeOutlined />
          {/* <EditOutlined /> */}
        </div>
      </Card>
    </Link>
  );
}
